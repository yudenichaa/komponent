import React from "react";
import "./Workflow.scss";

export default function Workflow({ workflow }) {
	return (
		<>
			<h2 className="Lead">Мы выполним работу за 8 дней</h2>
			<div className="Workflow">
				{workflow.map((step, index) => (
					<div className="WorkflowStep" key={index}>
						<h2 className="WorkflowStep-Header">{step.title}</h2>
						<img className="WorkflowStep-Image" src={step.image} alt={step.details} />
						<p className="WorkflowStep-Details">{step.details}</p>
					</div>
				))}
			</div>
		</>
	);
}
