import { Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Header from "./components/Header/Header";
import Information from "./pages/CompanyInfo";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/info" element={<Information />} />

        <Route path="*" element={<p>Not found!</p>} />
      </Routes>
    </div>
  );
}

export default App;
