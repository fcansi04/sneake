import headerLogo from "../assets/images/header-logo.svg";

import { navLinks } from "../constants";

const Nav = () => {
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
        <button className="lg:hidden flex justify-center items-center  ">
          <span className="material-symbols-rounded text-[34px] text-slate-gray  ">
            menu
          </span>
        </button>
      </nav>
    </header>
  );
};

export default Nav;
