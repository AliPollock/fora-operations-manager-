import { OgApiInterface } from "@/models/interfaces/ogApiInterface";
import { OgLocationInterface } from "@/models/interfaces/ogLocationInterface";
import { OgMaintainanceTicketInterface } from "@/models/interfaces/ogMaintainanceTicketInterface";
import { OgMeetingRoomBookingInterface } from "@/models/interfaces/ogMeetingRoomBookingInterface";
import { OgMeetingRoomInterface } from "@/models/interfaces/ogMeetingRoomInterface";
import { OgViewingInterface } from "@/models/interfaces/ogViewingInterface";
import { observable } from "mobx";

export interface OperationsStoreProps {
	locations: OgLocationInterface[];
	viewings?: OgViewingInterface[];
	tickets?: OgMaintainanceTicketInterface[];
	meetingRooms?: OgMeetingRoomInterface[];
	roomBookings?: OgMeetingRoomBookingInterface[];
}

export class OperationsStore {
	@observable locations: OgLocationInterface[];

	@observable viewings?: OgViewingInterface[] = [];

	@observable tickets?: OgMaintainanceTicketInterface[] = [];

	@observable meetingRooms?: OgMeetingRoomInterface[] = [];

	@observable roomBookings?: OgMeetingRoomBookingInterface[] = [];

	constructor(props: OgApiInterface) {
		this.locations = props.locations;
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
}
