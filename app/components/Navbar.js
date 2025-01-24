import Link from "next/link";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const isAuthenticated = false;

  return (
    <nav className="bg-gray-800 text-white shadow-md fixed w-full z-10">
      <div className="w-full px-6 py-4 flex justify-evenly items-center h-16">
        {/* Logo/Brand Name */}
        <Link href="/" className="text-2xl font-semibold hover:text-gray-300">
          BlogViewer
        </Link>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="/profile" className="hover:text-gray-300">
            Profile
          </Link>
        </div>

        {/* Login/Logout Button (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          {isAuthenticated ? (
            <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">
              Logout
            </button>
          ) : (
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
              Login
            </button>
          )}
        </div>

        {/* Mobile Menu Component */}
        <MobileMenu />
      </div>
    </nav>
  );
}
