import { OperationsStore } from "@/stores/operationsStore";
import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import { SideBarLeft } from "../sidebars/sideBarLeft";
import { SideBarRight } from "../sidebars/sideBarRight";
import "./mainAreas.scss";
import { MainContentAreaContainer } from "./mainContentAreaContainer";
import { OG_PAGE_TYPE } from "@/models/interfaces/ogPages";

export interface PortalContainerProps {
	store: OperationsStore;
}

export const PortalContainer = observer((props: PortalContainerProps) => {
	// some logic for loading state
	const [loading, setLoading] = useState(true);
	// Set the current location to the first one in the list initially, in production we could have client or server storage for this default
	useEffect(() => {
		if (props.store.locations.length !== 0) {
			props.store.setCurrentLocation(props.store.locations[0]);
		}
	}, [props.store.locations]); // Re-render when locations are loaded

	// when the location changes, fetch the bookings, viewings, moves for that location or availability depending on page
	// This is a bit of a heavy handed aproach to build quickly but would separate out the state change scenarios more carefully in production
	useEffect(() => {
		if (props.store.currentLocation !== undefined) {
			if (props.store.page === OG_PAGE_TYPE.Home) {
				console.log("Home page selected");
				props.store.getMeetingRoomsForLocation(props.store.currentLocation);
				props.store.getBookingsForLocation(props.store.currentLocation);
				props.store.getViewingsForLocation(props.store.currentLocation);
				props.store.getMovesForLocation(props.store.currentLocation);
			} else if (props.store.page === OG_PAGE_TYPE.RoomBookings) {
				props.store.getAvailableBookingsForLocation(props.store.currentLocation);
			} else if (props.store.page === OG_PAGE_TYPE.QRcode) {
				console.log("QR code page selected");
			}
		}
	}, [props.store.currentLocation, props.store.page]);

	// extremely ugly loading screen for whilst the API calls take place and populate the initial data in the store
	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false); // Stop loading after timer
		}, 1000);

		return () => clearTimeout(timer);
	}, []);

	if (loading) {
		return (
			<div className="loading-screen">
				<h1>Loading...</h1>
			</div>
		);
	}

	// To fix the styling on the side bars for large and small images, I would not want these to exist as columns,
	//  but as independant divs that are floating on top of the main area, having them as columns was a bit of a hack to get the layout to work quickly
	//  but it is not the best solution. I would also want to add some sort of animation to the loading screen and the transition between location changes.
	return (
		<div className="og-portal-container row g-0">
			<SideBarLeft store={props.store} />
			<MainContentAreaContainer store={props.store} />
			<SideBarRight store={props.store} />
		</div>
	);
});
