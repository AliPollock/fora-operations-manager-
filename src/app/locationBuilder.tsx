import { PortalContainer } from "@/components/mainAreas/portalContainer";
import { OperationsStore } from "@/stores/operationsStore";

export interface LocationBuilderProps {
	store: OperationsStore;
}

// This component turned out to be entirely pointless, I thought I would need it for some state rerendering purposes, but as it happens this is done in the level above
export const LocationBuilder = (props: LocationBuilderProps) => {
	return <PortalContainer store={props.store} />;
};
