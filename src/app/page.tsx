"use client";
import { OperationsStore } from "@/stores/operationsStore";
import { MainContentAreaContainer } from "../components/mainAreas/mainContentAreaContainer";
import Link from "next/link";

export default function Home() {
	// need to populate the appData object with the data from a mock API
	const appData = { locations: [], viewings: [], tickets: [], meetingRooms: [], roomBookings: [] };
	const operationsStore = new OperationsStore(appData);

	return (
		<div id={"app"}>
			<main className="container-fluid">
				<MainContentAreaContainer store={operationsStore} />
				<Link href="/calendar">Calendar</Link>
			</main>
		</div>
	);
}
