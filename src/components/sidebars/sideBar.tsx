import "./sideBar.scss";
interface SideBarProps {
	topChildren?: React.ReactNode;
	bottomChildren?: React.ReactNode;
}

export const SideBar = (props: SideBarProps) => {
	return (
		<div className="og-sidebar d-flex flex-column">
			{props.topChildren ? <div className={"og-sidebar-top-children d-flex flex-column mb-auto"}>{props.topChildren}</div> : null}
			{props.bottomChildren ? <div className={"og-sidebar-bottom-children d-flex flex-column mt-auto"}>{props.bottomChildren}</div> : null}
		</div>
	);
};
