import waren from '../data/portRoyale3/waren.json';
import { useState } from 'react';

/* -------------------- Holz --------------------*/
const _bedarfholz = waren.find((m) => m.name === 'Holz')?.bedarf;
const bedarfholz = _bedarfholz ? _bedarfholz : 0;
const _profitholz = waren.find((m) => m.name === 'Holz')?.verkauf;
const profitholz = _profitholz ? _profitholz : 0;

/* -------------------- Ziegel --------------------*/
const _bedarfziegel = waren.find((m) => m.name === 'Ziegel')?.bedarf;
const bedarfziegel = _bedarfziegel ? _bedarfziegel : 0;
const _profitziegel = waren.find((m) => m.name === 'Ziegel')?.verkauf;
const profitziegel = _profitziegel ? _profitziegel : 0;

/* -------------------- Weizen --------------------*/
const _bedarfweizen = waren.find((m) => m.name === 'Weizen')?.bedarf;
const bedarfweizen = _bedarfweizen ? _bedarfweizen : 0;
const _profitweizen = waren.find((m) => m.name === 'Weizen')?.verkauf;
const profitweizen = _profitweizen ? _profitweizen : 0;

/* -------------------- Früchte --------------------*/
const _bedarffrüchte = waren.find((m) => m.name === 'Früchte')?.bedarf;
const bedarffrüchte = _bedarffrüchte ? _bedarffrüchte : 0;
const _profitfrüchte = waren.find((m) => m.name === 'Früchte')?.verkauf;
const profitfrüchte = _profitfrüchte ? _profitfrüchte : 0;

/* -------------------- Mais --------------------*/
const _bedarfmais = waren.find((m) => m.name === 'Mais')?.bedarf;
const bedarfmais = _bedarfmais ? _bedarfmais : 0;
const _profitmais = waren.find((m) => m.name === 'Mais')?.verkauf;
const profitmais = _profitmais ? _profitmais : 0;

/* -------------------- Zucker --------------------*/
const _bedarfzucker = waren.find((m) => m.name === 'Zucker')?.bedarf;
const bedarfzucker = _bedarfzucker ? _bedarfzucker : 0;
const _profitzucker = waren.find((m) => m.name === 'Zucker')?.verkauf;
const profitzucker = _profitzucker ? _profitzucker : 0;

/* -------------------- Hanf --------------------*/
const _bedarfhanf = waren.find((m) => m.name === 'Hanf')?.bedarf;
const bedarfhanf = _bedarfhanf ? _bedarfhanf : 0;
const _profithanf = waren.find((m) => m.name === 'Hanf')?.verkauf;
const profithanf = _profithanf ? _profithanf : 0;

/* -------------------- Tuch --------------------*/
const _bedarftuch = waren.find((m) => m.name === 'Tuch')?.bedarf;
const bedarftuch = _bedarftuch ? _bedarftuch : 0;
const _profittuch = waren.find((m) => m.name === 'Tuch')?.verkauf;
const profittuch = _profittuch ? _profittuch : 0;

/* -------------------- Metall --------------------*/
const _bedarfmetall = waren.find((m) => m.name === 'Metall')?.bedarf;
const bedarfmetall = _bedarfmetall ? _bedarfmetall : 0;
const _profitmetall = waren.find((m) => m.name === 'Metall')?.verkauf;
const profitmetall = _profitmetall ? _profitmetall : 0;

/* -------------------- Baumwolle --------------------*/
const _bedarfbaumwolle = waren.find((m) => m.name === 'Baumwolle')?.bedarf;
const bedarfbaumwolle = _bedarfbaumwolle ? _bedarfbaumwolle : 0;
const _profitbaumwolle = waren.find((m) => m.name === 'Baumwolle')?.verkauf;
const profitbaumwolle = _profitbaumwolle ? _profitbaumwolle : 0;

