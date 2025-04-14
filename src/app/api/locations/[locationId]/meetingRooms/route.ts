import { NextResponse } from "next/server";
import { fetchMeetingRoomsForLocation } from "../../../../../mockData/meetingRooms";
import { notFound } from "next/navigation";

export async function GET(request: Request, { params }: { params: Promise<{ locationId: string }> }) {
	// list specific meeting room: GET /meetingRooms/{meetingRoomId}
	const { locationId } = await params;

	const meetingRooms = await fetchMeetingRoomsForLocation(locationId);

	if (!meetingRooms) {
		console.log(`No meeting room with locationID ${locationId}`);
		return notFound();
	}

	return NextResponse.json(meetingRooms);
}
