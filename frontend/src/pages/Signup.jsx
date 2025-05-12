import { useState } from 'react';
import { useSignup } from '../hooks/useSignup';
const Signup = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
    const { signup, isLoading, error } = useSignup();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(formData.email, formData.password);
    if(!error){
setFormData({
      email: '',
      password: ''
    });
    }
    
    
  };

  return (
    <div className="max-w-md mx-auto bg-gray-900/80 border border-gray-800 p-8 rounded-2xl shadow-lg font-poppins text-white">
      <h2 className="text-2xl font-bold mb-6 text-center text-white">
        Sign up for <span className="text-emerald-400">WorkoutBuddy</span>
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
            disabled={isLoading}
          type="submit"
          className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition"
        >
          Sign Up
        </button>
        {error && <div className="text-sm text-red-400 bg-red-900 p-2 rounded">{error}</div>}
      </form>
    </div>
  );
};

export default Signup;
