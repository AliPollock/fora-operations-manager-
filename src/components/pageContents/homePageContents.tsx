import { OgLocationInterface } from "@/models/interfaces/ogLocationInterface";
import { OgMeetingRoomBookingInterface } from "@/models/interfaces/ogMeetingRoomBookingInterface";
import { OgMovesInterface } from "@/models/interfaces/ogMoves";
import { OgViewingInterface } from "@/models/interfaces/ogViewingInterface";
import { OperationsStore } from "@/stores/operationsStore";
import { OgPageColumn } from "../pageSections/ogPageColumn";

interface HomePageContentsProps {
	meetings: OgMeetingRoomBookingInterface[];
	viewings: OgViewingInterface[];
	moves: OgMovesInterface[];
}

export const HomePageContents = (props: HomePageContentsProps) => {
	return (
		<div className="og-home-page-contents row">
			<div className="col-6">
				<OgPageColumn title={"Meetings"}>
					{props.meetings.map((meeting) => {
						return <p>{"meeting cards to be put here"}</p>;
					})}
				</OgPageColumn>
			</div>
			<div className="col-6">
				<OgPageColumn title="Viewings">
					{props.viewings.map((meeting) => {
						return <p>{"viewings cards to be put here"}</p>;
					})}
				</OgPageColumn>
				<OgPageColumn title="Move in/out">
					{props.viewings.map((meeting) => {
						return <p>{"move cards to be put here"}</p>;
					})}
				</OgPageColumn>
			</div>
		</div>
	);
};
