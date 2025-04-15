import { OgMeetingRoomBookingInterface } from "@/models/interfaces/ogMeetingRoomBookingInterface";
import { OgMeetingRoomInterface } from "@/models/interfaces/ogMeetingRoomInterface";
import { observer } from "mobx-react";
import "./ogQRCard.scss";
import { getTwentyFourHourTimeFromTimeDateIsoString } from "@/app/utils/timeDateFunctions";

export interface OgQRCardProps {
	booking: OgMeetingRoomBookingInterface;
	room: OgMeetingRoomInterface;
}

export const OgQRCard = observer((props: OgQRCardProps) => {
	const startDateDisplayString = getTwentyFourHourTimeFromTimeDateIsoString(props.booking.startDateTimeString);
	const endDateDisplayString = getTwentyFourHourTimeFromTimeDateIsoString(props.booking.endDateTimeString);
	console.log("rendering ogQRCard", props.booking, props.room);
	return (
		<div className={"og-qr-card row"}>
			<div className={"og-qr-card-info col-10"}>
				<div className={"og-qr-card-title"}> {props.room.name + " - " + props.booking.companyName} </div>
				<div className={"og-qr-card-time"}> {startDateDisplayString + " - " + endDateDisplayString} </div>
			</div>
			<div className={"og-qr-card-qr-column col-2"}>
				<div className={"og-qr-card-qr-wrapper"}>
					<i className={"bi bi-qr-code"}></i>
				</div>
			</div>
		</div>
	);
});
