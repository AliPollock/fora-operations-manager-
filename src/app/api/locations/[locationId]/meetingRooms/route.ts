import { NextResponse } from "next/server";
import { fetchMeetingRoomsForLocation } from "../../../../../mockData/meetingRooms";
import { notFound } from "next/navigation";

// This route will get all meeting rooms for a location
export async function GET(request: Request, { params }: { params: Promise<{ locationId: string }> }) {
	const { locationId } = await params;

	const meetingRooms = await fetchMeetingRoomsForLocation(locationId);

	if (!meetingRooms) {
		console.log(`No meeting room with locationID ${locationId}`);
		return notFound();
	}

	return NextResponse.json(meetingRooms);
}
