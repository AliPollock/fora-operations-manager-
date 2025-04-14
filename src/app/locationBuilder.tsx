import { PortalContainer } from "@/components/mainAreas/portalContainer";
import { OperationsStore } from "@/stores/operationsStore";
import { useEffect } from "react";

export interface LocationBuilderProps {
	store: OperationsStore;
}

export const LocationBuilder = (props: LocationBuilderProps) => {
	return <PortalContainer store={props.store} />;
};
