import { OgLocationInterface } from "@/models/interfaces/ogLocationInterface";

const LOCATIONS: Record<string, OgLocationInterface> = {
	"loc_cef77e0e-aa88-4b00-babd-3777d4cfb099": {
		identifier: "loc_cef77e0e-aa88-4b00-babd-3777d4cfb099",
		name: "Mayfair",
		city: "London"
	},
	"loc_f23a91e6-4ff1-4b93-836f-8af003c8b301": {
		identifier: "loc_f23a91e6-4ff1-4b93-836f-8af003c8b301",
		name: "South Bank & Waterloo",
		city: "London"
	},
	"loc_d3b7421d-a4f6-4054-9376-efc10b20ddc6": {
		identifier: "loc_d3b7421d-a4f6-4054-9376-efc10b20ddc6",
		name: "The City",
		city: "London"
	},
	"loc_4b77e8ce-dbc6-4305-9eb8-50a0bcfef516": {
		identifier: "loc_4b77e8ce-dbc6-4305-9eb8-50a0bcfef516",
		name: "Vauxhall",
		city: "London"
	},
	"loc_83a0bc51-c60a-4800-ae60-e248abc26458": {
		identifier: "loc_83a0bc51-c60a-4800-ae60-e248abc26458",
		name: "Shoreditch & Spitalfields",
		city: "London"
	},
	"loc_3ee8122c-d184-459d-ae0c-338b18520297": {
		identifier: "loc_3ee8122c-d184-459d-ae0c-338b18520297",
		name: "Holborn & Covent Garden",
		city: "London"
	},
	"loc_7af5019a-e88b-409f-a1ff-9a29e1dbb4b1": {
		identifier: "loc_7af5019a-e88b-409f-a1ff-9a29e1dbb4b1",
		name: "Victoria",
		city: "London"
	},
	"loc_d89a4ad8-1906-41ad-8b5c-bf06d69e13a2": {
		identifier: "loc_d89a4ad8-1906-41ad-8b5c-bf06d69e13a2",
		name: "Paddington",
		city: "London"
	},
	"loc_cab94f15-e41c-422e-bcae-8fc37b3cbba6": {
		identifier: "loc_cab94f15-e41c-422e-bcae-8fc37b3cbba6",
		name: "Borough & London Bridge",
		city: "London"
	},
	"loc_f11b9b15-f358-44b8-bb3d-4be94c0668c5": {
		identifier: "loc_f11b9b15-f358-44b8-bb3d-4be94c0668c5",
		name: "Hammersmith",
		city: "London"
	},
	"loc_b6c69b9f-688e-4de6-8ae4-93f705167b03": {
		identifier: "loc_b6c69b9f-688e-4de6-8ae4-93f705167b03",
		name: "Canary Wharf",
		city: "London"
	},
	"loc_c3ad5df5-d4c4-461f-bb44-b1a3671e85d1": {
		identifier: "loc_c3ad5df5-d4c4-461f-bb44-b1a3671e85d1",
		name: "King's Cross",
		city: "London"
	},
	"loc_ace14f5e-10df-4869-b749-f80d893fbc15": {
		identifier: "loc_ace14f5e-10df-4869-b749-f80d893fbc15",
		name: "Notting Hill",
		city: "London"
	},
	"loc_a1b35fea-0b2e-4e3d-8303-b7d50da156f2": {
		identifier: "loc_a1b35fea-0b2e-4e3d-8303-b7d50da156f2",
		name: "Farringdon & Clerkenwell",
		city: "London"
	},
	"loc_9fdeea09-4fb2-48c2-b60e-a6d7649e191c": {
		identifier: "loc_9fdeea09-4fb2-48c2-b60e-a6d7649e191c",
		name: "Soho",
		city: "London"
	},
	"loc_ae2c2aa5-2ce5-482e-8c46-e73024dfe1f8": {
		identifier: "loc_ae2c2aa5-2ce5-482e-8c46-e73024dfe1f8",
		name: "Marylebone & Fitzrovia",
		city: "London"
	},
	"loc_5588a035-4496-4fa9-adcf-996b030ebd43": {
		identifier: "loc_5588a035-4496-4fa9-adcf-996b030ebd43",
		name: "Kontorhaus",
		city: "Berlin"
	},
	"loc_3f7c1d68-35f2-41b4-9437-0a9d8e6ec438": {
		identifier: "loc_3f7c1d68-35f2-41b4-9437-0a9d8e6ec438",
		name: "Linden Palais",
		city: "Berlin"
	},
	"loc_a9d73e25-86e8-4e96-a0d1-4020e4c14f8c": {
		identifier: "loc_a9d73e25-86e8-4e96-a0d1-4020e4c14f8c",
		name: "Presse Podium",
		city: "Berlin"
	},
	"loc_b3c09e77-2c55-4e7c-869e-4752e1fcb409": {
		identifier: "loc_b3c09e77-2c55-4e7c-869e-4752e1fcb409",
		name: "Oper46",
		city: "Frankfurt"
	},
	"loc_e82f0548-8da6-45b0-8c9f-76496d87ba60": {
		identifier: "loc_e82f0548-8da6-45b0-8c9f-76496d87ba60",
		name: "Haus am Domplatz",
		city: "Hamburg"
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
