import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function LoginRegister({ onLoginSuccess, onRegisterSuccess }) {
  const navigate = useNavigate();
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: email,
          password: password,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Success:', result);
      if (onLoginSuccess) onLoginSuccess();
      alert("Login successful!");
      navigate("/"); // Navigate to home page
    } catch (error) {
      console.error('Error:', error);
      alert("Login failed!");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      const response = await fetch('http://127.0.0.1:8000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Success:', result);
      if (onRegisterSuccess) onRegisterSuccess();
      alert("Registration successful! You can now log in.");
      setIsRegistering(false);
    } catch (error) {
      console.error('Error:', error);
      alert("Registration failed!");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">
          {isRegistering ? "Register" : "Login"}
        </h2>
        <form
          onSubmit={isRegistering ? handleRegister : handleLogin}
          className="space-y-4"
        >
          <div>
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          {isRegistering && (
            <div>
              <label htmlFor="confirmPassword" className="block text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded"
          >
            {isRegistering ? "Register" : "Login"}
          </button>
        </form>
        <button
          onClick={() => setIsRegistering(!isRegistering)}
          className="mt-4 text-blue-500 underline"
        >
          {isRegistering
            ? "Already have an account? Login"
            : "Need an account? Register"}
        </button>
      </div>
    </div>
  );
}

LoginRegister.propTypes = {
  onLoginSuccess: PropTypes.func,
  onRegisterSuccess: PropTypes.func,
};

export default LoginRegister;
