import { OgMeetingRoomInterface } from "@/models/interfaces/ogMeetingRoomInterface";

const MEETING_ROOOMS: Record<string, OgMeetingRoomInterface> = {
	"room_dce1a810-bcd6-46d9-a10d-080aa19b9c78": {
		identifier: "room_dce1a810-bcd6-46d9-a10d-080aa19b9c78",
		name: "South Bank Conference Room",
		locationIdentifier: "loc_f23a91e6-4ff1-4b93-836f-8af003c8b301",
		capacity: 10,
		hasConferenceScreen: true
	},
	"room_5bc1f5e2-aadc-4bc9-99dd-745dfea9d3f0": {
		identifier: "room_5bc1f5e2-aadc-4bc9-99dd-745dfea9d3f0",
		name: "Mayfair Board Room",
		locationIdentifier: "loc_cef77e0e-aa88-4b00-babd-3777d4cfb099",
		capacity: 20,
		hasConferenceScreen: true
	},
	"room_4ecab87f-2eb3-42e6-9ad7-f1c46f2f7853": {
		identifier: "room_4ecab87f-2eb3-42e6-9ad7-f1c46f2f7853",
		name: "Shoreditch Suite",
		locationIdentifier: "loc_83a0bc51-c60a-4800-ae60-e248abc26458",
		capacity: 15,
		hasConferenceScreen: false
	},
	"room_97332f2c-461e-4a67-8269-9b7fda3bbf93": {
		identifier: "room_97332f2c-461e-4a67-8269-9b7fda3bbf93",
		name: "Paddington Meeting Room",
		locationIdentifier: "loc_d89a4ad8-1906-41ad-8b5c-bf06d69e13a2",
		capacity: 8,
		hasConferenceScreen: true
	},
	"room_1f08cdbb-e4b1-46e5-9d76-1e0d194d5bd4": {
		identifier: "room_1f08cdbb-e4b1-46e5-9d76-1e0d194d5bd4",
		name: "Canary Wharf Executive Room",
		locationIdentifier: "loc_b6c69b9f-688e-4de6-8ae4-93f705167b03",
		capacity: 25,
		hasConferenceScreen: true
	},
	"room_2baeb31d-27f7-4385-849c-98de16b4dc92": {
		identifier: "room_2baeb31d-27f7-4385-849c-98de16b4dc92",
		name: "King's Cross Collaboration Room",
		locationIdentifier: "loc_c3ad5df5-d4c4-461f-bb44-b1a3671e85d1",
		capacity: 12,
		hasConferenceScreen: false
	},
	"room_8f62c4f9-2a6d-4e77-b33f-e5b682d8b709": {
		identifier: "room_8f62c4f9-2a6d-4e77-b33f-e5b682d8b709",
		name: "Linden Palais Hall",
		locationIdentifier: "loc_3f7c1d68-35f2-41b4-9437-0a9d8e6ec438",
		capacity: 30,
		hasConferenceScreen: true
	},
	"room_aaf34434-827c-4f1c-bdf7-2319bb8b3c7a": {
		identifier: "room_aaf34434-827c-4f1c-bdf7-2319bb8b3c7a",
		name: "Presse Podium Suite",
		locationIdentifier: "loc_a9d73e25-86e8-4e96-a0d1-4020e4c14f8c",
		capacity: 18,
		hasConferenceScreen: false
	},
	"room_a9c74de3-b0ac-49cf-b811-9248e9c4b64f": {
		identifier: "room_a9c74de3-b0ac-49cf-b811-9248e9c4b64f",
		name: "Oper46 Creative Room",
		locationIdentifier: "loc_b3c09e77-2c55-4e7c-869e-4752e1fcb409",
		capacity: 20,
		hasConferenceScreen: true
	},
	"room_4d5172f3-4a8d-4cd5-8217-08fb638a514f": {
		identifier: "room_4d5172f3-4a8d-4cd5-8217-08fb638a514f",
		name: "Haus am Domplatz Strategy Room",
		locationIdentifier: "loc_e82f0548-8da6-45b0-8c9f-76496d87ba60",
		capacity: 10,
		hasConferenceScreen: false
	},
	"room_1a8b7d53-f22e-4fb6-92ce-d8a7b9c3f921": {
		identifier: "room_1a8b7d53-f22e-4fb6-92ce-d8a7b9c3f921",
		name: "Mayfair Conference Room A",
		locationIdentifier: "loc_cef77e0e-aa88-4b00-babd-3777d4cfb099",
		capacity: 12,
		hasConferenceScreen: true
	},
	"room_3c7b92e5-f23e-45a9-82b7-d6a8b9c7f5ef": {
		identifier: "room_3c7b92e5-f23e-45a9-82b7-d6a8b9c7f5ef",
		name: "Mayfair Collaboration Suite",
		locationIdentifier: "loc_cef77e0e-aa88-4b00-babd-3777d4cfb099",
		capacity: 18,
		hasConferenceScreen: false
	},
	"room_b9e3d5c8-f92e-4b6a-93d1-c7f8b92a5f35": {
		identifier: "room_b9e3d5c8-f92e-4b6a-93d1-c7f8b92a5f35",
		name: "Mayfair Boardroom B",
		locationIdentifier: "loc_cef77e0e-aa88-4b00-babd-3777d4cfb099",
		capacity: 20,
		hasConferenceScreen: true
	},
	"room_c3f5a92b-7d2e-4fb9-93ce-d8b7a92c6f5d": {
		identifier: "room_c3f5a92b-7d2e-4fb9-93ce-d8b7a92c6f5d",
		name: "Mayfair Discussion Hub",
		locationIdentifier: "loc_cef77e0e-aa88-4b00-babd-3777d4cfb099",
		capacity: 16,
		hasConferenceScreen: false
	},
	"room_7d3c5b92-f6a8-4fb2-92ce-b9a3d5f8b9e2": {
		identifier: "room_7d3c5b92-f6a8-4fb2-92ce-b9a3d5f8b9e2",
		name: "Mayfair Strategy Room A",
		locationIdentifier: "loc_cef77e0e-aa88-4b00-babd-3777d4cfb099",
		capacity: 14,
		hasConferenceScreen: true
	},
	"room_8c5d92f3-b7a2-45a9-92ce-d5f8b92c6a3e": {
		identifier: "room_8c5d92f3-b7a2-45a9-92ce-d5f8b92c6a3e",
		name: "Mayfair Creative Space",
		locationIdentifier: "loc_cef77e0e-aa88-4b00-babd-3777d4cfb099",
		capacity: 10,
		hasConferenceScreen: true
	},
	"room_f92c7a5e-b8a3-4d92-93ce-a7b3c5f9b6d2": {
		identifier: "room_f92c7a5e-b8a3-4d92-93ce-a7b3c5f9b6d2",
		name: "Mayfair Workshop Room",
		locationIdentifier: "loc_cef77e0e-aa88-4b00-babd-3777d4cfb099",
		capacity: 22,
		hasConferenceScreen: true
	},
	"room_d8b9a5f3-c5e7-4fb9-92a3-f6a7b5d3c92e": {
		identifier: "room_d8b9a5f3-c5e7-4fb9-92a3-f6a7b5d3c92e",
		name: "Mayfair Strategy Room B",
		locationIdentifier: "loc_cef77e0e-aa88-4b00-babd-3777d4cfb099",
		capacity: 12,
		hasConferenceScreen: true
	},
	"room_a5f3d92c-7e3b-4fb9-92ce-f6a8b9c3d52e": {
		identifier: "room_a5f3d92c-7e3b-4fb9-92ce-f6a8b9c3d52e",
		name: "Mayfair Executive Lounge",
		locationIdentifier: "loc_cef77e0e-aa88-4b00-babd-3777d4cfb099",
		capacity: 8,
		hasConferenceScreen: true
	},
	"room_c92b7f8a-5d3e-4fb1-92ce-d8a5b3c9f92e": {
		identifier: "room_c92b7f8a-5d3e-4fb1-92ce-d8a5b3c9f92e",
		name: "Mayfair Seminar Room",
		locationIdentifier: "loc_cef77e0e-aa88-4b00-babd-3777d4cfb099",
		capacity: 30,
		hasConferenceScreen: true
	}
};

export async function fetchMeetingRoomsForLocation(locationId: string): Promise<OgMeetingRoomInterface[]> {
	const meetingRooms = Object.values(MEETING_ROOOMS).filter((room) => room.locationIdentifier === locationId);
	return Promise.resolve(meetingRooms);
}

export async function fetchMeetingRoomWithId(meetingRoomId: string): Promise<OgMeetingRoomInterface | null> {
	const meetingRoom = MEETING_ROOOMS[meetingRoomId] ?? null;
	return Promise.resolve(meetingRoom);
}
