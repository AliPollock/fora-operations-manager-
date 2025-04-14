import { OgMeetingRoomBookingInterface } from "@/models/interfaces/ogMeetingRoomBookingInterface";
import { OgMeetingRoomInterface } from "@/models/interfaces/ogMeetingRoomInterface";
import { observer } from "mobx-react";

export interface OgQRCardProps {
	booking: OgMeetingRoomBookingInterface;
	room: OgMeetingRoomInterface;
}

export const OgQRCard = observer((props: OgQRCardProps) => {
	console.log("rendering ogQRCard", props.booking, props.room);
	return (
		<div className={"og-qr-card"}>
			<p> {props.room.name + " - " + props.room.name} </p>
			<p> {props.booking.startDateTimeString + " - " + props.booking.endDateTimeString} </p>
		</div>
	);
});
