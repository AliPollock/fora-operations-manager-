import { OgMeetingRoomBookingInterface } from "@/models/interfaces/ogMeetingRoomBookingInterface";
import { OgMovesInterface } from "@/models/interfaces/ogMoves";
import { OgViewingInterface } from "@/models/interfaces/ogViewingInterface";
import { OgPageColumn } from "../pageSections/ogPageColumn";
import { OgMeetingRoomInterface } from "@/models/interfaces/ogMeetingRoomInterface";
import { OgQRCard } from "../cards/ogQRCard";
import { observer } from "mobx-react";
import { OperationsStore } from "@/stores/operationsStore";

interface HomePageContentsProps {
	store: OperationsStore;
}

export const HomePageContents = observer((props: HomePageContentsProps) => {
	return (
		<div className="og-home-page-contents row">
			<div className="col-6">
				<OgPageColumn title={"Meetings"}>
					{props.store.getBookingsForCurrentLocation().map((booking, index) => {
						const meetingRoom = props.store.getMeetingRoomsForCurrentLocation().filter((room) => {
							room.identifier === booking.meetingRoomIdentifier;
						})[0];
						console.log("meeting room", meetingRoom);
						return <div key={index}>{meetingRoom ? <OgQRCard booking={booking} room={meetingRoom} /> : null}</div>;
					})}
				</OgPageColumn>
			</div>
			<div className="col-6">
				<OgPageColumn title="Viewings">
					{props.store.getViewingsForCurrentLocation().map((viewing, index) => {
						return <p key={index}>{"viewings cards to be put here" + viewing.identifier}</p>;
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
