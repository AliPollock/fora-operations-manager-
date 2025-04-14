import { OG_PAGE_TYPE } from "@/models/interfaces/ogPages";
import { OperationsStore } from "@/stores/operationsStore";
import { SideBarButton } from "../buttons/sideBarButton";
import { SideBar } from "./sideBar";
import Image from "next/image";

interface SideBarLeftProps {
	store: OperationsStore;
}

export const SideBarLeft = (props: SideBarLeftProps) => {
	const changePageToRoomBookings = () => {
		console.log("changePageToRoomBookings");
		props.store.changePage(OG_PAGE_TYPE.RoomBookings);
	};

	const changePageToHome = () => {
		console.log("changePageToHome");
		props.store.changePage(OG_PAGE_TYPE.Home);
	};
	const changePageToQrCode = () => {
		console.log("changePageToQrCode");
		props.store.changePage(OG_PAGE_TYPE.QRcode);
	};

	return (
		<div className="og-sidebar-left  col-1">
			<SideBar
				topChildren={
					<>
						<Image src="/FORA_logomarque_black 1.jpg" alt="Fora Icon" width="24" height="24" className={"og-fora-logo-sidebar"} />
						<SideBarButton iconName={"bi-house-door"} onClick={() => changePageToHome()} />
						<SideBarButton iconName={"bi-calendar4"} onClick={() => changePageToRoomBookings()} />
						<SideBarButton iconName={"bi-qr-code"} onClick={() => changePageToQrCode()} />
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
