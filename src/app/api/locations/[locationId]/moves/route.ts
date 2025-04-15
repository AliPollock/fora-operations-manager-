import { fetchMovesForLocation } from "@/mockData/moves";
import { notFound } from "next/navigation";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: Promise<{ locationId: string }> }) {
	const { locationId } = await params;

	const moves = await fetchMovesForLocation(locationId);

	if (!moves) {
		console.log(`No moves with locationID ${locationId}`);
		return notFound();
	}

	return NextResponse.json(moves);
}
