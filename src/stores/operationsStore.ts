import { OgApiInterface } from "@/models/interfaces/ogApiInterface";
import { OgLocationInterface } from "@/models/interfaces/ogLocationInterface";
import { OgMaintainanceTicketInterface } from "@/models/interfaces/ogMaintainanceTicketInterface";
import { OgMeetingRoomBookingInterface } from "@/models/interfaces/ogMeetingRoomBookingInterface";
import { OgMeetingRoomInterface } from "@/models/interfaces/ogMeetingRoomInterface";
import { OgMoveInterface } from "@/models/interfaces/ogMoveInterface";
import { OG_PAGE_TYPE } from "@/models/interfaces/ogPages";
import { OgViewingInterface } from "@/models/interfaces/ogViewingInterface";
import axios from "axios";
import { action, makeAutoObservable, observable, runInAction } from "mobx";

export interface OperationsStoreProps {
	locations: OgLocationInterface[];
	viewings?: OgViewingInterface[];
	tickets?: OgMaintainanceTicketInterface[];
	meetingRooms?: OgMeetingRoomInterface[];
	roomBookings?: OgMeetingRoomBookingInterface[];
}

export class OperationsStore {
	@observable locations: OgLocationInterface[] = [];

	@observable viewings?: OgViewingInterface[] = [];

	@observable tickets?: OgMaintainanceTicketInterface[] = [];

	@observable meetingRooms?: OgMeetingRoomInterface[] = [];

	@observable roomBookings?: OgMeetingRoomBookingInterface[] = [];

	@observable moveIns?: OgMoveInterface[] = [];

	@observable moveOuts?: OgMoveInterface[] = [];

	@observable page: OG_PAGE_TYPE = OG_PAGE_TYPE.Home;

	@observable isRightSidebarOpen: boolean = false;

	@observable currentLocation?: OgLocationInterface;

	availableBookings: OgMeetingRoomBookingInterface[] = [];

	constructor(props: OgApiInterface) {
		makeAutoObservable(this);
		this.getLocations();
	}

	@action setCurrentLocation(location: OgLocationInterface) {
		this.currentLocation = location;
	}

	@action changePage(page: OG_PAGE_TYPE) {
		this.page = page;
	}

	@action getLocations() {
		axios
			.get("/api/locations")
			.then((response) => {
				return response.data as OgLocationInterface[];
			})
			.catch((error) => {
				console.log("locations error" + error);
				return [];
			})
			.then((locations) => {
				runInAction(() => {
					if (JSON.stringify(this.locations) !== JSON.stringify(locations)) {
						this.locations = locations;
					}
				});
			});
	}

	@action getMeetingRoomsForLocation(location: OgLocationInterface) {
		axios
			.get("/api/locations/" + location.identifier + "/meetingRooms")
			.then((response) => {
				return response.data as OgMeetingRoomInterface[];
			})
			.catch((error) => {
				console.log("meeting rooms error" + error);
				return [];
			})
			.then((meetingRooms) => {
				runInAction(() => {
					// should add a check to see if the meeting rooms have changed before setting them
					this.meetingRooms = meetingRooms;
				});
			});
	}

	@action getBookingsForLocation(location: OgLocationInterface) {
		axios
			.get("/api/locations/" + location.identifier + "/meetingRoomBookings")
			.then((response) => {
				return response.data as OgMeetingRoomBookingInterface[];
			})
			.catch((error) => {
				console.log("meeting room bookings error" + error);
				return [];
			})
			.then((meetingRoomBookings) => {
				runInAction(() => {
					// should add a check to see if the meeting rooms have changed before setting them
					this.roomBookings = meetingRoomBookings;
				});
			});
	}

	// this will be an api method that will return all the viewings for a location
	@action getViewingsForLocation(location: OgLocationInterface) {
		axios
			.get("/api/locations/" + location.identifier + "/viewings")
			.then((response) => {
				return response.data as OgViewingInterface[];
			})
			.catch((error) => {
				console.log("viewings error" + error);
				return [];
			})
			.then((viewings) => {
				console.log("successfully got viewings");
				runInAction(() => {
					// should add a check to see if the meeting rooms have changed before setting them
					this.viewings = viewings;
				});
			});
	}

	// this will be an api method that will return all the move ins/outsfor a location
	@action getMovesForLocation(location: OgLocationInterface) {
		axios
			.get("/api/locations/" + location.identifier + "/moves")
			.then((response) => {
				return response.data as OgMoveInterface[];
			})
			.catch((error) => {
				console.log("moves error" + error);
				return [];
			})
			.then((moves) => {
				console.log("successfully got viewings");
				runInAction(() => {
					let moveOuts = moves.filter((move) => move.isCurrentlyResident);
					this.moveOuts = moveOuts;

					let moveIns = moves.filter((move) => !move.isCurrentlyResident);
					this.moveIns = moveIns;
				});
			});
	}

	// this will be an api method that will return all the availability for a location
	getAvailableBookingsForLocation(location: OgLocationInterface) {
		return [];
	}

	// this will be an api method that will return all the tickets for a location
	getTicketsForLocation(location: OgLocationInterface) {
		return [];
	}

	getCurrentLocation = () => {
		return this.currentLocation;
	};

	getViewingsForCurrentLocation = (): OgViewingInterface[] => {
		return this.viewings || [];
	};

	getMovesForCurrentLocation = (): OgMoveInterface[] => {
		let moves = [...(this.moveIns || []), ...(this.moveOuts || [])];
		return moves;
	};

	getBookingsForCurrentLocation = (): OgMeetingRoomBookingInterface[] => {
		return this.roomBookings || [];
	};

	getAvailableBookingsForCurrentLocation = (): OgMeetingRoomBookingInterface[] => {
		return this.availableBookings || [];
	};

	getMeetingRoomsForCurrentLocation = (): OgMeetingRoomInterface[] => {
		return this.meetingRooms || [];
	};
}
