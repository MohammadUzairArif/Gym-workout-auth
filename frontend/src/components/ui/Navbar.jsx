import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-300 dark:border-gray-700 shadow-sm sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between font-poppins">
        <Link
          to="/"
          className="text-2xl font-semibold text-gray-800 dark:text-white hover:text-primary transition-colors duration-300"
        >
          Workout Buddy
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
