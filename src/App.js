import { Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Header from "./components/Header/Header";
import InformationPage from "./pages/CompanyInfo";
import AboutMePage from "./pages/AboutMe";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/info" element={<InformationPage />} />
        <Route path="/about" element={<AboutMePage />} />

        <Route path="*" element={<p>Not found!</p>} />
      </Routes>
    </div>
  );
}

export default App;
