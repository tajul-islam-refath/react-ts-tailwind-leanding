import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";

import { navLinks } from "../constants";
import { useState } from "react";

const Nav = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const toggleNavMenu = () => {
    setMobileNav(!mobileNav);
  };
  return (
    <header className="padding-x py-8 absolute z-10 w-full max-lg:sticky max-lg:top-0 max-lg:z-30 max-lg:bg-white">
      <nav className="flex justify-between items-center max-container">
        <a href="">
          <img
            src={headerLogo}
            alt="Logo"
            width={129}
            height={29}
            className="m-0 w-[129px] h-[29px]"
          />
        </a>
        <ul
          className={`flex-1 flex justify-center items-center gap-16 max-lg:mobile-nav  transition-all ${
            mobileNav ? "max-lg:ml-[0px]" : "max-lg:-ml-[200px]"
          }`}>
          {navLinks.map((item) => (
            <li key={item.label} onClick={toggleNavMenu}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray cursor-pointer">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block" onClick={toggleNavMenu}>
          <img src={hamburger} alt="hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
