import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CoursePage from "./pages/CoursePage";

export default function App() {
    return (
        <BrowserRouter basename="/mario-kart-shortcuts">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/:code" element={<CoursePage />} />
            </Routes>
        </BrowserRouter>
    );
}
