import { NextResponse } from "next/server";
import { fetchLocationWithId } from "../../../../mockData/locations";
import { notFound } from "next/navigation";

// list specific location: GET /locations/{locationId}
export async function GET(request: Request, { params }: { params: Promise<{ locationId: string }> }) {
	const { locationId } = await params;

	const location = await fetchLocationWithId(locationId);

	if (!location) {
		console.log(`No location with ID ${locationId}`);
		return notFound();
	}

	console.log(`Found location with ID ${locationId}: ${location.name}`);
	return NextResponse.json(location);
}
