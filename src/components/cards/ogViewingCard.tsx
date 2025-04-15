import { OgViewingInterface } from "@/models/interfaces/ogViewingInterface";
import { OgColumnCard } from "./ogColumnCard";
import { getDateFromTimeDateIsoString, getTwentyFourHourTimeFromTimeDateIsoString } from "@/app/utils/timeDateFunctions";
import { OgIconButton } from "../buttons/iconButton";
import "./ogColumnCard.scss";

export interface OgViewingCardInterface {
	viewing: OgViewingInterface;
}

export const OgViewingCard = (props: OgViewingCardInterface) => {
	const startDateDisplayString = getDateFromTimeDateIsoString(props.viewing.startDateTimeString);
	const startTimeDisplayString = getTwentyFourHourTimeFromTimeDateIsoString(props.viewing.startDateTimeString);

	return (
		<OgColumnCard
			titleText={props.viewing.companyName}
			bottomLeftText={startDateDisplayString + " @ " + startTimeDisplayString}
			rightAreaElement={
				<OgIconButton
					buttonClass={"og-viewing-card-button"}
					iconClass={"bi-chevron-right"}
					onClick={() => {
						console.log("I haven't implemented this action");
					}}
				/>
			}
		/>
	);
};
