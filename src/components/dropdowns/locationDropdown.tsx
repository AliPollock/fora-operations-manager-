import { OgLocationInterface } from "@/models/interfaces/ogLocationInterface";
import "./locationDropdown.scss";
import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { OperationsStore } from "@/stores/operationsStore";

interface LocationDropdownProps {
	store: OperationsStore;
}

export const LocationDropdown = observer((props: LocationDropdownProps) => {
	let currentLocation = props.store.getCurrentLocation();
	let locationName = currentLocation?.name || "Select a location";

	const handleSelect = (location: OgLocationInterface) => {
		props.store.currentLocation = location;
	};

	return (
		<Dropdown>
			<Dropdown.Toggle className="og-location-dropdown">{locationName}</Dropdown.Toggle>

			<Dropdown.Menu className="og-location-dropdown-menu">
				{props.store.locations.map((location) => (
					<Dropdown.Item key={location.identifier} onClick={() => handleSelect(location)}>
						{location.name} ({location.city})
					</Dropdown.Item>
				))}
			</Dropdown.Menu>
		</Dropdown>
	);
});
