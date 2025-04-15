import { NextResponse } from "next/server";

// This route will get a specific viewing
export async function GET(request: Request, { params }: { params: Promise<{ viewingId: string }> }) {
	return NextResponse.json({ message: "This is a mock API, route not built yet" });
}
