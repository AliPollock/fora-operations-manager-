export interface OgPageGridProps {
	title?: string;
	children: React.ReactNode;
}

export const OgPageGrid = (props: OgPageGridProps) => {
	return (
		<div className="og-page-column col-12">
			{props.title && <h2 className="og-page-grid__heading">{props.title}</h2>}
			{props.children}
		</div>
	);
};
