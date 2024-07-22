import "./tailwind.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import LoginRegister from "./Components/Header/Navbar/Login";
import Header from "./Components/Header";

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

function MainContent() {
  const location = useLocation();
  const hideHeaderRoutes = ["/login-register"];

  return (
    <>
      {!hideHeaderRoutes.includes(location.pathname) && <Header />}
      <Routes>
        <Route path="/login-register" element={<LoginRegister />} />
      </Routes>
    </>
  );
}

export default App;
