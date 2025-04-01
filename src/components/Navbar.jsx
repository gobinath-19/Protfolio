import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div data-aos="fade-down"  className="fixed top-0 left-0 w-full z-50 sm:min-w-full">
      <div className="primary-color text-white flex justify-between items-center px-7 py-5 drop-shadow-lg">
        <h1 data-aos='fade-right' data-aos-delay="300" className="ml-[-10px] text-color font-bold md:ml-10 text-2xl md:text-4xl hover-port">Gobinath K</h1>

        {/* Desktop Navigation */}
        <nav className="md:block hidden">
          <ul className="flex gap-5 px-5 text-xl">
            <li className="hover-port"><a href="#hero">Home</a></li>
            <li className="hover-port"><a href="#project">Project</a></li>
            <li className="hover-port"><a href="#about">About</a></li>
            <li className="hover-port"><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        {/* Mobile Navigation (Toggle Menu) */}
        {toggleMenu && (
          <nav className="block md:hidden fixed top-20 w-full h-1/3 left-0">
            <ul className="flex flex-col items-center gap-5 px-5 text-xl primary-color py-2 border">
              <li><a href="#hero">Home</a></li>
              <li><a href="#project">Project</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        )}

        {/* Hamburger Button */}
        <button onClick={() => setToggleMenu(!toggleMenu)} className="block md:hidden">
          <Bars3Icon className="h-8 black" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
