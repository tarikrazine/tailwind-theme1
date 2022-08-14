import { useState } from "react";

import { helpers } from "../../../utils/styles";
import { close, logo, menu } from "../../../assets";
import { navLinks } from "../../../constants";
import { Navigation } from "../../Ui";

interface NavProps {}

const Nav = (props: NavProps) => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full py-6 flex justify-between items-center navbar">
      <img src={logo} alt="HooBank" className="w-[124px] h-[32px]" />
      <ul className="sm:flex flex-1 list-none justify-end items-center hidden">
        {navLinks.map((link, index) => (
          <Navigation
            key={link.id}
            link={link}
            index={index}
            direction="horizontal"
          />
        ))}
      </ul>
      <div className={`sm:hidden flex-1 flex justify-end items-center`}>
        <img
          src={toggle ? close : menu}
          alt="Menu"
          aria-label="Menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setToggle((prev) => !prev)}
        />
      </div>
      <div
        className={`${
          toggle ? "flex" : "hidden"
        } bg-black-gradient p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
      >
        <ul className="sm:hidden flex flex-col flex-1 list-none justify-center items-center">
          {navLinks.map((link, index) => (
            <Navigation
              key={link.id}
              link={link}
              index={index}
              direction="vertical"
            />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
