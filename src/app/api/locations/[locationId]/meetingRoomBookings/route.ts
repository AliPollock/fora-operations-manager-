import { NextResponse } from "next/server";
import { fetchMeetingRoomBookingsForLocation } from "../../../../../mockData/meetingRoomBookings";

export async function GET(locationId: string) {
	// list specific meeting room: GET /meetingRooms/{meetingRoomId}
	// console.log(`Fetching all meeting room bookings for ${meetingRoomId}`);

	const meetingRoomBookings = await fetchMeetingRoomBookingsForLocation(locationId);

	return NextResponse.json(meetingRoomBookings);
}
