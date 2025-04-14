import { OperationsStore } from "@/stores/operationsStore";
import { observer } from "mobx-react";
import { useEffect } from "react";
import { SideBarLeft } from "../sidebars/sideBarLeft";
import { SideBarRight } from "../sidebars/sideBarRight";
import "./mainAreas.scss";
import { MainContentAreaContainer } from "./mainContentAreaContainer";

export interface PortalContainerProps {
	store: OperationsStore;
}

export const PortalContainer = observer((props: PortalContainerProps) => {
	useEffect(() => {
		props.store.getLocations(); // Fetch locations when the component mounts
	}, []);

	// To fix the styling on the side bars for large and small images, I would probably not want these to exist as columns,
	//  but as independant divs that are floating on top of the main area
	return (
		<div className="og-portal-container row g-0">
			<SideBarLeft store={props.store} />
			<MainContentAreaContainer store={props.store} />
			<SideBarRight store={props.store} />
		</div>
	);
});
