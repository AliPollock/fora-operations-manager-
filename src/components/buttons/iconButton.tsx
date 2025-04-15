import "./iconButton.scss";
export interface OgIconButtonInterface {
	buttonClass: string;
	iconClass: string;
	onClick: () => void;
}

export const OgIconButton = (props: OgIconButtonInterface) => {
	return (
		<button className={"og-icon-button " + props.buttonClass} onClick={props.onClick}>
			<i className={props.iconClass} />
		</button>
	);
};
