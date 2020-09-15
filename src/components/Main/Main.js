import React from "react";
import Services from "../Services";
import Workflow from "../Workflow";
import Certificates from "../Certificates";
import CottegeAmnesty from "../CottegeAmnesty";
import "./Main.scss";

export default function Main({ services, workflow, certificates }) {
	return (
		<main className="Main">
			<div className="Main-Content">
				<Services services={services} />
				<Workflow workflow={workflow} />
				<Certificates certificates={certificates} />
				<CottegeAmnesty />
			</div>
		</main>
	);
}
