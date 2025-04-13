import { OperationsStore } from "@/stores/operationsStore";
import { SideBarButton } from "../buttons/sideBarButton";

interface SideBarRightProps {
	store: OperationsStore;
}

export const SideBarRight = (props: SideBarRightProps) => {
	console.log("props.store.isRightSidebarOpen", props.store.isRightSidebarOpen);
	return (
		<div className="og-sidebar-right col-1 d-flex flex-column">
			<SideBarButton iconName={"home"} onClick={() => {}} />
			<SideBarButton iconName={"calendar"} onClick={() => {}} />
		</div>
	);
};
