import { NextResponse } from "next/server";
import { fetchMeetingRoomWithId } from "../../../../../../mockData/meetingRooms";

export async function GET(request: Request, { params }: { params: Promise<{ meetingRoomId: string }> }) {
	const { meetingRoomId } = await params;
	// console.log(`Fetching meeting room with ID: ${meetingRoomId}`);

	const meetingRoom = await fetchMeetingRoomWithId(meetingRoomId);

	if (!meetingRoom) {
		console.log(`No meeting room with ID: ${meetingRoomId}`);
		return NextResponse.json({ error: "Meeting room not found" }, { status: 404 });
	}

	return NextResponse.json(meetingRoom);
}
