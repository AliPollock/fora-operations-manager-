import { OgMeetingRoomBookingInterface } from "@/models/interfaces/ogMeetingRoomBookingInterface";
import { OgMeetingRoomInterface } from "@/models/interfaces/ogMeetingRoomInterface";
import { observer } from "mobx-react";
import "./ogColumnCard.scss";
import { getTwentyFourHourTimeFromTimeDateIsoString } from "@/app/utils/timeDateFunctions";
import { OgColumnCard } from "./ogColumnCard";

export interface OgQRCardProps {
	booking: OgMeetingRoomBookingInterface;
	room: OgMeetingRoomInterface;
}

export const OgQRCard = observer((props: OgQRCardProps) => {
	const startDateDisplayString = getTwentyFourHourTimeFromTimeDateIsoString(props.booking.startDateTimeString);
	const endDateDisplayString = getTwentyFourHourTimeFromTimeDateIsoString(props.booking.endDateTimeString);

	const cardTitle = props.room.name + " - " + props.booking.companyName;
	const cardTime = startDateDisplayString + " - " + endDateDisplayString;

	const qrCodeElement = () => {
		return (
			<div className={"og-qr-card-qr-wrapper"}>
				<i className={"bi bi-qr-code"}></i>
			</div>
		);
	};
	return <OgColumnCard titleText={cardTitle} bottomLeftText={cardTime} rightAreaElement={qrCodeElement()} />;
});
