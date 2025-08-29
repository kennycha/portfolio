import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav className="pointer-events-none fixed top-0 right-0 left-0 z-50 flex items-center justify-center bg-transparent py-6 md:py-12">
      <div className="pointer-events-auto flex items-center space-x-2 rounded-full border border-gray-300 bg-white/80 px-6 py-2 shadow-sm backdrop-blur-sm md:space-x-8">
        <p className="text-2xl font-bold text-blue-800">Kennycha</p>
        <Link to="/" className="text-gray-600 transition-colors hover:text-gray-900">
          Projects
        </Link>
        <Link to="/careers" className="text-gray-600 transition-colors hover:text-gray-900">
          Careers
        </Link>
        <Link to="/about" className="text-gray-600 transition-colors hover:text-gray-900">
          About
        </Link>
      </div>
    </nav>
  );
};
