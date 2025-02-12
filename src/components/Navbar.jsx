import { useEffect, useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import img1 from "../assets/images/navbar-logo.png";
import { GrMenu } from "react-icons/gr";
import { BiLogOut } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
// import { FaHome, FaInfoCircle, FaCogs, FaCompass, FaQuestionCircle } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const checkScrollTop = () => {
      if (document.documentElement.scrollTop > 50) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("scroll", checkScrollTop);
    return () => document.removeEventListener("scroll", checkScrollTop);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/signin");
  };

  return (
    <div className="w-full fixed z-50">
      <nav className="h-15 bg-gray-800 rounded-lg backdrop-blur-md bg-opacity-90 mx-[9vw] my-[3vmax] max-w-[400px]:mx-[1vw]">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-3 cursor-pointer">
            <img src={img1} className="h-8" alt="navbar logo" />
          </NavLink>

          {/* Register/Login and Logout */}
          <div className="flex md:order-2">
            {!location.pathname.includes("/profile") ? (
              <NavLink
                to={localStorage.getItem("authToken") ? "/profile" : "/register"}
                className="text-black bg-blue-50 hover:bg-violet-300 font-medium rounded-lg text-sm px-4 py-2 cursor-pointer"
              >
                {localStorage.getItem("authToken") ? (
                  <div className="flex items-center gap-2">
                    Hi, {localStorage.getItem("userName")} <CgProfile className="text-lg" />
                  </div>
                ) : (
                  "Register"
                )}
              </NavLink>
            ) : (
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex items-center gap-2 ml-4"
              >
                Logout <BiLogOut className="text-lg" />
              </button>
            )}
          </div>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
            className="inline-flex items-center p-2 w-12 h-12 justify-center text-6xl text-white rounded-lg md:hidden"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <GrMenu />
          </button>

          {/* Mobile Menu */}
          <div
            className={`fixed top-0 right-0 h-screen w-64 bg-gray-900 text-white shadow-lg transform ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 ease-in-out md:hidden`}
          >
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-5 right-5 text-white text-3xl"
            >
              ✖
            </button>
            <ul className="flex flex-col mt-16 space-y-6 text-lg font-semibold p-6">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/mechanism", label: "Mechanism" },
                { to: "/explore", label: "Explore" },
                { to: "/faqs", label: "FAQs" },
              ].map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-3 cursor-pointer hover:text-gray-300"
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className="text-white hover:text-gray-300 flex items-center gap-2">
              Home
            </NavLink>
            <NavLink to="/about" className="text-white hover:text-gray-300 flex items-center gap-2">
              About
            </NavLink>
            <NavLink to="/mechanism" className="text-white hover:text-gray-300 flex items-center gap-2">
              Mechanism
            </NavLink>
            <NavLink to="/explore" className="text-white hover:text-gray-300 flex items-center gap-2">
              Explore
            </NavLink>
            <NavLink to="/faqs" className="text-white hover:text-gray-300 flex items-center gap-2">
              FAQs
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
