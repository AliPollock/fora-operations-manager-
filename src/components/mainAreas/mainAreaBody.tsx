import { OG_PAGE_TYPE } from "@/models/interfaces/ogPages";
import { OperationsStore } from "@/stores/operationsStore";
import { HomePageContents } from "../pageContents/homePageContents";
import { RoomBookingsContents } from "../pageContents/roomBookingsContents";
import "./mainAreas.scss";

interface MainAreaBodyProps {
	store: OperationsStore;
}
export const MainAreaBody = (props: MainAreaBodyProps) => {
	let page = () => {
		switch (props.store.page) {
			case OG_PAGE_TYPE.Home:
				return <HomePageContents meetings={props.store.getBookingsForCurrentLocation()} viewings={props.store.getViewingsForCurrentLocation()} moves={props.store.getMovesForCurrentLocation()} />;
			case OG_PAGE_TYPE.RoomBookings:
				return <RoomBookingsContents meetings={props.store.getBookingsForCurrentLocation()} rooms={props.store.getMeetingRoomsForCurrentLocation()} />;
			case OG_PAGE_TYPE.QRcode:
				return <>"I don't have a mockup for this page yet"</>;
		}
	};

	return <div className="og-main-area-body row">{page()}</div>;
};
