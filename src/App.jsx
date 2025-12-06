import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TrackPage from "./pages/TrackPage";
import { courses } from "./data/courses.js";

export default function App() {
	return (
		<BrowserRouter basename="/mario-kart-shortcuts">
			<Routes>
				<Route path="/" element={<HomePage />} />
				{courses.map((c) => (
					<Route
						key={c.code}
						path={`/${c.code}`}
						element={<TrackPage course={c} />}
					/>
				))}
			</Routes>
		</BrowserRouter>
	);
}
