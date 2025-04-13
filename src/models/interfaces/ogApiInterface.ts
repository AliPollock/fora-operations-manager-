import { OgLocationInterface } from "./ogLocationInterface";
import { OgMaintainanceTicketInterface } from "./ogMaintainanceTicketInterface";
import { OgMeetingRoomBookingInterface } from "./ogMeetingRoomBookingInterface";
import { OgMeetingRoomInterface } from "./ogMeetingRoomInterface";
import { OgViewingInterface } from "./ogViewingInterface";

export interface OgApiInterface {
	locations?: OgLocationInterface[];
	viewings?: OgViewingInterface[];
	tickets?: OgMaintainanceTicketInterface[];
	meetingRooms?: OgMeetingRoomInterface[];
	roomBookings?: OgMeetingRoomBookingInterface[];
}
