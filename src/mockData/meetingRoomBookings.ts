import { OgMeetingRoomBookingInterface } from "@/models/interfaces/ogMeetingRoomBookingInterface";

const MEETING_ROOM_BOOKINGS: Record<string, OgMeetingRoomBookingInterface> = {
	"booking_1a9b6c4f-ef92-492a-9b5d-f8d7c3a529b1": {
		identifier: "booking_1a9b6c4f-ef92-492a-9b5d-f8d7c3a529b1",
		meetingRoomIdentifier: "room_dce1a810-bcd6-46d9-a10d-080aa19b9c78",
		locationIdentifier: "loc_f23a91e6-4ff1-4b93-836f-8af003c8b301",
		startDateTimeString: "2022-09-27 08:00:00.000",
		endDateTimeString: "2022-09-27 11:00:00.000",
		companyName: "Tech Corp",
		isBooked: true
	},
	"booking_3f2d8a5e-71cb-42b6-9831-dc7b5f2a97ef": {
		identifier: "booking_3f2d8a5e-71cb-42b6-9831-dc7b5f2a97ef",
		meetingRoomIdentifier: "room_5bc1f5e2-aadc-4bc9-99dd-745dfea9d3f0",
		locationIdentifier: "loc_d3b7421d-a4f6-4054-9376-efc10b20ddc6",
		startDateTimeString: "2022-09-27 09:00:00.000",
		endDateTimeString: "2022-09-27 12:00:00.000",
		companyName: "Innovate Ltd",
		isBooked: true
	},
	"booking_bf91d62c-4a5b-4c92-92e8-d7c1a6b93f25": {
		identifier: "booking_bf91d62c-4a5b-4c92-92e8-d7c1a6b93f25",
		meetingRoomIdentifier: "room_4ecab87f-2eb3-42e6-9ad7-f1c46f2f7853",
		locationIdentifier: "loc_83a0bc51-c60a-4800-ae60-e248abc26458",
		startDateTimeString: "2022-09-27 10:00:00.000",
		endDateTimeString: "2022-09-27 13:00:00.000",
		companyName: "Global Ventures",
		isBooked: true
	},
	"booking_d8a3f7c2-1eb9-41fc-a25d-93c7bf92e8b1": {
		identifier: "booking_d8a3f7c2-1eb9-41fc-a25d-93c7bf92e8b1",
		meetingRoomIdentifier: "room_97332f2c-461e-4a67-8269-9b7fda3bbf93",
		locationIdentifier: "loc_d89a4ad8-1906-41ad-8b5c-bf06d69e13a2",
		startDateTimeString: "2022-09-27 14:00:00.000",
		endDateTimeString: "2022-09-27 17:00:00.000",
		companyName: "Future Group",
		isBooked: true
	},
	"booking_4c7df92a-1fc8-4b62-8379-51c2a7bf97e5": {
		identifier: "booking_4c7df92a-1fc8-4b62-8379-51c2a7bf97e5",
		meetingRoomIdentifier: "room_1f08cdbb-e4b1-46e5-9d76-1e0d194d5bd4",
		locationIdentifier: "loc_b6c69b9f-688e-4de6-8ae4-93f705167b03",
		startDateTimeString: "2022-09-27 16:00:00.000",
		endDateTimeString: "2022-09-27 19:00:00.000",
		companyName: "Alpha Co",
		isBooked: true
	},
	"booking_b2a9e6f5-7c83-45d1-96fb-83a5d7bf92ce": {
		identifier: "booking_b2a9e6f5-7c83-45d1-96fb-83a5d7bf92ce",
		meetingRoomIdentifier: "room_2baeb31d-27f7-4385-849c-98de16b4dc92",
		locationIdentifier: "loc_c3ad5df5-d4c4-461f-bb44-b1a3671e85d1",
		startDateTimeString: "2022-09-28 08:00:00.000",
		endDateTimeString: "2022-09-28 11:00:00.000",
		companyName: "Beta Solutions",
		isBooked: true
	},
	"booking_c8f6b92a-3fc9-43d6-9251-b7a9f82c3d5e": {
		identifier: "booking_c8f6b92a-3fc9-43d6-9251-b7a9f82c3d5e",
		meetingRoomIdentifier: "room_8f62c4f9-2a6d-4e77-b33f-e5b682d8b709",
		locationIdentifier: "loc_3f7c1d68-35f2-41b4-9437-0a9d8e6ec438",
		startDateTimeString: "2022-09-28 09:00:00.000",
		endDateTimeString: "2022-09-28 12:00:00.000",
		companyName: "Gamma Enterprises",
		isBooked: true
	},
	"booking_a7b9e3f5-23f6-4c89-a25d-83bf92ce6f5a": {
		identifier: "booking_a7b9e3f5-23f6-4c89-a25d-83bf92ce6f5a",
		meetingRoomIdentifier: "room_aaf34434-827c-4f1c-bdf7-2319bb8b3c7a",
		locationIdentifier: "loc_a9d73e25-86e8-4e96-a0d1-4020e4c14f8c",
		startDateTimeString: "2022-09-28 10:30:00.000",
		endDateTimeString: "2022-09-28 13:30:00.000",
		companyName: "Delta Inc",
		isBooked: true
	},
	"booking_92f6b7a9-e3f2-42cd-8fb6-5ce7d3a92bf5": {
		identifier: "booking_92f6b7a9-e3f2-42cd-8fb6-5ce7d3a92bf5",
		meetingRoomIdentifier: "room_a9c74de3-b0ac-49cf-b811-9248e9c4b64f",
		locationIdentifier: "loc_b3c09e77-2c55-4e7c-869e-4752e1fcb409",
		startDateTimeString: "2022-09-28 08:30:00.000",
		endDateTimeString: "2022-09-28 11:30:00.000",
		companyName: "Epsilon Partners",
		isBooked: true
	},
	"booking_c5f2b9a3-d71e-42a6-93fb-8e6f5a92bf3d": {
		identifier: "booking_c5f2b9a3-d71e-42a6-93fb-8e6f5a92bf3d",
		meetingRoomIdentifier: "room_4d5172f3-4a8d-4cd5-8217-08fb638a514f",
		locationIdentifier: "loc_e82f0548-8da6-45b0-8c9f-76496d87ba60",
		startDateTimeString: "2022-09-28 09:30:00.000",
		endDateTimeString: "2022-09-28 12:30:00.000",
		companyName: "Zeta Holdings",
		isBooked: true
	},
	"booking_e9d72c5b-f839-45a3-92b7-f1d6c3e8b49a": {
		identifier: "booking_e9d72c5b-f839-45a3-92b7-f1d6c3e8b49a",
		meetingRoomIdentifier: "room_dce1a810-bcd6-46d9-a10d-080aa19b9c78",
		locationIdentifier: "loc_f23a91e6-4ff1-4b93-836f-8af003c8b301",
		startDateTimeString: "2022-09-28 10:00:00.000",
		endDateTimeString: "2022-09-28 13:00:00.000",
		companyName: "NextWave Ventures",
		isBooked: true
	},
	"booking_b3f8a5d6-2c9e-4fb1-93f7-d1a6b92c7f5e": {
		identifier: "booking_b3f8a5d6-2c9e-4fb1-93f7-d1a6b92c7f5e",
		meetingRoomIdentifier: "room_5bc1f5e2-aadc-4bc9-99dd-745dfea9d3f0",
		locationIdentifier: "loc_f23a91e6-4ff1-4b93-836f-8af003c8b301",
		startDateTimeString: "2022-09-28 08:30:00.000",
		endDateTimeString: "2022-09-28 11:30:00.000",
		companyName: "Digital Synergy",
		isBooked: true
	},
	"booking_f7a8d5b9-2c3e-4fb8-b923-e6d3f92b7a9e": {
		identifier: "booking_f7a8d5b9-2c3e-4fb8-b923-e6d3f92b7a9e",
		meetingRoomIdentifier: "room_4ecab87f-2eb3-42e6-9ad7-f1c46f2f7853",
		locationIdentifier: "loc_83a0bc51-c60a-4800-ae60-e248abc26458",
		startDateTimeString: "2022-09-28 09:00:00.000",
		endDateTimeString: "2022-09-28 12:00:00.000",
		companyName: "Innovative Solutions",
		isBooked: true
	},
	"booking_c3b8d92a-3f5e-4fb1-b926-d7f8b1e9a5f3": {
		identifier: "booking_c3b8d92a-3f5e-4fb1-b926-d7f8b1e9a5f3",
		meetingRoomIdentifier: "room_97332f2c-461e-4a67-8269-9b7fda3bbf93",
		locationIdentifier: "loc_d89a4ad8-1906-41ad-8b5c-bf06d69e13a2",
		startDateTimeString: "2022-09-28 14:00:00.000",
		endDateTimeString: "2022-09-28 17:00:00.000",
		companyName: "Synergy Group",
		isBooked: true
	},
	"booking_d7f8a5b9-2c3e-4fb1-b926-e3d8f92a7f9b": {
		identifier: "booking_d7f8a5b9-2c3e-4fb1-b926-e3d8f92a7f9b",
		meetingRoomIdentifier: "room_1f08cdbb-e4b1-46e5-9d76-1e0d194d5bd4",
		locationIdentifier: "loc_b6c69b9f-688e-4de6-8ae4-93f705167b03",
		startDateTimeString: "2022-09-28 11:00:00.000",
		endDateTimeString: "2022-09-28 14:00:00.000",
		companyName: "Alpha Partners",
		isBooked: true
	},
	"booking_b9e7a5f2-3c8f-4db1-b926-f3a8d92c7f5b": {
		identifier: "booking_b9e7a5f2-3c8f-4db1-b926-f3a8d92c7f5b",
		meetingRoomIdentifier: "room_2baeb31d-27f7-4385-849c-98de16b4dc92",
		locationIdentifier: "loc_c3ad5df5-d4c4-461f-bb44-b1a3671e85d1",
		startDateTimeString: "2022-09-28 08:00:00.000",
		endDateTimeString: "2022-09-28 11:00:00.000",
		companyName: "Beta Enterprises",
		isBooked: true
	},
	"booking_f3a8d92c-7f5e-4fb9-b923-c8d7f1e9b2a5": {
		identifier: "booking_f3a8d92c-7f5e-4fb9-b923-c8d7f1e9b2a5",
		meetingRoomIdentifier: "room_8f62c4f9-2a6d-4e77-b33f-e5b682d8b709",
		locationIdentifier: "loc_3f7c1d68-35f2-41b4-9437-0a9d8e6ec438",
		startDateTimeString: "2022-09-28 09:00:00.000",
		endDateTimeString: "2022-09-28 12:00:00.000",
		companyName: "Gamma Group",
		isBooked: true
	},
	"booking_c7e9b1f2-3f5e-4db9-a926-d8f3a9b2f7c5": {
		identifier: "booking_c7e9b1f2-3f5e-4db9-a926-d8f3a9b2f7c5",
		meetingRoomIdentifier: "room_aaf34434-827c-4f1c-bdf7-2319bb8b3c7a",
		locationIdentifier: "loc_f23a91e6-4ff1-4b93-836f-8af003c8b301",
		startDateTimeString: "2022-09-28 10:00:00.000",
		endDateTimeString: "2022-09-28 13:00:00.000",
		companyName: "Delta Solutions",
		isBooked: true
	},
	"booking_b2a9f8c7-3f6e-4db1-b926-d7e3c9a5f3b8": {
		identifier: "booking_b2a9f8c7-3f6e-4db1-b926-d7e3c9a5f3b8",
		meetingRoomIdentifier: "room_a9c74de3-b0ac-49cf-b811-9248e9c4b64f",
		locationIdentifier: "loc_f23a91e6-4ff1-4b93-836f-8af003c8b301",
		startDateTimeString: "2022-09-28 08:30:00.000",
		endDateTimeString: "2022-09-28 11:30:00.000",
		companyName: "Epsilon Corp",
		isBooked: true
	},
	"booking_1d7f5a92-c3b6-4fb9-a926-d7f8b5c9a3f9": {
		identifier: "booking_1d7f5a92-c3b6-4fb9-a926-d7f8b5c9a3f9",
		meetingRoomIdentifier: "room_1a8b7d53-f22e-4fb6-92ce-d8a7b9c3f921",
		locationIdentifier: "loc_f23a91e6-4ff1-4b93-836f-8af003c8b301",
		startDateTimeString: "2022-09-29 09:00:00.000",
		endDateTimeString: "2022-09-29 12:00:00.000",
		companyName: "Synergy Corp",
		isBooked: true
	},
	"booking_9b3f5a72-d8e9-47b1-a92c-b5c9a7f8d35f": {
		identifier: "booking_9b3f5a72-d8e9-47b1-a92c-b5c9a7f8d35f",
		meetingRoomIdentifier: "room_3c7b92e5-f23e-45a9-82b7-d6a8b9c7f5ef",
		locationIdentifier: "loc_cef77e0e-aa88-4b00-babd-3777d4cfb099",
		startDateTimeString: "2022-09-29 08:30:00.000",
		endDateTimeString: "2022-09-29 11:30:00.000",
		companyName: "Alpha Enterprises",
		isBooked: true
	},
	"booking_b9e7c5f3-a8d2-4fb9-93e6-c5b9a7f8d3a9": {
		identifier: "booking_b9e7c5f3-a8d2-4fb9-93e6-c5b9a7f8d3a9",
		meetingRoomIdentifier: "room_b9e3d5c8-f92e-4b6a-93d1-c7f8b92a5f35",
		locationIdentifier: "loc_cef77e0e-aa88-4b00-babd-3777d4cfb099",
		startDateTimeString: "2022-09-29 10:00:00.000",
		endDateTimeString: "2022-09-29 13:00:00.000",
		companyName: "Beta Solutions",
		isBooked: true
	},
	"booking_c8f6b3d9-a5f2-4fb9-93e6-d5a9f3b2c7a7": {
		identifier: "booking_c8f6b3d9-a5f2-4fb9-93e6-d5a9f3b2c7a7",
		meetingRoomIdentifier: "room_c3f5a92b-7d2e-4fb9-93ce-d8b7a92c6f5d",
		locationIdentifier: "loc_cef77e0e-aa88-4b00-babd-3777d4cfb099",
		startDateTimeString: "2022-09-29 14:00:00.000",
		endDateTimeString: "2022-09-29 17:00:00.000",
		companyName: "Global Ventures",
		isBooked: true
	},
	"booking_7d9f8a2c-b5e3-49b1-93e6-c8a7d3f5b92f": {
		identifier: "booking_7d9f8a2c-b5e3-49b1-93e6-c8a7d3f5b92f",
		meetingRoomIdentifier: "room_7d3c5b92-f6a8-4fb2-92ce-b9a3d5f8b9e2",
		locationIdentifier: "loc_cef77e0e-aa88-4b00-babd-3777d4cfb099",
		startDateTimeString: "2022-09-29 08:00:00.000",
		endDateTimeString: "2022-09-29 11:00:00.000",
		companyName: "Innovation Partners",
		isBooked: true
	},
	"booking_a5d7f8b3-c92e-4fb1-93e6-d9f3b2a7f9c6": {
		identifier: "booking_a5d7f8b3-c92e-4fb1-93e6-d9f3b2a7f9c6",
		meetingRoomIdentifier: "room_8c5d92f3-b7a2-45a9-92ce-d5f8b92c6a3e",
		locationIdentifier: "loc_cef77e0e-aa88-4b00-babd-3777d4cfb099",
		startDateTimeString: "2022-09-29 11:30:00.000",
		endDateTimeString: "2022-09-29 14:30:00.000",
		companyName: "NextWave Innovators",
		isBooked: true
	},
	"booking_c9f8d3a5-b7a3-4fb1-92e6-a5b3f7c9d2f8": {
		identifier: "booking_c9f8d3a5-b7a3-4fb1-92e6-a5b3f7c9d2f8",
		meetingRoomIdentifier: "room_f92c7a5e-b8a3-4d92-93ce-a7b3c5f9b6d2",
		locationIdentifier: "loc_cef77e0e-aa88-4b00-babd-3777d4cfb099",
		startDateTimeString: "2022-09-29 12:00:00.000",
		endDateTimeString: "2022-09-29 15:00:00.000",
		companyName: "TechRise Group",
		isBooked: true
	},
	"booking_d8a7b5c9-f3b2-4fb1-a92c-b3f9c6a8d7e5": {
		identifier: "booking_d8a7b5c9-f3b2-4fb1-a92c-b3f9c6a8d7e5",
		meetingRoomIdentifier: "room_d8b9a5f3-c5e7-4fb9-92a3-f6a7b5d3c92e",
		locationIdentifier: "loc_cef77e0e-aa88-4b00-babd-3777d4cfb099",
		startDateTimeString: "2022-09-29 15:00:00.000",
		endDateTimeString: "2022-09-29 18:00:00.000",
		companyName: "Prime Innovators",
		isBooked: true
	},
	"booking_f3d7c5a9-b92e-4fb9-a2c7-d8f5b3a7c92e": {
		identifier: "booking_f3d7c5a9-b92e-4fb9-a2c7-d8f5b3a7c92e",
		meetingRoomIdentifier: "room_a5f3d92c-7e3b-4fb9-92ce-f6a8b9c3d52e",
		locationIdentifier: "loc_cef77e0e-aa88-4b00-babd-3777d4cfb099",
		startDateTimeString: "2022-09-29 09:30:00.000",
		endDateTimeString: "2022-09-29 12:30:00.000",
		companyName: "Bridge Builders",
		isBooked: true
	}
};

export async function fetchMeetingRoomBookingsForLocation(locationId: string): Promise<OgMeetingRoomBookingInterface[]> {
	const meetingRoomBookings = Object.values(MEETING_ROOM_BOOKINGS).filter((booking) => booking.locationIdentifier === locationId);

	return Promise.resolve(meetingRoomBookings);
}
