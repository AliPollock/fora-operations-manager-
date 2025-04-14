import { OgMeetingRoomBookingInterface } from "@/models/interfaces/ogMeetingRoomBookingInterface";
import { OgMovesInterface } from "@/models/interfaces/ogMoves";
import { OgViewingInterface } from "@/models/interfaces/ogViewingInterface";
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
					{props.meetings.map((meeting, index) => {
						return <p key={index}>{"meeting cards to be put here" + meeting.identifier}</p>;
					})}
				</OgPageColumn>
			</div>
			<div className="col-6">
				<OgPageColumn title="Viewings">
					{props.viewings.map((viewing, index) => {
						return <p key={index}>{"viewings cards to be put here" + viewing.identifier}</p>;
					})}
				</OgPageColumn>
				<OgPageColumn title="Move in/out">
					{props.moves.map((move, index) => {
						return <p key={index}>{"move cards to be put here" + move.identifier}</p>;
					})}
				</OgPageColumn>
			</div>
		</div>
	);
};
