import { useState } from "react";
import { useLogin } from "../hooks/useLogin.jsx";

import { Link } from "react-router-dom";
const Login = () => {
  const { login, isLoading, error } = useLogin();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(formData.email, formData.password);
    // Don't reset form if signup fails
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-gray-900/80 backdrop-blur-lg border border-gray-800 rounded-2xl p-6 shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300"
    >
      <h3 className="text-2xl font-extrabold mb-6 pb-2 text-white">Log In</h3>

      <div className="space-y-6">
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 focus:border-emerald-400 transition-all"
          />
        </div>

        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 focus:border-emerald-400 transition-all"
          />
        </div>

        <button
          disabled={isLoading}
          type="submit"
          className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3.5 rounded-xl shadow-lg hover:shadow-emerald-400/20 transition-all"
        >
          Log In
        </button>

        {/* ✅ Error shown with consistent spacing & styling */}
        {error && (
          <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-2 rounded-lg">
            {error}
          </div>
        )}
        <p className="text-center text-sm text-gray-400 mt-4">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-emerald-400 hover:text-emerald-300 underline transition"
            >
              Create account
            </Link>
          </p>
      </div>
    </form>
  );
};

export default Login;