/* -------------------- Metallwaren --------------------*/
const _bedarfmetallwaren = waren.find((m) => m.name === 'Metallwaren')?.bedarf;
const bedarfmetallwaren = _bedarfmetallwaren ? _bedarfmetallwaren : 0;
const _profitmetallwaren = waren.find((m) => m.name === 'Metallwaren')?.verkauf;
const profitmetallwaren = _profitmetallwaren ? _profitmetallwaren : 0;

/* -------------------- Farbstoffe --------------------*/
const _bedarffarbstoffe = waren.find((m) => m.name === 'Farbstoffe')?.bedarf;
const bedarffarbstoffe = _bedarffarbstoffe ? _bedarffarbstoffe : 0;
const _profitfarbstoffe = waren.find((m) => m.name === 'Farbstoffe')?.verkauf;
const profitfarbstoffe = _profitfarbstoffe ? _profitfarbstoffe : 0;


/* -------------------- Kaffee --------------------*/
const _bedarfkaffee = waren.find((m) => m.name === 'Kaffee')?.bedarf;
const bedarfkaffee = _bedarfkaffee ? _bedarfkaffee : 0;
const _profitkaffee = waren.find((m) => m.name === 'Kaffee')?.verkauf;
const profitkaffee = _profitkaffee ? _profitkaffee : 0;

/* -------------------- Kakao --------------------*/
const _bedarfkakao = waren.find((m) => m.name === 'Kakao')?.bedarf;
const bedarfkakao = _bedarfkakao ? _bedarfkakao : 0;
const _profitkakao = waren.find((m) => m.name === 'Kakao')?.verkauf;
const profitkakao = _profitkakao ? _profitkakao : 0;

/* -------------------- Tabak --------------------*/
const _bedarftabak = waren.find((m) => m.name === 'Tabak')?.bedarf;
const bedarftabak = _bedarftabak ? _bedarftabak : 0;
const _profittabak = waren.find((m) => m.name === 'Tabak')?.verkauf;
const profittabak = _profittabak ? _profittabak : 0;

/* -------------------- Fleisch --------------------*/
const _bedarffleisch = waren.find((m) => m.name === 'Fleisch')?.bedarf;
const bedarffleisch = _bedarffleisch ? _bedarffleisch : 0;
const _profitfleisch = waren.find((m) => m.name === 'Fleisch')?.verkauf;
const profitfleisch = _profitfleisch ? _profitfleisch : 0;

/* -------------------- Kleidung --------------------*/
const _bedarfkleidung = waren.find((m) => m.name === 'Kleidung')?.bedarf;
const bedarfkleidung = _bedarfkleidung ? _bedarfkleidung : 0;
const _profitkleidung = waren.find((m) => m.name === 'Kleidung')?.verkauf;
const profitkleidung = _profitkleidung ? _profitkleidung : 0;

/* -------------------- Seil --------------------*/
const _bedarfseil = waren.find((m) => m.name === 'Seil')?.bedarf;
const bedarfseil = _bedarfseil ? _bedarfseil : 0;
const _profitseil = waren.find((m) => m.name === 'Seil')?.verkauf;
const profitseil = _profitseil ? _profitseil : 0;

/* -------------------- Rum --------------------*/
const _bedarfrum = waren.find((m) => m.name === 'Rum')?.bedarf;
const bedarfrum = _bedarfrum ? _bedarfrum : 0;
const _profitrum = waren.find((m) => m.name === 'Rum')?.verkauf;
const profitrum = _profitrum ? _profitrum : 0;

{/* -------------------- Backwaren --------------------*/}
const _bedarfbackwaren = waren.find((m) => m.name === 'Backwaren')?.bedarf;
const bedarfbackwaren = _bedarfbackwaren ? _bedarfbackwaren : 0;
const _profitbackwaren = waren.find((m) => m.name === 'Backwaren')?.verkauf;
const profitbackwaren = _profitbackwaren ? _profitbackwaren : 0;

