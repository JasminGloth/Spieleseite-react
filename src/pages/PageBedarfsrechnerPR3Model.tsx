import waren from '../data/portRoyale3/waren.json';
import { useState } from 'react';



export const PageBedarfsrechnerPR3Model = () => {
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

	let konvoi = 0;
	let allprofit =0;

	const data = waren.map((ware) => {
		const bedarf = Math.round(anzahl * ware.bedarf * tage);
		const profit = bedarf * ware.verkauf;
		konvoi += bedarf;
		allprofit += profit
		return { name: ware.name, bedarf, profit };
	});

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
									{
										data.find((m) => m.name === 'Holz')
											?.bedarf
									}
								</td>
								<td className="profit-holz">
									{
										data.find((m) => m.name === 'Holz')
											?.profit
									}
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
									{
										data.find(
											(m) => m.name === 'Metallwaren'
										)?.bedarf
									}
								</td>
								<td className="profit-metallwaren">
									{
										data.find(
											(m) => m.name === 'Metallwaren'
										)?.profit
									}
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
									{
										data.find((m) => m.name === 'Ziegel')
											?.bedarf
									}
								</td>
								<td className="profit-ziegel">
									{
										data.find((m) => m.name === 'Ziegel')
											?.profit
									}
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
									{
										data.find(
											(m) => m.name === 'Farbstoffe'
										)?.bedarf
									}
								</td>
								<td className="profit-farbstoffe">
									{
										data.find(
											(m) => m.name === 'Farbstoffe'
										)?.profit
									}
								</td>
								<td>Profit</td>
								<td className="all-profit">{allprofit}</td>
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
									{
										data.find((m) => m.name === 'Weizen')
											?.bedarf
									}
								</td>
								<td className="profit-weizen">
									{
										data.find((m) => m.name === 'Weizen')
											?.profit
									}
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
									{
										data.find((m) => m.name === 'Kaffee')
											?.bedarf
									}
								</td>
								<td className="profit-kaffee">
									{
										data.find((m) => m.name === 'Kaffee')
											?.profit
									}
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
									{
										data.find((m) => m.name === 'Früchte')
											?.bedarf
									}
								</td>
								<td className="profit-früchte">
									{
										data.find((m) => m.name === 'Früchte')
											?.profit
									}
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
									{
										data.find((m) => m.name === 'Kakao')
											?.bedarf
									}
								</td>
								<td className="profit-kakao">
									{
										data.find((m) => m.name === 'Kakao')
											?.profit
									}
								</td>
								<td>Konvoigröße</td>
								<td className="konvoi">{konvoi}</td>
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
									{
										data.find((m) => m.name === 'Mais')
											?.bedarf
									}
								</td>
								<td className="profit-mais">
									{
										data.find((m) => m.name === 'Mais')
											?.profit
									}
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
									{
										data.find((m) => m.name === 'Tabak')
											?.bedarf
									}
								</td>
								<td className="profit-tabak">
									{
										data.find((m) => m.name === 'Tabak')
											?.profit
									}
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
									{
										data.find((m) => m.name === 'Zucker')
											?.bedarf
									}
								</td>
								<td className="profit-zucker">
									{
										data.find((m) => m.name === 'Zucker')
											?.profit
									}
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
									{
										data.find((m) => m.name === 'Fleisch')
											?.bedarf
									}
								</td>
								<td className="profit-fleisch">
									{
										data.find((m) => m.name === 'Fleisch')
											?.profit
									}
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
									{
										data.find((m) => m.name === 'Hanf')
											?.bedarf
									}
								</td>
								<td className="profit-hanf">
									{
										data.find((m) => m.name === 'Hanf')
											?.profit
									}
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
									{
										data.find((m) => m.name === 'Kleidung')
											?.bedarf
									}
								</td>
								<td className="profit-kleidung">
									{
										data.find((m) => m.name === 'Kleidung')
											?.profit
									}
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
									{
										data.find((m) => m.name === 'Tuch')
											?.bedarf
									}
								</td>
								<td className="profit-tuch">
									{
										data.find((m) => m.name === 'Tuch')
											?.profit
									}
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
									{
										data.find((m) => m.name === 'Seil')
											?.bedarf
									}
								</td>
								<td className="profit-seil">
									{
										data.find((m) => m.name === 'Seil')
											?.profit
									}
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
									{
										data.find((m) => m.name === 'Metall')
											?.bedarf
									}
								</td>
								<td className="profit-metall">
									{
										data.find((m) => m.name === 'Metall')
											?.profit
									}
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
									{data.find((m) => m.name === 'Rum')?.bedarf}
								</td>
								<td className="profit-rum">
									{data.find((m) => m.name === 'Rum')?.profit}
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
									{
										data.find((m) => m.name === 'Baumwolle')
											?.bedarf
									}
								</td>
								<td className="profit-baumwolle">
									{
										data.find((m) => m.name === 'Baumwolle')
											?.profit
									}
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
									{
										data.find((m) => m.name === 'Backwaren')
											?.bedarf
									}
								</td>
								<td className="profit-backwaren">
									{
										data.find((m) => m.name === 'Backwaren')
											?.profit
									}
								</td>
							</tr>
						</tbody>
					</table>
				</section>
			</div>
		</div>
	);
};
