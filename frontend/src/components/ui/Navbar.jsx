import { Link } from 'react-router-dom';
import { useLogout } from '../../hooks/uselogout';

const Navbar = () => {
  const { logout } = useLogout();
  const handleLogout = () => {
    logout();
    
  };

  return (
    <header className="bg-gray-900/90 backdrop-blur-md shadow-md sticky top-0 z-50 border-b border-gray-800">
      <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between font-poppins">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-white tracking-tight hover:text-emerald-400 transition-colors duration-300"
        >
          Workout<span className="text-emerald-400">Buddy</span>
        </Link>

        {/* Auth Links */}
        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="text-gray-300 hover:text-emerald-400 text-sm font-medium transition-colors duration-200"
          >
            Log In
          </Link>
          <Link
            to="/signup"
            className="bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium px-4 py-2 rounded-md transition-colors duration-200"
          >
            Sign Up
          </Link>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-4 py-2 rounded-md transition-colors duration-200"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
