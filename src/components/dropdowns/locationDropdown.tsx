import { OgLocationInterface } from "@/models/interfaces/ogLocationInterface";
import "./locationDropdown.scss";

interface LocationDropdownProps {
	locations: OgLocationInterface[];
	currentLocation?: OgLocationInterface;
}

export const LocationDropdown = (props: LocationDropdownProps) => {
	return (
		<div className="og-location-dropdown dropdown" style={{ position: "relative" }}>
			<button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
				{props.currentLocation ? props.currentLocation.name : "Select a location"}
			</button>

			<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{ borderRadius: "8px" }}>
				{props.locations.map((location) => (
					<li key={location.identifier}>
						<button className="dropdown-item" onClick={() => console.log("Selected:", location)}>
							{location.name} ({location.city})
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};
