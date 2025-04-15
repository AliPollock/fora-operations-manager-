import { OgPageColumn } from "../pageSections/ogPageColumn";
import { OgQRCard } from "../cards/ogQRCard";
import { observer } from "mobx-react";
import { OperationsStore } from "@/stores/operationsStore";
import { OgViewingCard } from "../cards/ogViewingCard";
import "./homePageContents.scss";
import { OgMoveCard } from "../cards/ogMovesCard";

interface HomePageContentsProps {
	store: OperationsStore;
}

// in production would have completely different components for mobile and desktop
// This comoponent is a bit innefficient and too large so it would better to have some model containing the logic and handling the data
export const HomePageContents = observer((props: HomePageContentsProps) => {
	const getBookingsComponents = () => {
		const meetingRooms = props.store.getMeetingRoomsForCurrentLocation();
		const bookings = props.store.getBookingsForCurrentLocation();
		if (meetingRooms.length === 0 || bookings.length === 0) {
			return <p className="og-no-meetings-message">No meetings scheduled</p>;
		}
		return bookings.map((booking, index) => {
			const meetingRoom = meetingRooms.filter((room) => room.identifier === booking.meetingRoomIdentifier);
			if (meetingRoom.length > 0) {
				return <OgQRCard key={index} booking={booking} room={meetingRoom[0]} />;
			}
		});
	};

	return (
		<div className="og-home-page-contents row">
			<div className="og-meetings-column col-6">
				<OgPageColumn className={"og-meetings-page-column"} title={"Meetings"}>
					{getBookingsComponents()}
				</OgPageColumn>
			</div>
			<div className="og-viewing-move-column col-6">
				<OgPageColumn className={"og-viewings-page-column"} title="Viewings">
					{props.store.getViewingsForCurrentLocation().length > 0 ? (
						props.store.getViewingsForCurrentLocation().map((viewing, index) => {
							return <OgViewingCard key={index} viewing={viewing} />;
						})
					) : (
						<p className="og-no-viewings-message">No viewings scheduled</p>
					)}
				</OgPageColumn>
				<OgPageColumn className={"og-move-page-column"} title="Move in/out">
					{props.store.getMovesForCurrentLocation().length > 0 ? (
						props.store.getMovesForCurrentLocation().map((move, index) => {
							return <OgMoveCard key={index} move={move} />;
						})
					) : (
						<p className="og-no-moves-message">No moves scheduled</p>
					)}
				</OgPageColumn>
			</div>
		</div>
	);
});
