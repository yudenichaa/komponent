import React from "react";
import "./Services.scss";

export default function Services({ services }) {
	return (
		<>
			<h2 className="Lead">Кадастровые работы</h2>
			<div className="Services">
				{services.map((service, index) => (
					<div className="Service" key={index}>
						<h2 className="Service-Header">{service.title}</h2>
						<div className="Service-Item">
							{service.details.map((serviceItem, index) => (
								<p className="Service-ItemText" key={index}>{serviceItem}</p>
							))}
						</div>
					</div>
				))}
			</div>
		</>
	);
}
