"use client";
import styles from "./page.module.css";
import { OperationsStore } from "@/stores/operationsStore";
import { MainContentArea } from "../components/pages/mainContentArea";
import Link from "next/link";

export default function Home() {
	// need to populate the appData object with the data from a mock API
	const appData = { locations: [], viewings: [], tickets: [], meetingRooms: [], roomBookings: [] };
	const operationsStore = new OperationsStore(appData);

	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<h1>Fora Operations Manager</h1>
				<div>Hello world</div>
				<div>
					<MainContentArea store={operationsStore} />
				</div>
				<Link href="/calendar">Calendar</Link>
			</main>
			<footer className={styles.footer}></footer>
		</div>
	);
}
