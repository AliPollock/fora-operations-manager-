import { OgMoveInterface } from "@/models/interfaces/ogMoveInterface";

const MOVES: Record<string, OgMoveInterface> = {
	"mov_cef77e0e-aa88-4b00-babd-3777d4cfb099_1": {
		identifier: "mov_cef77e0e-aa88-4b00-babd-3777d4cfb099_1",
		locationIdentifier: "loc_cef77e0e-aa88-4b00-babd-3777d4cfb099",
		companyName: "Bright Rentals Ltd.",
		isCurrentlyResident: true,
		moveDate: "2025-04-21",
		moveTime: "14:30"
	},
	"mov_cef77e0e-aa88-4b00-babd-3777d4cfb099_2": {
		identifier: "mov_cef77e0e-aa88-4b00-babd-3777d4cfb099_2",
		locationIdentifier: "loc_cef77e0e-aa88-4b00-babd-3777d4cfb099",
		companyName: "Urban Living Co.",
		isCurrentlyResident: false,
		moveDate: "2025-05-03",
		moveTime: "11:00"
	},
	"mov_cef77e0e-aa88-4b00-babd-3777d4cfb099_3": {
		identifier: "mov_cef77e0e-aa88-4b00-babd-3777d4cfb099_3",
		locationIdentifier: "loc_cef77e0e-aa88-4b00-babd-3777d4cfb099",
		companyName: "City Stay Rentals",
		isCurrentlyResident: true,
		moveDate: "2025-04-10",
		moveTime: "16:45"
	},
	"mov_cef77e0e-aa88-4b00-babd-3777d4cfb099_4": {
		identifier: "mov_cef77e0e-aa88-4b00-babd-3777d4cfb099_4",
		locationIdentifier: "loc_cef77e0e-aa88-4b00-babd-3777d4cfb099",
		companyName: "Elite Apartments Ltd.",
		isCurrentlyResident: false,
		moveDate: "2025-05-15",
		moveTime: "09:20"
	},
	"mov_cef77e0e-aa88-4b00-babd-3777d4cfb099_5": {
		identifier: "mov_cef77e0e-aa88-4b00-babd-3777d4cfb099_5",
		locationIdentifier: "loc_cef77e0e-aa88-4b00-babd-3777d4cfb099",
		companyName: "Metropolitan Rentals",
		isCurrentlyResident: true,
		moveDate: "2025-04-30"
	},
	"mov_f23a91e6-4ff1-4b93-836f-8af003c8b301_1": {
		identifier: "mov_f23a91e6-4ff1-4b93-836f-8af003c8b301_1",
		locationIdentifier: "loc_f23a91e6-4ff1-4b93-836f-8af003c8b301",
		companyName: "Riverside Homes",
		isCurrentlyResident: false,
		moveDate: "2025-05-05",
		moveTime: "13:15"
	},
	"mov_d3b7421d-a4f6-4054-9376-efc10b20ddc6_1": {
		identifier: "mov_d3b7421d-a4f6-4054-9376-efc10b20ddc6_1",
		locationIdentifier: "loc_d3b7421d-a4f6-4054-9376-efc10b20ddc6",
		companyName: "Capital Apartments",
		isCurrentlyResident: true,
		moveDate: "2025-04-18",
		moveTime: "10:00"
	},
	"mov_4b77e8ce-dbc6-4305-9eb8-50a0bcfef516_1": {
		identifier: "mov_4b77e8ce-dbc6-4305-9eb8-50a0bcfef516_1",
		locationIdentifier: "loc_4b77e8ce-dbc6-4305-9eb8-50a0bcfef516",
		companyName: "Vauxhall Living",
		isCurrentlyResident: false,
		moveDate: "2025-04-25"
	},
	"mov_83a0bc51-c60a-4800-ae60-e248abc26458_1": {
		identifier: "mov_83a0bc51-c60a-4800-ae60-e248abc26458_1",
		locationIdentifier: "loc_83a0bc51-c60a-4800-ae60-e248abc26458",
		companyName: "East London Rentals",
		isCurrentlyResident: true,
		moveDate: "2025-05-09",
		moveTime: "17:30"
	},
	"mov_3ee8122c-d184-459d-ae0c-338b18520297_1": {
		identifier: "mov_3ee8122c-d184-459d-ae0c-338b18520297_1",
		locationIdentifier: "loc_3ee8122c-d184-459d-ae0c-338b18520297",
		companyName: "Covent Garden Stays",
		isCurrentlyResident: false,
		moveDate: "2025-05-12",
		moveTime: "12:45"
	}
};

export async function fetchMovesForLocation(locationId: string): Promise<OgMoveInterface[]> {
	const moves = Object.values(MOVES).filter((move) => move.locationIdentifier === locationId);

	return Promise.resolve(moves);
}
