import { OgMeetingRoomBookingInterface } from "@/models/interfaces/ogMeetingRoomBookingInterface";
import { OgMovesInterface } from "@/models/interfaces/ogMoves";
import { OgViewingInterface } from "@/models/interfaces/ogViewingInterface";
import { OgPageColumn } from "../pageSections/ogPageColumn";
import { OgMeetingRoomInterface } from "@/models/interfaces/ogMeetingRoomInterface";
import { OgQRCard } from "../cards/ogQRCard";
import { observer } from "mobx-react";
import { OperationsStore } from "@/stores/operationsStore";
import { OgViewingCard } from "../cards/ogViewingCard";
import "./homePageContents.scss";

interface HomePageContentsProps {
	store: OperationsStore;
}

// in production would have completely different components for mobile and desktop
// This comoponent is a bit innefficient  and too large so it would better to have some store logic handle the data
export const HomePageContents = observer((props: HomePageContentsProps) => {
	return (
		<div className="og-home-page-contents row">
			<div className="og-meetings-column col-6">
				<OgPageColumn title={"Meetings"}>
					{props.store.getBookingsForCurrentLocation().map((booking, index) => {
						const meetingRoom = props.store.getMeetingRoomsForCurrentLocation().filter((room) => room.identifier === booking.meetingRoomIdentifier)[0];
						return <div key={index}>{meetingRoom ? <OgQRCard booking={booking} room={meetingRoom} /> : null}</div>;
					})}
				</OgPageColumn>
			</div>
			<div className="og-viewing-move-column col-6">
				<OgPageColumn title="Viewings">
					{props.store.getViewingsForCurrentLocation().map((viewing, index) => {
						return <OgViewingCard key={index} viewing={viewing} />;
					})}
				</OgPageColumn>
				<OgPageColumn title="Move in/out">
					{props.store.getMovesForCurrentLocation().map((move, index) => {
						return <p key={index}>{"move cards to be put here" + move.identifier}</p>;
					})}
				</OgPageColumn>
			</div>
		</div>
	);
});
