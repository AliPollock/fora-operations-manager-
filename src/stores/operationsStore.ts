import { OgApiInterface } from "@/models/interfaces/ogApiInterface";
import { OgLocationInterface } from "@/models/interfaces/ogLocationInterface";
import { OgMaintainanceTicketInterface } from "@/models/interfaces/ogMaintainanceTicketInterface";
import { OgMeetingRoomBookingInterface } from "@/models/interfaces/ogMeetingRoomBookingInterface";
import { OgMeetingRoomInterface } from "@/models/interfaces/ogMeetingRoomInterface";
import { OgMovesInterface } from "@/models/interfaces/ogMoves";
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

	@observable moveIns?: OgMovesInterface[] = [];

	@observable moveOuts?: OgMovesInterface[] = [];

	@observable page: OG_PAGE_TYPE = OG_PAGE_TYPE.Home;

	@observable isRightSidebarOpen: boolean = false;

	@observable currentLocation?: OgLocationInterface;

	@observable availableBookings: OgMeetingRoomBookingInterface[] = [];

	constructor(props: OgApiInterface) {
		makeAutoObservable(this);
		if (props.locations) {
			this.locations = props.locations;
			this.currentLocation = this.locations[0];
		}
		if (props.viewings) {
			this.viewings = props.viewings;
		}

		if (props.tickets) {
			this.tickets = props.tickets;
		}

		if (props.meetingRooms) {
			this.meetingRooms = props.meetingRooms;
		}

		if (props.roomBookings) {
			this.roomBookings = props.roomBookings;
		}
	}

	@action changePage(page: OG_PAGE_TYPE) {
		this.page = page;
	}

	getLocations() {
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
				console.log("success");
				runInAction(() => {
					this.locations = locations;
				});
			});
	}

	getMeetingRoomsForCurrentLocation(location: OgLocationInterface) {
		axios
			.get("/api/locations[" + location.identifier + "]/meetingRooms")
			.then((response) => {
				return response.data as OgMeetingRoomInterface[];
			})
			.catch((error) => {
				console.log("meeting rooms error" + error);
				return [];
			})
			.then((meetingRooms) => {
				console.log("success");
				runInAction(() => {
					this.meetingRooms = meetingRooms;
				});
			});
	}

	getBookingsForLocation(location: OgLocationInterface) {
		console.log("location: ", location.identifier, location.name, location.city);
		axios
			.get("/api/locations[" + location.identifier + "]/meetingRoomBookings")
			.then((response) => {
				return response.data as OgMeetingRoomBookingInterface[];
			})
			.catch((error) => {
				console.log("meeting room bookings error" + error);
				return [];
			})
			.then((meetingRoomBookings) => {
				console.log("success");
				runInAction(() => {
					this.roomBookings = meetingRoomBookings;
				});
			});
	}

	@action getCurrentLocation = () => {
		if (!this.currentLocation) {
			this.currentLocation = this.locations[0];
		}
		return this.currentLocation;
	};

	getViewingsForCurrentLocation = (): OgViewingInterface[] => {
		return [];
	};

	getMovesForCurrentLocation = (): OgMovesInterface[] => {
		return [];
	};

	getBookingsForCurrentLocation = (): OgMeetingRoomBookingInterface[] => {
		if (!this.currentLocation || !this.currentLocation.identifier) {
			return [];
		}
		this.getBookingsForLocation(this.getCurrentLocation());
		return this.roomBookings || [];
	};

	getAvailableBookingsForCurrentLocation = (): OgMeetingRoomBookingInterface[] => {
		return [];
	};

	getRoomsForCurrentLocation = (): OgMeetingRoomInterface[] => {
		return [];
	};
}
