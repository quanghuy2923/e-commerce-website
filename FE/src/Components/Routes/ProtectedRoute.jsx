import { Route, Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const ProtectedRoute = ({ element, isLoggedIn, ...rest }) => {
  return (
    <Route
      {...rest}
      element={isLoggedIn ? element : <Navigate to="/login-register" />}
    />
  );
};

ProtectedRoute.propTypes = {
  element: PropTypes.element.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};

export default ProtectedRoute;
