import { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="max-w-md mx-auto bg-gray-900/80 border border-gray-800 p-8 rounded-2xl shadow-lg font-poppins text-white">
      <h2 className="text-2xl font-bold mb-6 text-center text-white">
        Login to <span className="text-emerald-400">WorkoutBuddy</span>
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl bg-gray-800/60 border border-gray-700 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl bg-gray-800/60 border border-gray-700 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
        />

        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition"
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
