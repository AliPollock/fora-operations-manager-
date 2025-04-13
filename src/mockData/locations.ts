import { OgLocationInterface } from "@/models/interfaces/ogLocationInterface";

const LOCATIONS: Record<string, OgLocationInterface> = {
	"loc_cef77e0e-aa88-4b00-babd-3777d4cfb099": {
		identifier: "loc_cef77e0e-aa88-4b00-babd-3777d4cfb099",
		name: "Mayfair",
		city: "London"
	},
	"loc_5588a035-4496-4fa9-adcf-996b030ebd43": {
		identifier: "loc_5588a035-4496-4fa9-adcf-996b030ebd43",
		name: "Kontorhaus",
		city: "Berlin"
	}
};

export async function fetchLocations(): Promise<OgLocationInterface[]> {
	// in production this function would take pagination arguments, e.g. (limit: number, offset?: number)
	const locations = Object.values(LOCATIONS);
	return Promise.resolve(locations); // wrap in promise as would be async in production
}
export async function fetchLocationWithId(locationId: string): Promise<OgLocationInterface | null> {
	const location = LOCATIONS[locationId] ?? null;

	return Promise.resolve(location); // wrap in promise as would be async in production
}
