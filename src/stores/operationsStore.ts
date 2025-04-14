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

	constructor(props: OgApiInterface) {
		makeAutoObservable(this);
		if (props.locations) {
			// just set a default here but would need to think about the error handling for no locations coming from the api and may need to trigger a direct to and erro page
			this.locations = props.locations;
			this.currentLocation = props.locations[0];
		} else {
			this.getLocations();
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
			.then((reponse) => {
				return reponse.data as OgLocationInterface[];
			})
			.catch((error) => {
				console.log(error);
				return [];
			})
			.then((locations) => {
				console.log("success");
				runInAction(() => {
					this.locations = locations;
				});
			});
	}

	@action getCurrentLocation = () => {
		if (!this.currentLocation) {
			this.currentLocation = this.locations[0];
		}
		return this.currentLocation;
	};

	getBookingsForCurrentLocation = (): OgMeetingRoomBookingInterface[] => {
		return [];
	};

	getViewingsForCurrentLocation = (): OgViewingInterface[] => {
		return [];
	};

	getMovesForCurrentLocation = (): OgMovesInterface[] => {
		return [];
	};

	getMeetingRoomsForCurrentLocation = (): OgMeetingRoomInterface[] => {
		return [];
	};
}
