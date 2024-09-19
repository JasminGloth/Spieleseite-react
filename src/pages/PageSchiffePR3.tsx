import schiffe from "../data/portRoyale3/schiffe.json";

export const PageSchiffePR3 = () => {
	return (
		<div className="page pageSchiffePR3">
			<h2>Schiffe</h2>
			<div className="shipgrid">
				{schiffe.map((schiff) => {
					return <div>
					<div>{schiff.name}</div>
					<div><img src={schiff.bild} alt="" /></div>
					</div>
				})}
			</div>
		</div>
	);
};