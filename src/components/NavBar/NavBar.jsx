import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Animation variants for the mobile menu
  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-20 ">
      <div className="container mx-auto flex justify-between items-center h-16 px-6 md:max-w-6xl">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="https://cpzhalbbnvwmmevzzacy.supabase.co/storage/v1/object/sign/logo/test%20logo.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJsb2dvL3Rlc3QgbG9nby5wbmciLCJpYXQiOjE3NDIxMDg4NjEsImV4cCI6MTg5OTc4ODg2MX0._-xUFRYvI-_2n4aFqo5fEY95MkgdVxfI5bR2cbL5nb0"
            alt="Logo"
            className="h-12"
          />
        </div>

        {/* Desktop Navigation (Centered) */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 max-w-7xl w-full justify-center items-center space-x-6">
          <a
            href="#"
            className="text-black text-sm font-normal hover:scale-110 transition duration-300"
          >
            Vote now
          </a>
          <a
            href="#"
            className="text-black text-sm font-normal hover:scale-110 transition duration-300"
          >
            For Handler
          </a>
          <a
            href="#"
            className="text-black text-sm font-normal hover:scale-110 transition duration-300"
          >
            Blog
          </a>
          <a
            href="#"
            className="text-black text-sm font-normal hover:scale-110 transition duration-300"
          >
            Contact us
          </a>
        </div>

        {/* Login Button (Right Corner) */}
        <div className="hidden  md:flex ml-auto">
          <a
            href="#"
            className="bg-white text-black shadow-lg outline mx-3 px-5 py-2 rounded-md hover:translate-x-5 transition duration-300"
          >
            Login
          </a>
          <a
            href="#"
            className="bg-blue-500 text-white mx-3 px-5 py-2 rounded-md hover:translate-x-5 transition duration-300"
          >
            Sign up
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) with Animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-white shadow-md rounded-lg mt-2 w-full"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center space-y-4 py-4">
              <a
                href="#"
                className="text-black text-lg font-medium hover:scale-110 transition duration-300"
              >
                Home
              </a>
              <a
                href="#"
                className="text-black text-lg font-medium hover:scale-110 transition duration-300"
              >
                About
              </a>
              <a
                href="#"
                className="text-black text-lg font-medium hover:scale-110 transition duration-300"
              >
                Contact
              </a>
              <a
                href="#"
                className="text-black text-lg font-medium hover:scale-110 transition duration-300"
              >
                Vote
              </a>
              <a
                href="#"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Login
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
