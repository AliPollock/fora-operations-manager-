import "./sideBarButton.scss";
interface SideBarButtonProps {
	iconName: string;
	onClick: () => void;
}

export const SideBarButton = (props: SideBarButtonProps) => {
	return (
		<a className="og-sidebar-button" onClick={props.onClick}>
			<i className={"bi " + props.iconName}></i>
		</a>
	);
};
