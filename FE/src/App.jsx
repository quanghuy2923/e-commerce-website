import "./tailwind.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Navigate,
} from "react-router-dom";
import { useState } from "react";

import LoginRegister from "./Components/Header/Navbar/Login";
import Header from "./Components/Header";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <MainContent
        isAuthenticated={isAuthenticated}
        onLoginSuccess={handleLoginSuccess}
      />
    </Router>
  );
}

// eslint-disable-next-line react/prop-types
function MainContent({ isAuthenticated, onLoginSuccess }) {
  const location = useLocation();
  const hideHeaderRoutes = ["/login-register"];

  if (!isAuthenticated && location.pathname !== "/login-register") {
    return <Navigate to="/login-register" />;
  }

  return (
    <>
      {!hideHeaderRoutes.includes(location.pathname) && <Header />}
      <Routes>
        <Route
          path="/login-register"
          element={<LoginRegister onLoginSuccess={onLoginSuccess} />}
        />
        {/* Các route khác của bạn */}
      </Routes>
    </>
  );
}

export default App;
