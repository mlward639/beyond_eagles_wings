import { Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Header from "./components/Header/Header";
import InformationPage from "./pages/CompanyInfo";
import AboutMePage from "./pages/AboutMe";
import ServicesPage from "./pages/Services";
import IntroServices from "./components/Services/IntroServices";
import InitialConsult from "./components/Services/InitialConsult";
import LifeReview from "./components/Services/LifeReview";
import LegacyProject from "./components/Services/LegacyProject";
import VigilPlanning from "./components/Services/VigilPlanning";
import Vigil from "./components/Services/Vigil";
import AddlServices from "./components/Services/AddlServices";
import Rates from "./components/Services/Rates";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="info" element={<InformationPage />} />
        <Route path="about" element={<AboutMePage />} />
        <Route path="services" element={<ServicesPage />}>
          <Route index element={<IntroServices />} />
          <Route path="initial" element={<InitialConsult />} />
          <Route path="life-review" element={<LifeReview />} />
          <Route path="legacy" element={<LegacyProject />} />
          <Route path="vigil-planning" element={<VigilPlanning />} />
          <Route path="vigil" element={<Vigil />} />
          <Route path="addl-services" element={<AddlServices />} />
          <Route path="rates" element={<Rates />} />
        </Route>
        <Route path="*" element={<p>Not found!</p>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
