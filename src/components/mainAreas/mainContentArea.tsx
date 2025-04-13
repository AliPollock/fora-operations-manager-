import { OperationsStore } from "@/stores/operationsStore";

export interface MainContentAreaProps {
	store: OperationsStore;
}

export const MainContentArea = (props: MainContentAreaProps) => {
	return (
		<div className="og-main-content-area col-10">
			{"main content area"}
			{props.store.locations?.map((location) => {
				return (
					<div key={location.identifier}>
						<h2>{location.name}</h2>
						<p>{location.city}</p>
					</div>
				);
			})}
		</div>
	);
};
