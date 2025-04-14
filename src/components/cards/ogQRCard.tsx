import { OgMeetingRoomBookingInterface } from "@/models/interfaces/ogMeetingRoomBookingInterface";
import { OgMeetingRoomInterface } from "@/models/interfaces/ogMeetingRoomInterface";

export interface OgQRCardProps {
	meeting: OgMeetingRoomBookingInterface;
	room: OgMeetingRoomInterface;
}

export const OgQRCard = (props: OgQRCardProps) => {
	return (
		<div className={"og-qr-card"}>
			<p> {props.room.name + " - " + props.room.name} </p>
		</div>
	);
};
