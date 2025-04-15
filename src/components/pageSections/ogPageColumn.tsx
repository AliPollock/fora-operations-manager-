import { useLayoutEffect, useRef } from "react";
import "./ogPageColumn.scss";
import { observer } from "mobx-react";

export interface OgPageColumnProps {
	title?: string;
	children: React.ReactNode;
	className: string;
}

export const OgPageColumn = observer((props: OgPageColumnProps) => {
	const parentRef = useRef<HTMLDivElement>(null);

	// This effect is used to hide any children from being partially cut off inside the column
	useLayoutEffect(() => {
		if (parentRef.current) {
			const parentRect = parentRef.current.getBoundingClientRect();

			Array.from(parentRef.current.children).forEach((child) => {
				if (child instanceof HTMLElement) {
					const childRect = child.getBoundingClientRect();
					const isFullyVisible = childRect.top >= parentRect.top && childRect.bottom <= parentRect.bottom;

					child.style.visibility = isFullyVisible ? "visible" : "hidden";
				}
			});
		}
	}, [props.children]);

	return (
		<div ref={parentRef} className={"og-page-column col-12 " + props.className}>
			{props.title && <h2 className="og-page-column-heading">{props.title}</h2>}
			{props.children}
		</div>
	);
});
