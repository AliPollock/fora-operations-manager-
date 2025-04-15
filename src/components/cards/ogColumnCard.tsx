import { JSX } from "react";
import "./ogColumnCard.scss";

export interface OgColumnCardInterface {
	titleText: string;
	bottomLeftText: string;
	rightAreaElement: JSX.Element;
}

export const OgColumnCard = (props: OgColumnCardInterface) => {
	return (
		<div className="og-column-card row">
			<div className={"og-column-card-left col-10 col-sm-9"}>
				<div className={"og-column-card-title"}> {props.titleText.toUpperCase()} </div>
				<div className={"og-column-card-bottom-left"}> {props.bottomLeftText} </div>
			</div>
			<div className={"og-column-card-right col-2 col-sm-3"}>{props.rightAreaElement}</div>
		</div>
	);
};
