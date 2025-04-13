interface SideBarProps {
	children: React.ReactNode;
}

export const SideBar = (props: SideBarProps) => {
	return <div className="og-sidebar flex-column">{props.children}</div>;
};