export const PageBedarfsrechnerPR3 = () => {
	const [anzahl, setAnzahl] = useState(0);
	const [tage, setTage] = useState(0);

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

	const handleClear= () => {
		setAnzahl(0);
		setTage(0);
	}

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
					<button onClick={() => handleClear()}>zurück setzen</button>
				</form>

				<div>
					{/* <div>Tage: {tage}</div>
					<div>Anzahl: {anzahl}</div> */}
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
								<td className="profit-holz">
									{Math.round(Math.round(
										anzahl * bedarfholz * tage) * profitholz
									)}
								</td>

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
								<td className="profit-metallwaren">
									{Math.round(Math.round(
										anzahl *
											bedarfmetallwaren *
											tage) *
											profitmetallwaren
									)}
								</td>
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
								<td className="profit-ziegel">
									{Math.round(Math.round(anzahl * bedarfziegel * tage) * profitziegel)}
								</td>

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
								<td className="profit-farbstoffe">
									{Math.round(Math.round(
										anzahl *
											bedarffarbstoffe *
											tage) *
											profitfarbstoffe
									)}
								</td>
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
								<td className="profit-weizen">
									{Math.round(Math.round(
										anzahl *
											bedarfweizen *
											tage) *
											profitweizen
									)}
								</td>

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
								<td className="profit-kaffee">
									{Math.round(Math.round(
										anzahl *
											bedarfkaffee *
											tage) *
											profitkaffee
									)}
								</td>
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
								<td className="profit-früchte">
									{Math.round(Math.round(
										anzahl *
											bedarffrüchte *
											tage) *
											profitfrüchte
									)}
								</td>

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
								<td className="profit-kakao">
									{Math.round(Math.round(
										anzahl *
											bedarfkakao *
											tage) *
											profitkakao
									)}
								</td>
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
								<td className="profit-mais">
									{Math.round(Math.round(
										anzahl * bedarfmais * tage) * profitmais
									)}
								</td>

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
								<td className="profit-tabak">
									{Math.round(Math.round(
										anzahl *
											bedarftabak *
											tage) *
											profittabak
									)}
								</td>
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
								<td className="profit-zucker">
									{Math.round(Math.round(
										anzahl *
											bedarfzucker *
											tage) *
											profitzucker
									)}
								</td>

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
								<td className="profit-fleisch">
									{Math.round(Math.round(
										anzahl *
											bedarffleisch *
											tage) *
											profitfleisch
									)}
								</td>
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
								<td className="profit-hanf">
									{Math.round(Math.round(
										anzahl * bedarfhanf * tage) * profithanf
									)}
								</td>

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
								<td className="profit-kleidung">
									{Math.round(Math.round(
										anzahl *
											bedarfkleidung *
											tage) *
											profitkleidung
									)}
								</td>
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
								<td className="profit-tuch">
									{Math.round(Math.round(
										anzahl * bedarftuch * tage) * profittuch
									)}
								</td>

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
								<td className="profit-seil">
									{Math.round(Math.round(
										anzahl * bedarfseil * tage) * profitseil
									)}
								</td>
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
								<td className="profit-metall">
									{Math.round(Math.round(
										anzahl *
											bedarfmetall *
											tage) *
											profitmetall
									)}
								</td>

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
								<td className="profit-rum">
									{Math.round(Math.round(
										anzahl * bedarfrum * tage) * profitrum
									)}
								</td>
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
								<td className="profit-baumwolle">
									{Math.round(Math.round(
										anzahl *
											bedarfbaumwolle *
											tage) *
											profitbaumwolle
									)}
								</td>

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
									{Math.round(
										anzahl * bedarfbackwaren * tage
									)}
								</td>
								<td className="profit-backwaren">
									{Math.round(Math.round(
										anzahl *
											bedarfbackwaren *
											tage) *
											profitbackwaren
									)}
								</td>
							</tr>
						</tbody>
					</table>
				</section>
			</div>
		</div>
	);
};
