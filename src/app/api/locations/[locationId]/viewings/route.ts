import { fetchViewingsForLocation } from "@/mockData/viewings";
import { notFound } from "next/navigation";
import { NextResponse } from "next/server";

// This route will get all viewings for a location
export async function GET(request: Request, { params }: { params: Promise<{ locationId: string }> }) {
	const { locationId } = await params;

	const viewings = await fetchViewingsForLocation(locationId);

	if (!viewings) {
		console.log(`No viewings for location ID ${locationId}`);
		return notFound();
	}

	return NextResponse.json(viewings);
}
