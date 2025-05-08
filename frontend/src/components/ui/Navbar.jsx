import { Link } from 'react-router-dom';


const Navbar = () => {
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

       
      </div>
    </header>
  );
};

export default Navbar;
