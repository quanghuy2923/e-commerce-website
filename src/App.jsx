import "./tailwind.css";
import Navbar from "./Components/Header/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Picture from "./Components/Header/Picture";
import LoginRegister from "./Components/Header/Navbar/Login";
export default function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Picture />} />
          <Route path="/login-register" element={<LoginRegister />} />
        </Routes>
      </Router>
    </div>
  );
}
