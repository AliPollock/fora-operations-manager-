import { OperationsStore } from "@/stores/operationsStore";
import { MainAreaTop } from "./mainAreaTop";
import { MainAreaBody } from "./mainAreaBody";
import { observer } from "mobx-react";

export interface MainContentAreaProps {
	store: OperationsStore;
}

export const MainContentArea = observer((props: MainContentAreaProps) => {
	return (
		<div className="og-main-content-area row">
			<MainAreaTop store={props.store} />
			<MainAreaBody store={props.store} />
		</div>
	);
});
