import { OG_PAGE_TYPE } from "@/models/interfaces/ogPages";
import { OperationsStore } from "@/stores/operationsStore";
import { SideBarButton } from "../buttons/sideBarButton";
import { SideBar } from "./sideBar";
import Image from "next/image";

interface SideBarLeftProps {
	store: OperationsStore;
}

export const SideBarLeft = (props: SideBarLeftProps) => {
	return (
		<div className="og-sidebar-left  col-1">
			<SideBar
				topChildren={
					<>
						<Image src="/FORA_logomarque_black 1.jpg" alt="Fora Icon" width="24" height="24" className={"og-fora-logo-sidebar"} />
						<SideBarButton iconName={"bi-house-door"} onClick={() => props.store.changePage(OG_PAGE_TYPE.Home)} />
						<SideBarButton iconName={"bi-calendar4"} onClick={() => props.store.changePage(OG_PAGE_TYPE.RoomBookings)} />
						<SideBarButton iconName={"bi-qr-code"} onClick={() => props.store.changePage(OG_PAGE_TYPE.QRcode)} />
					</>
				}
				bottomChildren={
					<>
						<SideBarButton iconName={"bi-building"} onClick={() => props.store.changePage(OG_PAGE_TYPE.QRcode)} />
						<SideBarButton iconName={"bi-box-arrow-in-left"} onClick={() => props.store.changePage(OG_PAGE_TYPE.QRcode)} />
					</>
				}
			></SideBar>
		</div>
	);
};
