import { NextResponse } from "next/server";
import { fetchMeetingRoomWithId } from "../../../../../../mockData/meetingRooms";

// This route will get a specific meeting room
export async function GET(request: Request, { params }: { params: Promise<{ meetingRoomId: string }> }) {
	const { meetingRoomId } = await params;

	const meetingRoom = await fetchMeetingRoomWithId(meetingRoomId);

	if (!meetingRoom) {
		console.log(`No meeting room with ID: ${meetingRoomId}`);
		return NextResponse.json({ error: "Meeting room not found" }, { status: 404 });
	}

	return NextResponse.json(meetingRoom);
}
