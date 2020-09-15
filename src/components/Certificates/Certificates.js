import React, { useState } from "react";
import CertificateModal from "../CertificateModal";
import "./Certificates.scss";

export default function Certificates({ certificates }) {
	const [certificateModal, setCertificateModal] = useState(null);

	const closeCertificateModal = () => setCertificateModal(null);

	const openCertificateModal = (imageSrc, imageAlt) => {
		setCertificateModal(
			<CertificateModal
				imageSrc={imageSrc}
				imageAlt={imageAlt}
				onClose={closeCertificateModal}
			/>
		);
	};

	return (
		<>
			{certificateModal}
			<h2 className="Lead">Сертификаты</h2>
			<div className="Certificates">
				{certificates.map((certificate, index) => (
					<div className="Certificate" key={index}>
						<h2 className="Certificate-Title">{certificate.title}</h2>
						<p className="Certificate-Details">{certificate.details}</p>
						<button
							type="button"
							className="Certificate-ModalOpenButton"
							onClick={() =>
								openCertificateModal(
									certificate.image,
									certificate.title
								)
							}
						>
							Открыть
						</button>
					</div>
				))}
			</div>
		</>
	);
}
