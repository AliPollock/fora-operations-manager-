import { OperationsStore } from "@/stores/operationsStore";
import { SideBarButton } from "../buttons/sideBarButton";
import { SideBar } from "./sideBar";

interface SideBarRightProps {
	store: OperationsStore;
}

export const SideBarRight = (props: SideBarRightProps) => {
	return (
		<div className="og-sidebar-right col-1 ">
			<SideBar
				topChildren={
					<>
						<SideBarButton
							iconName={"bi-bell"}
							onClick={() => {
								console.log("this would slide out the side drawer");
							}}
						/>
						<SideBarButton
							iconName={"bi-tag"}
							onClick={() => {
								console.log("this would slide out the side drawer");
							}}
						/>
					</>
				}
			/>
		</div>
	);
};
