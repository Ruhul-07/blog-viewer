import Link from "next/link";
import MobileMenu from "./MobileMenu";
import {LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";



export default async function Navbar() {
  const {isAuthenticated} = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();
  

  return (
    <nav className="bg-gray-800 text-white shadow-md sticky top-0 mb-10 w-full z-10">
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
          {isUserAuthenticated ? (
            <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">
              <LogoutLink>Logout</LogoutLink>
            </button>
          ) : (
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
            
            <LoginLink>Login</LoginLink>
            </button>
          )}
        </div>

        {/* Mobile Menu Component */}
        <MobileMenu />
      </div>
    </nav>
  );
}
