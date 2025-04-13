import { OG_PAGE_TYPE } from "@/models/interfaces/ogPages";
import { OperationsStore } from "@/stores/operationsStore";
import { SideBarButton } from "../buttons/sideBarButton";

interface SideBarLeftProps {
	store: OperationsStore;
}

export const SideBarLeft = (props: SideBarLeftProps) => {
	return (
		<div className="og-sidebar-left col-1 d-flex flex-column">
			<SideBarButton iconName={"home"} onClick={() => props.store.changePage(OG_PAGE_TYPE.Home)} />
			<SideBarButton iconName={"calendar"} onClick={() => props.store.changePage(OG_PAGE_TYPE.RoomBookings)} />
			<SideBarButton iconName={"qrcode"} onClick={() => props.store.changePage(OG_PAGE_TYPE.QRcode)} />
		</div>
	);
};
