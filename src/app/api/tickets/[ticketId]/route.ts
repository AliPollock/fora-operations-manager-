import { NextResponse } from "next/server";

// eslint-disable-next-line
export async function GET(request: Request, { params }: { params: Promise<{ ticketId: string }> }) {
	return NextResponse.json({ message: "This is a mock API" });
}
