import { OperationsStore } from "@/stores/operationsStore";
import { MainContentArea } from "./mainContentArea";
import { observer } from "mobx-react";

export interface MainContentAreaContainerProps {
	store: OperationsStore;
}

export const MainContentAreaContainer = observer((props: MainContentAreaContainerProps) => {
	return (
		<div className="og-main-content-area-container col-10">
			<MainContentArea store={props.store} />
		</div>
	);
});
