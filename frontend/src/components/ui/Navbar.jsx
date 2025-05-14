import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/uselogout";
import { useAuthContext } from "../../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const handleLogout = () => {
    logout();
  };

  return (
    
    <header className="bg-gray-900/80 backdrop-blur-lg shadow-lg sticky top-0 z-50 border-b border-gray-800">
  <div className="max-w-[1400px] mx-auto px-6 py-4 flex flex-wrap md:flex-nowrap items-center justify-between font-poppins">
    <Link
      to="/"
      className="text-2xl font-bold text-white tracking-tight hover:text-emerald-400 transition-colors duration-300"
    >
      Workout<span className="text-emerald-400">Buddy</span>
    </Link>

    <div className="flex items-center gap-3 mt-3 md:mt-0">
      {!user && (
        <>
          <Link
            to="/login"
            className="px-4 py-2 bg-gray-800/70 hover:bg-emerald-600 text-gray-300 hover:text-white rounded-lg border border-gray-700/50 backdrop-blur-sm shadow transition-all"
          >
            Log In
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg shadow-md transition-all"
          >
            Sign Up
          </Link>
        </>
      )}
      {user && (
        <>
          <span className="px-3 py-1 bg-gray-800/70 text-gray-300 rounded-lg border border-gray-700/50 backdrop-blur-sm">
            {user.email}
          </span>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg shadow-md transition-all"
          >
            Logout
          </button>
        </>
      )}
    </div>
  </div>
</header>

  );
};

export default Navbar;
