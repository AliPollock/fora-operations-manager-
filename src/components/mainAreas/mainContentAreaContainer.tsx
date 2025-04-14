import { OperationsStore } from "@/stores/operationsStore";
import { MainAreaTop } from "./mainAreaTop";
import { MainContentArea } from "./mainContentArea";

export interface MainContentAreaContainerProps {
	store: OperationsStore;
}

export const MainContentAreaContainer = (props: MainContentAreaContainerProps) => {
	props.store.locations?.map((location) => {
		console.log("location: ", location.name, location.city, location.identifier);
	});
	return (
		<div className="og-main-content-area-container col-10">
			<MainContentArea store={props.store} />
		</div>
	);
};
