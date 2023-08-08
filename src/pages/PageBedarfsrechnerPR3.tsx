import waren from '../data/portRoyale3/waren.json';
import { useState } from 'react';

/* -------------------- Holz --------------------*/
const _bedarfholz = waren.find((m) => m.name === 'Holz')?.bedarf;
const bedarfholz = _bedarfholz ? _bedarfholz : 0;

/* -------------------- Ziegel --------------------*/
const _bedarfziegel = waren.find((m) => m.name === 'Ziegel')?.bedarf;
const bedarfziegel = _bedarfziegel ? _bedarfziegel : 0;

/* -------------------- Weizen --------------------*/
const _bedarfweizen = waren.find((m) => m.name === 'Weizen')?.bedarf;
const bedarfweizen = _bedarfweizen ? _bedarfweizen : 0;

/* -------------------- Früchte --------------------*/
const _bedarffrüchte = waren.find((m) => m.name === 'Früchte')?.bedarf;
const bedarffrüchte = _bedarffrüchte ? _bedarffrüchte : 0;

/* -------------------- Mais --------------------*/
const _bedarfmais = waren.find((m) => m.name === 'Mais')?.bedarf;
const bedarfmais = _bedarfmais ? _bedarfmais : 0;

/* -------------------- Zucker --------------------*/
const _bedarfzucker = waren.find((m) => m.name === 'Zucker')?.bedarf;
const bedarfzucker = _bedarfzucker ? _bedarfzucker : 0;

/* -------------------- Hanf --------------------*/
const _bedarfhanf = waren.find((m) => m.name === 'Hanf')?.bedarf;
const bedarfhanf = _bedarfhanf ? _bedarfhanf : 0;

/* -------------------- Tuch --------------------*/
const _bedarftuch = waren.find((m) => m.name === 'Tuch')?.bedarf;
const bedarftuch = _bedarftuch ? _bedarftuch : 0;

/* -------------------- Metall --------------------*/
const _bedarfmetall = waren.find((m) => m.name === 'Metall')?.bedarf;
const bedarfmetall = _bedarfmetall ? _bedarfmetall : 0;

/* -------------------- Baumwolle --------------------*/
const _bedarfbaumwolle = waren.find((m) => m.name === 'Baumwolle')?.bedarf;
const bedarfbaumwolle = _bedarfbaumwolle ? _bedarfbaumwolle : 0;

/* -------------------- Metallwaren --------------------*/
const _bedarfmetallwaren = waren.find((m) => m.name === 'Metallwaren')?.bedarf;
const bedarfmetallwaren = _bedarfmetallwaren ? _bedarfmetallwaren : 0;

/* -------------------- Farbstoffe --------------------*/
const _bedarffarbstoffe = waren.find((m) => m.name === 'Farbstoffe')?.bedarf;
const bedarffarbstoffe = _bedarffarbstoffe ? _bedarffarbstoffe : 0;

/* -------------------- Kaffee --------------------*/
const _bedarfkaffee = waren.find((m) => m.name === 'Kaffee')?.bedarf;
const bedarfkaffee = _bedarfkaffee ? _bedarfkaffee : 0;

/* -------------------- Kakao --------------------*/
const _bedarfkakao = waren.find((m) => m.name === 'Kakao')?.bedarf;
const bedarfkakao = _bedarfkakao ? _bedarfkakao : 0;

/* -------------------- Tabak --------------------*/
const _bedarftabak = waren.find((m) => m.name === 'Tabak')?.bedarf;
const bedarftabak = _bedarftabak ? _bedarftabak : 0;

/* -------------------- Fleisch --------------------*/
const _bedarffleisch = waren.find((m) => m.name === 'Fleisch')?.bedarf;
const bedarffleisch = _bedarffleisch ? _bedarffleisch : 0;

/* -------------------- Kleidung --------------------*/
const _bedarfkleidung = waren.find((m) => m.name === 'Kleidung')?.bedarf;
const bedarfkleidung = _bedarfkleidung ? _bedarfkleidung : 0;

/* -------------------- Seil --------------------*/
const _bedarfseil = waren.find((m) => m.name === 'Seil')?.bedarf;
const bedarfseil = _bedarfseil ? _bedarfseil : 0;

/* -------------------- Rum --------------------*/
const _bedarfrum = waren.find((m) => m.name === 'Rum')?.bedarf;
const bedarfrum = _bedarfrum ? _bedarfrum : 0;

{/* -------------------- Backwaren --------------------*/}
const _bedarfbackwaren = waren.find((m) => m.name === 'Backwaren')?.bedarf;
const bedarfbackwaren = _bedarfbackwaren ? _bedarfbackwaren : 0;

