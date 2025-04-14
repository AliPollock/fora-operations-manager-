"use client";
import { PortalContainer } from "@/components/mainAreas/portalContainer";
import { OperationsStore } from "@/stores/operationsStore";
import Link from "next/link";

export default function Home() {
	// need to populate the appData object with the data from a mock API
	const appData = { locations: [], viewings: [], tickets: [], meetingRooms: [], roomBookings: [] };
	const operationsStore = new OperationsStore(appData);

	return (
		<div id={"app"}>
			<main className="container-fluid">
				<PortalContainer store={operationsStore} />
				{/* need to get rid of this and move the linking to the sidebar buttons */}
				<Link href="/calendar">Calendar</Link>
			</main>
		</div>
	);
}
