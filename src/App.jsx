import { BrowserRouter, 
    Routes, 
    Route }             from "react-router-dom";
import HomePage         from "./pages/HomePage";
import LuigiRaceway     from "./pages/courses/LuigiRaceway";
import MooMooFarm       from "./pages/courses/MooMooFarm";
import KoopaTroopaBeach from "./pages/courses/KoopaTroopaBeach";
import KalimariDesert   from "./pages/courses/KalimariDesert";
import ToadsTurnpike    from "./pages/courses/ToadsTurnpike";
import FrappeSnowland   from "./pages/courses/FrappeSnowland";
import ChocoMountain    from "./pages/courses/ChocoMountain";
import MarioRaceway     from "./pages/courses/MarioRaceway";
import WarioStadium     from "./pages/courses/WarioStadium";
import SherbetLand      from "./pages/courses/SherbetLand";
import RoyalRaceway     from "./pages/courses/RoyalRaceway";
import BowsersCastle    from "./pages/courses/BowsersCastle";
import DKJungleParkway  from "./pages/courses/DKJungleParkway";
import YoshiValley      from "./pages/courses/YoshiValley";
import BansheeBoardwalk from "./pages/courses/BansheeBoardwalk";
import RainbowRoad      from "./pages/courses/RainbowRoad";

export default function App() {
    return (
        <BrowserRouter basename="/mario-kart-shortcuts">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/LR" element={<LuigiRaceway />} />
                <Route path="/MMF" element={<MooMooFarm />} />
                <Route path="/KTB" element={<KoopaTroopaBeach />} />
                <Route path="/KD" element={<KalimariDesert />} />
                <Route path="/TT" element={<ToadsTurnpike />} />
                <Route path="/FS" element={<FrappeSnowland />} />
                <Route path="/CM" element={<ChocoMountain />} />
                <Route path="/MR" element={<MarioRaceway />} />
                <Route path="/WS" element={<WarioStadium />} />
                <Route path="/SL" element={<SherbetLand />} />
                <Route path="/RRy" element={<RoyalRaceway />} />
                <Route path="/BC" element={<BowsersCastle />} />
                <Route path="/DKJP" element={<DKJungleParkway />} />
                <Route path="/YV" element={<YoshiValley />} />
                <Route path="/BB" element={<BansheeBoardwalk />} />
                <Route path="/RRd" element={<RainbowRoad />} />
            </Routes>
        </BrowserRouter>
    );
}
