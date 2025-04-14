import { OperationsStore } from "@/stores/operationsStore";
import { MainAreaTop } from "./mainAreaTop";
import { MainAreaBody } from "./mainAreaBody";

export interface MainContentAreaProps {
	store: OperationsStore;
}

export const MainContentArea = (props: MainContentAreaProps) => {
	props.store.locations?.map((location) => {
		console.log("location: ", location.name, location.city, location.identifier);
	});
	return (
		<div className="og-main-content-area row">
			<MainAreaTop store={props.store} />
			<MainAreaBody store={props.store} />
		</div>
	);
};
