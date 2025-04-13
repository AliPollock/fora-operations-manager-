import { OperationsStore } from "@/stores/operationsStore";

export interface MainContentAreaProps {
	store: OperationsStore;
}

export const MainContentArea = (props: MainContentAreaProps) => {
	return (
		<>
			{props.store.locations.map((location) => {
				return (
					<div key={location.identifier}>
						<h2>{location.name}</h2>
						<p>{location.city}</p>
					</div>
				);
			})}
			{props.store.viewings.map((viewing) => {
				return (
					<div key={viewing.identifier}>
						<h2>{viewing.companyName}</h2>
					</div>
				);
			})}
			{props.store.tickets.map((ticket) => {
				return (
					<div key={ticket.identifier}>
						<h2>{ticket.description}</h2>
					</div>
				);
			})}
			{props.store.meetingRooms?.map((room) => {
				return (
					<div key={room.identifier}>
						<h2>{room.name}</h2>
					</div>
				);
			})}
			{props.store.roomBookings?.map((booking) => {
				return (
					<div key={booking.identifier}>
						<h2>{booking.companyName}</h2>
					</div>
				);
			})}
		</>
	);
};
