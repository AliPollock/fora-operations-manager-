import { NextResponse } from "next/server";
import { fetchLocations } from "../../../mockData/locations";
import { notFound } from "next/navigation";

export async function GET() {
	// list specific location: GET /locations/{locationId}
	console.log(`Fetching all locations`);

	const locations = await fetchLocations();

	return NextResponse.json(locations);
}
