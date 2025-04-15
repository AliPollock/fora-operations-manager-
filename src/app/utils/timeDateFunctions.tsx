export function getTwentyFourHourTimeFromTimeDateIsoString(isoString: string): string {
	const timePart = isoString.split(" ")[1];
	if (timePart) {
		const [hours, minutes] = timePart.split(":");
		return `${hours}.${minutes}`; // Format as HH.MM
	}
	return ""; // Return null if the format is invalid
}

export function getDateFromTimeDateIsoString(isoString: string): string {
	// Create a Date object from the input string
	const date = new Date(isoString);

	// Days of the week
	const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	const dayName = daysOfWeek[date.getDay()];

	// Get the day of the month and determine the suffix
	const dayOfMonth = date.getDate();
	const daySuffix = dayOfMonth === 1 || dayOfMonth === 21 || dayOfMonth === 31 ? "st" : dayOfMonth === 2 || dayOfMonth === 22 ? "nd" : dayOfMonth === 3 || dayOfMonth === 23 ? "rd" : "th";

	// Combine the day name and formatted day of the month
	return `${dayName} ${dayOfMonth}${daySuffix}`;
}
