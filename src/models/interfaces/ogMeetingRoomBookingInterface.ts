export interface OgMeetingRoomBookingInterface {
	identifier: string;
	meetingRoomIdentifier: string;
	startDateTimeString: string;
	endDateTimeString: string;
	companyName?: string;
	isBooked?: boolean;
}
