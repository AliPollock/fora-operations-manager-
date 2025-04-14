export interface OgMeetingRoomBookingInterface {
	identifier: string;
	meetingRoomIdentifier: string;
	locationIdentifier: string;
	startDateTimeString: string;
	endDateTimeString: string;
	companyName?: string;
	isBooked?: boolean;
}
