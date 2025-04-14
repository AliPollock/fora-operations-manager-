import { OperationsStore } from "@/stores/operationsStore";
import { SideBarButton } from "../buttons/sideBarButton";
import { SideBar } from "./sideBar";

interface SideBarRightProps {
	store: OperationsStore;
}

export const SideBarRight = (props: SideBarRightProps) => {
	console.log("props.store.isRightSidebarOpen", props.store.isRightSidebarOpen);
	return (
		<div className="og-sidebar-right col-1 ">
			<SideBar
				topChildren={
					<>
						<SideBarButton iconName={"bi-bell"} onClick={() => {}} />
						<SideBarButton iconName={"bi-tag"} onClick={() => {}} />
					</>
				}
			/>
		</div>
	);
};
