import { OG_PAGE_TYPE } from "@/models/interfaces/ogPages";
import { OperationsStore } from "@/stores/operationsStore";
import { HomePageContents } from "../pageContents/homePageContents";
import { RoomBookingsContents } from "../pageContents/roomBookingsContents";
import "./mainAreas.scss";
import { observer } from "mobx-react";

interface MainAreaBodyProps {
	store: OperationsStore;
}
export const MainAreaBody = observer((props: MainAreaBodyProps) => {
	const page = () => {
		switch (props.store.page) {
			case OG_PAGE_TYPE.Home:
				return (
					<HomePageContents
						meetings={props.store.getBookingsForCurrentLocation()}
						viewings={props.store.getViewingsForCurrentLocation()}
						moves={props.store.getMovesForCurrentLocation()}
						rooms={props.store.getRoomsForCurrentLocation()}
					/>
				);
			case OG_PAGE_TYPE.RoomBookings:
				return <RoomBookingsContents availableBookings={props.store.getAvailableBookingsForCurrentLocation()} />;
			case OG_PAGE_TYPE.QRcode:
				return <p>{"I don't have a mockup for this page yet"}</p>;
		}
	};

	return <div className={"og-main-area-body row"}>{page()}</div>;
});
