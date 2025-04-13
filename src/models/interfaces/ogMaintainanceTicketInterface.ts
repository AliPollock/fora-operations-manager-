export interface OgMaintainanceTicketInterface {
	identifier: string;
	locationIdentifier: string;
	description: string;
	ticketType: OG_MAINTAINANCE_TICKET_TYPE;
}

export enum OG_MAINTAINANCE_TICKET_TYPE {
	Cleaning = "Cleaning",
	ITsupport = "IT Support",
	repair = "Repair",
	clientInduction = "Client Induction",
	buildingCompliance = "Building Compliance"
}
