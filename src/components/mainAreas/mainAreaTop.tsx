import { OperationsStore } from "@/stores/operationsStore";
import { LocationDropdown } from "../dropdowns/locationDropdown";
import { PageTitle } from "../headings/pageTitle";

interface MainAreaTopProps {
	store: OperationsStore;
}
export const MainAreaTop = (props: MainAreaTopProps) => {
	return (
		<div className="og-main-area-top row">
			<div className="og-main-area-title col-6">
				<PageTitle page={props.store.page} />
			</div>
			<div className="og-main-area-location-select col-6">
				<LocationDropdown locations={props.store.locations} currentLocation={props.store.getCurrentLocation()} />
			</div>
		</div>
	);
};
