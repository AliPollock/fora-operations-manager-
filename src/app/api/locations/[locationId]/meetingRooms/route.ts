import { NextResponse } from "next/server";
import { fetchMeetingRoomsForLocation } from "../../../../../mockData/meetingRooms";

export async function GET(meetingRoomId: string) {
	// list specific meeting room: GET /meetingRooms/{meetingRoomId}
	console.log(`Fetching all meeting rooms`);

	const meetingRooms = await fetchMeetingRoomsForLocation(meetingRoomId);

	return NextResponse.json(meetingRooms);
}
