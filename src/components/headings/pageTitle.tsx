import { OG_PAGE_TYPE } from "@/models/interfaces/ogPages";
import "./pageTitle.scss";

interface PageTitleProps {
	page: OG_PAGE_TYPE;
}

export const PageTitle = (props: PageTitleProps) => {
	const pageTitle = () => {
		switch (props.page) {
			case OG_PAGE_TYPE.RoomBookings:
				return "Meeting Room Bookings";
			case OG_PAGE_TYPE.QRcode:
				return "QR Code";
			default:
				return "Hey, Ali";
		}
	};

	return <h1 className="og-page-title">{pageTitle()}</h1>;
};
