import './App.scss';
import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import { PagePreislistePR3 } from './pages/PagePreislistePR3';
import { PageBedarfsrechnerPR3 } from './pages/PageBedarfsrechnerPR3';
import { PageKampfPR3 } from './pages/PageKampfPR3';
import { PageSchiffePR3 } from './pages/PageSchiffePR3';
import { PageAboutPR3 } from './pages/PageAboutPR3';
import { PageBedarfsrechnerP4 } from './pages/PageBedarfsrechnerP4';


function App() {
	return (
		<div className="App">
			<h1>Glenna´s Spielekiste</h1>
			<nav>
				<ul>
					<li className="dropdown">
						<a href="#" className="dropbtn">Port Royale 3</a>
						<div className="dropdown-content">
							<NavLink to="/preislistePR3">Preisliste</NavLink>
							<NavLink to="/bedarfsrechnerPR3">Bedarfsrechner</NavLink>
							<NavLink to="/kampfPR3">Kampf</NavLink>
							<NavLink to="/schiffePR3">Schiffe</NavLink>
							<NavLink to="/aboutPR3">About</NavLink>
						</div>
					</li>
					<li className="dropdown">
						<a href="#" className="dropbtn">Patrizier 4</a>
						<div className="dropdown-content">
							<NavLink to="/bedarfsrechnerP4">Bedarfsrechner</NavLink>
						</div>
					</li>
				</ul>
			</nav>

			<Routes>
				<Route path="/preislistePR3" element={<PagePreislistePR3 />} />
				<Route path="/bedarfsrechnerPR3" element={<PageBedarfsrechnerPR3 />} />
				<Route path="/kampfPR3" element={<PageKampfPR3 />} />
				<Route path="/schiffePR3" element={<PageSchiffePR3 />} />
				<Route path="/aboutPR3" element={<PageAboutPR3 />} />
				<Route path="/bedarfsrechnerP4" element={<PageBedarfsrechnerP4/>}/>
				<Route path="/" element={<Navigate to="/preislistePR3" replace />} />
			</Routes>
		</div>
	);
}

export default App;
