import "./ogPageColumn.scss";

export interface OgPageColumnProps {
	title?: string;
	children: React.ReactNode;
}

export const OgPageColumn = (props: OgPageColumnProps) => {
	return (
		<div className="og-page-column col-12">
			{props.title && <h2 className="og-page-column__heading">{props.title}</h2>}
			{props.children}
		</div>
	);
};
