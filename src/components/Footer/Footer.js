import React from "react";
import {
	YMaps,
	Map,
	Placemark,
	FullscreenControl,
	ZoomControl,
	TypeSelector,
} from "react-yandex-maps";
import "./Footer.scss";

export default function Footer() {
	return (
		<footer className="Footer">
			<div className="Footer-Content">
				<div className="FooterInfo">
					<h2 className="FooterInfo-Header">Контактная информация</h2>
					<p className="mb_2">Телефон</p>
					<p className="mb_1">
						+7 (978) 834-31-76
						<br />
						+7 (978) 823-89-15
					</p>
					<p className="mb_2">e-mail</p>
					<p className="mb_1">komponent2004@mail.ru</p>
					<p className="mb_2">Адрес</p>
					<p className="mb_1">
						296500 Республика Крым, г. Саки,
						<br />
						ул. Советская, д. 15
					</p>
					<p className="mb_2">Рабочие дни</p>
					<p className="mb_1">Понедельник - Пятница</p>
					<p className="mb_2">Рабочее время</p>
					<p className="mb_1">8:00 - 17:00</p>
					<p className="mb_2">Перерыв</p>
					<p className="mb_1">12:00 - 13:00</p>
					<p className="mb_2">ОГРНИП</p>
					<p>315910200392651</p>
				</div>
				<div className="FooterMapContainer">
					<YMaps>
						<Map
							className="FooterMapContainer-Map"
							defaultState={{
								center: [45.132711, 33.597215],
								zoom: 18,
							}}
						>
							<Placemark
								geometry={{
									type: "Point",
									coordinates: [45.132711, 33.597215],
								}}
								options={{
									preset: "islands#darkGreenHomeIcon",
								}}
								properties={{
									iconCaption: "Кадастровые работы",
								}}
							/>
							<FullscreenControl />
							<ZoomControl options={{ float: "right" }} />
							<TypeSelector options={{ float: "right" }} />
						</Map>
					</YMaps>
				</div>
			</div>
		</footer>
	);
}
