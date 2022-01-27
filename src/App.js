import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import PlanetPage from "./components/PlanetPage";
import "./styles/App.scss";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Navbar />
        <Routes>
        <Route path="/" element={<HomePage/>}/>
          <Route path="/:planet" element={<PlanetPage />} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
