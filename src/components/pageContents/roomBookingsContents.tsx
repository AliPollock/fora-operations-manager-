import { OgMeetingRoomBookingInterface } from "@/models/interfaces/ogMeetingRoomBookingInterface";
import { OgPageGrid } from "../pageSections/ogPageGrid";

interface RoomBookingsContentsProps {
	availableBookings: OgMeetingRoomBookingInterface[];
}

export const RoomBookingsContents = (props: RoomBookingsContentsProps) => {
	return (
		<div className="og-room-bookings-contents row">
			<div className="og-room-bookings-contents__location col-12">
				<OgPageGrid title="Live availability">
					{props.availableBookings.map((booking, index) => {
						return <p key={index}>{"available cards to be put here" + booking.identifier}</p>;
					})}
				</OgPageGrid>
			</div>
		</div>
	);
};
