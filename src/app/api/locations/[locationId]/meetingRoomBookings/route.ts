import { NextResponse } from "next/server";
import { fetchMeetingRoomBookingsForLocation } from "../../../../../mockData/meetingRoomBookings";
import { notFound } from "next/navigation";

export async function GET(request: Request, { params }: { params: Promise<{ locationId: string }> }) {
	// console.log(`Fetching all meeting room bookings for ${meetingRoomId}`);
	const { locationId } = await params;

	const meetingRoomBookings = await fetchMeetingRoomBookingsForLocation(locationId);

	if (!meetingRoomBookings) {
		console.log(`No meeting room bookings for location ID ${locationId}`);
		return notFound();
	}

	return NextResponse.json(meetingRoomBookings);
}
