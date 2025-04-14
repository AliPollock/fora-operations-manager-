"use client";
import { PortalContainer } from "@/components/mainAreas/portalContainer";
import { OperationsStore } from "@/stores/operationsStore";
import Link from "next/link";

export default function Home() {
	// need to populate the appData object with the data from a mock API
	const appData = {};
	const operationsStore = new OperationsStore(appData);

	return (
		<div id={"app"}>
			<main className="container-fluid">
				<PortalContainer store={operationsStore} />
			</main>
		</div>
	);
}