export const PageBedarfsrechnerPR3 = () => {
	const [anzahl, setAnzahl] = useState(0);
	const [tage, setTage] = useState(0);

	// const handleBerechnen = (e: React.MouseEvent) => {
	// 	e.preventDefault();
	// }

	const handleAnzahlChange = (e: React.ChangeEvent) => {
		const _anzahl = Number((e.target as HTMLInputElement).value);
		if (!Number.isNaN(_anzahl)) {
			setAnzahl(_anzahl);
		}
	};

	const handleTageChange = (e: React.ChangeEvent) => {
		const _tage = Number((e.target as HTMLInputElement).value);
		if (!Number.isNaN(_tage)) {
			setTage(_tage);
		}
	};

	return (
		<div className="page pageBedarfsrechnerPR3">
			<h2 className="überschrift">Bedarfsrechner</h2>

			<div>
				<form>
					Bedarf für
					<input
						type="text"
						placeholder="Anzahl"
						id="bewohneranzahl"
						value={anzahl}
						onChange={(e) => handleAnzahlChange(e)}
					/>
					Bewohner für
					<input
						type="text"
						placeholder="volle Tage"
						id="tage"
						value={tage}
						onChange={(e) => handleTageChange(e)}
					/>
					Tage
					{/* <button className="btnProcessbedarfrPR3" onClick={(e) => handleBerechnen(e)}>berechnen</button> */}
					<input type="reset" />
				</form>

				<div>
					{/* <div>bedarfholz: {bedarfholz}</div>
					<div>bedarfrholz: {anzahl * bedarfholz}</div> */}
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
								{/* -------------------- Holz --------------------*/}
								<td>
									<div className="image-container">
										<img
											src="img/PR3/Holz.png"
											alt=""
											id="hover-image"
										/>
										<span className="hover-text">Holz</span>
									</div>
								</td>
								<td className="bedarf-holz">
									{Math.round(anzahl * bedarfholz * tage)}
								</td>
								<td className="profit-holz">0</td>

								{/* -------------------- Metallwaren --------------------*/}
								<td>
									<div className="image-container">
										<img
											src="img/PR3/Metallwaren.png"
											alt=""
											id="hover-image"
										/>
										<span className="hover-text">
											Metallwaren
										</span>
									</div>
								</td>
								<td className="bedarf-metallwaren">
									{Math.round(
										anzahl * bedarfmetallwaren * tage
									)}
								</td>
								<td className="profit-metallwaren">0</td>
							</tr>
							<tr>
								{/* -------------------- Ziegel --------------------*/}
								<td>
									<div className="image-container">
										<img
											src="img/PR3/Ziegel.png"
											alt=""
											id="hover-image"
										/>
										<span className="hover-text">
											Ziegel
										</span>
									</div>
								</td>
								<td className="bedarf-ziegel">
									{Math.round(anzahl * bedarfziegel * tage)}
								</td>
								<td className="profit-ziegel">0</td>

								{/* -------------------- Farbstoffe --------------------*/}
								<td>
									<div className="image-container">
										<img
											src="img/PR3/Farbstoffe.png"
											alt=""
											id="hover-image"
										/>
										<span className="hover-text">
											Farbstoffe
										</span>
									</div>
								</td>
								<td className="bedarf-farbstoffe">
									{Math.round(
										anzahl * bedarffarbstoffe * tage
									)}
								</td>
								<td className="profit-farbstoffe">0</td>
								<td>Profit</td>
								<td className="all-profit">0</td>
							</tr>
							<tr>
								{/* -------------------- Weizen --------------------*/}
								<td>
									<div className="image-container">
										<img
											src="img/PR3/Weizen.png"
											alt=""
											id="hover-image"
										/>
										<span className="hover-text">
											Weizen
										</span>
									</div>
								</td>
								<td className="bedarf-weizen">
									{Math.round(anzahl * bedarfweizen * tage)}
								</td>
								<td className="profit-weizen">0</td>

								{/* -------------------- Kaffee --------------------*/}
								<td>
									<div className="image-container">
										<img
											src="img/PR3/Kaffee.png"
											alt=""
											id="hover-image"
										/>
										<span className="hover-text">
											Kaffee
										</span>
									</div>
								</td>
								<td className="bedarf-kaffee">
									{Math.round(anzahl * bedarfkaffee * tage)}
								</td>
								<td className="profit-kaffee">0</td>
							</tr>
							<tr>
								{/* -------------------- Früchte --------------------*/}
								<td>
									<div className="image-container">
										<img
											src="img/PR3/Früchte.png"
											alt=""
											id="hover-image"
										/>
										<span className="hover-text">
											Früchte
										</span>
									</div>
								</td>
								<td className="bedarf-früchte">
									{Math.round(anzahl * bedarffrüchte * tage)}
								</td>
								<td className="profit-früchte">0</td>

								{/* -------------------- Kakao --------------------*/}
								<td>
									<div className="image-container">
										<img
											src="img/PR3/Kakao.png"
											alt=""
											id="hover-image"
										/>
										<span className="hover-text">
											Kakao
										</span>
									</div>
								</td>
								<td className="bedarf-kakao">
									{Math.round(anzahl * bedarfkakao * tage)}
								</td>
								<td className="profit-kakao">0</td>
								<td>Konvoigröße</td>
								<td className="konvoi">0</td>
							</tr>
							<tr>
								{/* -------------------- Mais --------------------*/}
								<td>
									<div className="image-container">
										<img
											src="img/PR3/Mais.png"
											alt=""
											id="hover-image"
										/>
										<span className="hover-text">Mais</span>
									</div>
								</td>
								<td className="bedarf-mais">
									{Math.round(anzahl * bedarfmais * tage)}
								</td>
								<td className="profit-mais">0</td>

								{/* -------------------- Tabak --------------------*/}
								<td>
									<div className="image-container">
										<img
											src="img/PR3/Tabak.png"
											alt=""
											id="hover-image"
										/>
										<span className="hover-text">
											Tabak
										</span>
									</div>
								</td>
								<td className="bedarf-tabak">
									{Math.round(anzahl * bedarftabak * tage)}
								</td>
								<td className="profit-tabak">0</td>
							</tr>
							<tr>
								{/* -------------------- Zucker --------------------*/}
								<td>
									<div className="image-container">
										<img
											src="img/PR3/Zucker.png"
											alt=""
											id="hover-image"
										/>
										<span className="hover-text">
											Zucker
										</span>
									</div>
								</td>
								<td className="bedarf-zucker">
									{Math.round(anzahl * bedarfzucker * tage)}
								</td>
								<td className="profit-zucker">0</td>

								{/* -------------------- Fleisch --------------------*/}
								<td>
									<div className="image-container">
										<img
											src="img/PR3/Fleisch.png"
											alt=""
											id="hover-image"
										/>
										<span className="hover-text">
											Fleisch
										</span>
									</div>
								</td>
								<td className="bedarf-fleisch">
									{Math.round(anzahl * bedarffleisch * tage)}
								</td>
								<td className="profit-fleisch">0</td>
							</tr>
							<tr>
								{/* -------------------- Hanf --------------------*/}
								<td>
									<div className="image-container">
										<img
											src="img/PR3/Hanf.png"
											alt=""
											id="hover-image"
										/>
										<span className="hover-text">Hanf</span>
									</div>
								</td>
								<td className="bedarf-hanf">
									{Math.round(anzahl * bedarfhanf * tage)}
								</td>
								<td className="profit-hanf">0</td>

								{/* -------------------- Kleidung --------------------*/}
								<td>
									<div className="image-container">
										<img
											src="img/PR3/Kleidung.png"
											alt=""
											id="hover-image"
										/>
										<span className="hover-text">
											Kleidung
										</span>
									</div>
								</td>
								<td className="bedarf-kleidung">
									{Math.round(anzahl * bedarfkleidung * tage)}
								</td>
								<td className="profit-kleidung">0</td>
							</tr>
							<tr>
								{/* -------------------- Tuch --------------------*/}
								<td>
									<div className="image-container">
										<img
											src="img/PR3/Tuch.png"
											alt=""
											id="hover-image"
										/>
										<span className="hover-text">Tuch</span>
									</div>
								</td>
								<td className="bedarf-tuch">
									{Math.round(anzahl * bedarftuch * tage)}
								</td>
								<td className="profit-tuch">0</td>

								{/* -------------------- Seil --------------------*/}
								<td>
									<div className="image-container">
										<img
											src="img/PR3/Seil.png"
											alt=""
											id="hover-image"
										/>
										<span className="hover-text">Seil</span>
									</div>
								</td>
								<td className="bedarf-seil">
									{Math.round(anzahl * bedarfseil * tage)}
								</td>
								<td className="profit-seil">0</td>
							</tr>
							<tr>
								{/* -------------------- Metall --------------------*/}
								<td>
									<div className="image-container">
										<img
											src="img/PR3/Metall.png"
											alt=""
											id="hover-image"
										/>
										<span className="hover-text">
											Metall
										</span>
									</div>
								</td>
								<td className="bedarf-metall">
									{Math.round(anzahl * bedarfmetall * tage)}
								</td>
								<td className="profit-metall">0</td>

								{/* -------------------- Rum --------------------*/}
								<td>
									<div className="image-container">
										<img
											src="img/PR3/Rum.png"
											alt=""
											id="hover-image"
										/>
										<span className="hover-text">Rum</span>
									</div>
								</td>
								<td className="bedarf-rum">
									{Math.round(anzahl * bedarfrum * tage)}
								</td>
								<td className="profit-rum">0</td>
							</tr>
							<tr>
								{/* -------------------- Baumwolle --------------------*/}
								<td>
									<div className="image-container">
										<img
											src="img/PR3/Baumwolle.png"
											alt=""
											id="hover-image"
										/>
										<span className="hover-text">
											Baumwolle
										</span>
									</div>
								</td>
								<td className="bedarf-baumwolle">
									{Math.round(
										anzahl * bedarfbaumwolle * tage
									)}
								</td>
								<td className="profit-baumwolle">0</td>

								{/* -------------------- Backwaren --------------------*/}
								<td>
									<div className="image-container">
										<img
											src="img/PR3/Backwaren.png"
											alt=""
											id="hover-image"
										/>
										<span className="hover-text">
											Backwaren
										</span>
									</div>
								</td>
								<td className="bedarf-backwaren">
									{Math.round(anzahl * bedarfbackwaren * tage)}
								</td>
								<td className="profit-backwaren">0</td>
							</tr>
						</tbody>
					</table>
				</section>
			</div>
		</div>
	);
};
