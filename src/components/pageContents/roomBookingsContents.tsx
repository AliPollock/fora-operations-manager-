import { OgMeetingRoomBookingInterface } from "@/models/interfaces/ogMeetingRoomBookingInterface";
import { OgMeetingRoomInterface } from "@/models/interfaces/ogMeetingRoomInterface";

interface RoomBookingsContentsProps {
	meetings: OgMeetingRoomBookingInterface[];
	rooms: OgMeetingRoomInterface[];
}

export const RoomBookingsContents = (props: RoomBookingsContentsProps) => {
	return (
		<div className="og-room-bookings-contents row">
			<div className="og-room-bookings-contents__location col-12"></div>
		</div>
	);
};
