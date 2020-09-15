import React from "react";
import "./CertificateModal.scss";

export default function CertificateModal({ imageSrc, imageAlt, onClose }) {
	return (
		<div
			className="CertificateModal"
			onClick={(event) => {
				if (event.target == event.currentTarget) {
					onClose();
				}
			}}
		>
			<img className="CertificateModal-Image" src={imageSrc} alt={imageAlt} />
			<span className="CertificateModal-CloseButton" onClick={onClose}>
				&times;
			</span>
		</div>
	);
}
