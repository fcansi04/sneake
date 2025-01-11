import { useState } from "react";
import headerLogo from "../assets/images/header-logo.svg";

import { navLinks } from "../constants";

const Nav = () => {
  const [state, setState] = useState(false);
  const showMenu = () => {
    setState(true);
  };
  const hideMenu = () => {
    setState(false);
  };

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={139} />
        </a>
        <ul className="flex-1 flex justify-end items-center gap-16 max-lg:hidden w-full   h-10 bg-white pr-8">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                className="font-montserrat text-lg text-slate-gray"
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div
          onMouseEnter={showMenu}
          onMouseLeave={hideMenu}
          className=" flex flex-col h-[25rem] w-[10rem] absolute top-10 right-5 "
        >
          <button className="lg:hidden flex justify-center items-start  ">
            <span className="material-symbols-rounded text-[34px] text-slate-gray ">
              menu
            </span>
          </button>
          <ul
            className={`${
              state == false ? "hidden" : ""
            } flex flex-col h-30 absolute right-0 top-14 lg:hidden justify-start`}
          >
            {navLinks.map((item) => {
              return (
                <li key={item.label} className="mb-4">
                  <a
                    className="font-montserrat text-lg text-slate-gray"
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
