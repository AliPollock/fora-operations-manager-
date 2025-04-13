import { OperationsStore } from "@/stores/operationsStore";
import { observer } from "mobx-react";
import { useEffect } from "react";
import { SideBarLeft } from "../sidebars/sideBarLeft";
import { SideBarRight } from "../sidebars/sideBarRight";
import { MainContentArea } from "./mainContentArea";
import "./mainAreas.scss";

export interface MainContentAreaContainerProps {
	store: OperationsStore;
}

export const MainContentAreaContainer = observer((props: MainContentAreaContainerProps) => {
	useEffect(() => {
		props.store.getLocations(); // Fetch locations when the component mounts
	}, [props.store]);

	console.log("rendering");
	return (
		<div className="og-main-content-area-container row">
			<SideBarLeft store={props.store} />
			<MainContentArea store={props.store} />
			<SideBarRight store={props.store} />
		</div>
	);
});
