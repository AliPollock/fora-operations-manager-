import { NextResponse } from "next/server";
import { fetchLocationWithId } from "../../../../mockData/locations";
import { notFound } from "next/navigation";

// In production add a limit and offset to the fetchLocations function to allow pagination
export async function GET(request: Request, { params }: { params: Promise<{ locationId: string }> }) {
	// list specific location: GET /locations/{locationId}
	const { locationId } = await params;
	// console.log(`Fetching location with ID ${locationId}`);

	const location = await fetchLocationWithId(locationId);

	if (!location) {
		console.log(`No location with ID ${locationId}`);
		return notFound();
	}

	console.log(`Found location with ID ${locationId}: ${location.name}`);
	return NextResponse.json(location);
}
