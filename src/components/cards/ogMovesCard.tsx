import { getDateFromTimeDateIsoString, getTwentyFourHourTimeFromTimeDateIsoString } from "@/app/utils/timeDateFunctions";
import { OgMoveInterface } from "@/models/interfaces/ogMoveInterface";
import { OgColumnCard } from "./ogColumnCard";
import { OgIconButton } from "../buttons/iconButton";

export interface OgMoveCardInterface {
	move: OgMoveInterface;
}
// I'm not sure which other property the mockup wants for the moves
// I chose to just interpret this as a move of the whole property
export const OgMoveCard = (props: OgMoveCardInterface) => {
	const startDateDisplayString = getDateFromTimeDateIsoString(props.move.moveDate);

	return (
		<OgColumnCard
			titleText={props.move.companyName}
			bottomLeftText={startDateDisplayString}
			rightAreaElement={
				<OgIconButton
					buttonClass={"og-move-card-button"}
					iconClass={"bi-chevron-right"}
					onClick={() => {
						console.log("I haven't implemented this action");
					}}
				/>
			}
		/>
	);
};
