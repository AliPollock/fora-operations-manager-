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
	}, [props.store]);

	console.log("rendering");
	return (
		<div className="og-portal-container row g-0">
			<SideBarLeft store={props.store} />
			<MainContentAreaContainer store={props.store} />
			<SideBarRight store={props.store} />
		</div>
	);
});
