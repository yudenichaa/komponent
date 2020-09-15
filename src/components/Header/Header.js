import React from "react";
import "./Header.scss";

export default function Header() {
	return (
		<header className="Header">
			<div className="Header-Content">
				<div>
					<img
						src="images/logo150.png"
						alt="Логотип"
					/>
				</div>
				<div className="Header-Contacts">
					<p className="Header-Info">Кадастровый инженер ИП Юденич А. А.</p>
					<p className="Header-Info">+7 (978) 834-31-76 (Светлана)</p>
					<p className="Header-Info Header-Info_mdMb_0">+7 (978) 823-89-15 (Анатолий)</p>
				</div>
			</div>
		</header>
	);
}
