import { NextResponse } from "next/server";

// eslint-disable-next-line
export async function GET(request: Request) {
	return NextResponse.json({ message: "This is a mock API" });
}
