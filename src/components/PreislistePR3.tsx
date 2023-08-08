import waren from '../data/portRoyale3/waren.json';

export const PreislistePR3 = () => {
	return (
		<div>
			<h2 className="überschrift">Preisliste normal</h2>
			<section className="preisliste">
				<table>
					<thead>
						<tr>
							<td>Ware</td>
							<td>Ankauf</td>
							<td>Verkauf</td>
							<td>Herstellungsstädte</td>
						</tr>
					</thead>
					<tbody>
						{waren.map((warenItem, index) => {
							return (
								<tr key={index}>
									<td>{warenItem.name}</td>
									<td>{warenItem.ankauf}</td>
									<td>{warenItem.verkauf}</td>
									<td>{warenItem.herstadt.join(", ")}</td>
								</tr>
							)
						})}
					</tbody>
				</table>
			</section>
		</div>
	);
};