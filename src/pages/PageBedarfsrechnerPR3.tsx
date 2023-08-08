import waren from '../data/portRoyale3/waren.json';
import { useState } from 'react';

const _bdholz = waren.find((m) => m.name === "Holz")?.bd;
const bdholz = _bdholz ? _bdholz : 0;

export const PageBedarfsrechnerPR3 = () => {
	const [anzahl, setAnzahl] = useState(0);

	const handleBerechnen = (e: React.MouseEvent) => {
		e.preventDefault();
	}

	const handleAnzahlChange = (e: React.ChangeEvent) => {
		const _anzahl = Number((e.target as HTMLInputElement).value);
		if (!Number.isNaN(_anzahl)) {
			setAnzahl(_anzahl);
		}
	}

	return (
		<div className="page pageBedarfsrechnerPR3">
			<h2 className="überschrift">Bedarfsrechner</h2>

			<div>
				<form>
					Bedarf für
					<input type="text" placeholder="Anzahl" id="bewohneranzahl" value={anzahl} onChange={(e) => handleAnzahlChange(e)} />
					Bewohner für
					<input type="text" name="" placeholder="volle Tage" id="tage" />
					Tage
					<button className="btnProcessbdrPR3" onClick={(e) => handleBerechnen(e)}>berechnen</button>
					<input type="reset" />
				</form>


				<div>
					<div>bdholz: {bdholz}</div>
					<div>bdrholz: {anzahl * bdholz}</div>
				</div>
				<section className="bedarfsrechner">
					<table>
						<thead>
							<tr>
								<td>Ware</td>
								<td>Anzahl</td>
								<td>Gewinn</td>
								<td>Ware</td>
								<td>Anzahl</td>
								<td>Gewinn</td>
								<td>Gesamt</td>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<div className="image-container">
										<img src="img/PR3/PR3Holz.png" alt="" id="hover-image" />
										<span className="hover-text">Holz</span>
									</div>
								</td>
								<td className="bdrholz">{Math.round(anzahl * bdholz *100)}</td>
								<td className="pr3profitholz">0</td>
								<td><div className="image-container">
									<img src="https://i.imgur.com/AjFjve2.png" alt="" id="hover-image" />
									<span className="hover-text">Metallwaren</span>
								</div></td>
								<td className="bdrwerkzeug">0</td>
								<td className="pr3profitwerkzeug">0</td>
							</tr>
							<tr>
								<td><div className="image-container">
									<img src="https://i.imgur.com/aRInELe.png" alt="" id="hover-image" />
									<span className="hover-text">Ziegel</span>
								</div></td>
								<td className="bdrziegel">0</td>
								<td className="pr3profitziegel">0</td>
								<td><div className="image-container">
									<img src="https://i.imgur.com/B0QZrsL.png" alt="" id="hover-image" />
									<span className="hover-text">Farbstoffe</span>
								</div></td>
								<td className="bdrfärbemittel">0</td>
								<td className="pr3profitfärbemittel">0</td>
								<td>Profit</td>
								<td className="pr3profit">0</td>
							</tr>
							<tr>
								<td><div className="image-container">
									<img src="https://i.imgur.com/9neEi7X.png" alt="" id="hover-image" />
									<span className="hover-text">Weizen</span>
								</div></td>
								<td className="bdrweizen">0</td>
								<td className="pr3profitweizen">0</td>
								<td><div className="image-container">
									<img src="https://i.imgur.com/eVqGGt2.png" alt="" id="hover-image" />
									<span className="hover-text">Kaffee</span>
								</div></td>
								<td className="bdrkaffee">0</td>
								<td className="pr3profitkaffee">0</td>
							</tr>
							<tr>
								<td><div className="image-container">
									<img src="https://i.imgur.com/Yhx5h5r.png" alt="" id="hover-image" />
									<span className="hover-text">Früchte</span>
								</div></td>
								<td className="bdrfrüchte">0</td>
								<td className="pr3profitfrüchte">0</td>
								<td><div className="image-container">
									<img src="https://i.imgur.com/r35Y3Mn.png" alt="" id="hover-image" />
									<span className="hover-text">Kakao</span>
								</div></td>
								<td className="bdrkakao">0</td>
								<td className="pr3profitkakao">0</td>
								<td>Konvoigröße</td>
								<td className="bdrkonvoi">0</td>
							</tr>
							<tr>
								<td><div className="image-container">
									<img src="https://i.imgur.com/KTU1y0t.png" alt="" id="hover-image" />
									<span className="hover-text">Mais</span>
								</div></td>
								<td className="bdrmais">0</td>
								<td className="pr3profitmais">0</td>
								<td><div className="image-container">
									<img src="https://i.imgur.com/giwYvJj.png" alt="" id="hover-image" />
									<span className="hover-text">Tabak</span>
								</div></td>
								<td className="bdrtabak">0</td>
								<td className="pr3profittabak">0</td>
							</tr>
							<tr>
								<td><div className="image-container">
									<img src="https://i.imgur.com/qqGFKmp.png" alt="" id="hover-image" />
									<span className="hover-text">Zucker</span>
								</div></td>
								<td className="bdrzucker">0</td>
								<td className="pr3profitzucker">0</td>
								<td><div className="image-container">
									<img src="https://i.imgur.com/2eUggBd.png" alt="" id="hover-image" />
									<span className="hover-text">Fleisch</span>
								</div></td>
								<td className="bdrfleisch">0</td>
								<td className="pr3profitfleisch">0</td>
							</tr>
							<tr>
								<td><div className="image-container">
									<img src="https://i.imgur.com/4awiS4z.png" alt="" id="hover-image" />
									<span className="hover-text">Hanf</span>
								</div></td>
								<td className="bdrhanf">0</td>
								<td className="pr3profithanf">0</td>
								<td><div className="image-container">
									<img src="https://i.imgur.com/Kk9Ujb4.png" alt="" id="hover-image" />
									<span className="hover-text">Kleidung</span>
								</div></td>
								<td className="bdrkleidung">0</td>
								<td className="pr3profitkleidung">0</td>
							</tr>
							<tr>
								<td><div className="image-container">
									<img src="https://i.imgur.com/hCPgNeA.png" alt="" id="hover-image" />
									<span className="hover-text">Tuch</span>
								</div></td>
								<td className="bdrtuch">0</td>
								<td className="pr3profittuch">0</td>
								<td><div className="image-container">
									<img src="https://i.imgur.com/0xCyb8b.png" alt="" id="hover-image" />
									<span className="hover-text">Seil</span>
								</div></td>
								<td className="bdrseil">0</td>
								<td className="pr3profitseil">0</td>
							</tr>
							<tr>
								<td><div className="image-container">
									<img src="https://i.imgur.com/rjfAPnA.png" alt="" id="hover-image" />
									<span className="hover-text">Metall</span>
								</div></td>
								<td className="bdrmetall">0</td>
								<td className="pr3profitmetall">0</td>
								<td><div className="image-container">
									<img src="https://i.imgur.com/geg8N5P.png" alt="" id="hover-image" />
									<span className="hover-text">Rum</span>
								</div></td>
								<td className="bdrrum">0</td>
								<td className="pr3profitrum">0</td>
							</tr>
							<tr>
								<td><div className="image-container">
									<img src="https://i.imgur.com/UrPmGOG.png" alt="" id="hover-image" />
									<span className="hover-text">Baumwolle</span>
								</div></td>
								<td className="bdrbaumwolle">0</td>
								<td className="pr3profitbaumwolle">0</td>
								<td><div className="image-container">
									<img src="https://i.imgur.com/9OaQKTZ.png" alt="" id="hover-image" />
									<span className="hover-text">Backwaren</span>
								</div></td>
								<td className="bdrbackwaren">0</td>
								<td className="pr3profitbackwaren">0</td>
							</tr>
						</tbody>
					</table>
				</section>
			</div>
		</div>
	);
};