import { OperationsStore } from "@/stores/operationsStore";
import { LocationDropdown } from "../dropdowns/locationDropdown";
import { PageTitle } from "../headings/pageTitle";
import { observer } from "mobx-react";

interface MainAreaTopProps {
	store: OperationsStore;
}
export const MainAreaTop = observer((props: MainAreaTopProps) => {
	return (
		<div className="og-main-area-top row">
			<div className="og-main-area-title col-6">
				<PageTitle page={props.store.page} />
			</div>
			<div className="og-main-area-location-select col-6">
				<LocationDropdown store={props.store} />
			</div>
		</div>
	);
});
