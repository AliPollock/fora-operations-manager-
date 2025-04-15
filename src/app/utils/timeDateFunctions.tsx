export function getTwentyFourHourTimeFromTimeDateIsoString(isoString: string): string {
	const timePart = isoString.split(" ")[1];
	if (timePart) {
		const [hours, minutes] = timePart.split(":");
		return `${hours}.${minutes}`; // Format as HH.MM
	}
	return ""; // Return null if the format is invalid
}
