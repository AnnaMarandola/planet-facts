import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import MobileNav from "./components/MobileNav";
import Navbar from "./components/Navbar";
import PlanetPage2 from "./components/PlanetPage2";
import "./styles/App.scss";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <MobileNav />
      <Navbar />
        <Routes>
        <Route path="/" element={<HomePage/>}/>
          <Route path="/:planet" element={<PlanetPage2 />} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
