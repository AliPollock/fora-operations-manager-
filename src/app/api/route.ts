import { fetchLocations, fetchLocationWithId } from "../../mockData/locations";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
	const locations = await fetchLocations();

	return NextResponse.json(locations);
}
