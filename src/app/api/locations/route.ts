import { NextResponse } from "next/server";
import { fetchLocations } from "../../../mockData/locations";

// this route will get all locations
// In production add a limit and offset to the fetchLocations function to allow pagination
export async function GET() {
	const locations = await fetchLocations();

	return NextResponse.json(locations);
}
