import "./tailwind.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Picture from "./Components/Header/Picture";
import LoginRegister from "./Components/Header/Navbar/Login";
import Header from "./Components/Header";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Picture />} />
        <Route path="/login-register" element={<LoginRegister />} />
      </Routes>
    </Router>
  );
}
