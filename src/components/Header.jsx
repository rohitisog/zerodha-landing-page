import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const navLinks = [
    { name: "Signup", link: "#" },
    { name: "About", link: "#" },
    { name: "Products", link: "#" },
    { name: "Pricing", link: "#" },
    { name: "Support", link: "#" },
  ];
  const [openToggle, setOpenToggle] = useState(false);
  const handleToggle = () => {
    setOpenToggle(!openToggle);
  };
  return (
    <>
      <div className="border-b p-6 border-b-neutral-50 shadow">
        <div className="flex justify-between xl:justify-around">
          <div>
            <img
              className="h-5 cursor-pointer"
              src="https://zerodha.com/static/images/logo.svg"
              alt=""
            />
          </div>
          <ul className="lg:flex justify-around w-1/2 hidden">
            {navLinks.map((link, index) => (
              <li className="cursor-pointer text-neutral-500" key={index}>
                {" "}
                {link.name}
              </li>
            ))}
            <Menu height={24} onClick={handleToggle} />
          </ul>
          <div className="lg:hidden" onClick={handleToggle}>
            {openToggle ? <X height={24} /> : <Menu height={24} />}
          </div>
        </div>
        <div className="">
          {openToggle && (
            <ul className="absolute lg:hidden top-18 left-0 flex bg-white flex-col items-center justify-center shadow w-full ">
              {navLinks.map((link, index) => (
                <li
                  className="cursor-pointer text-neutral-500 py-4"
                  key={index}
                >
                  {" "}
                  {link.name}
                </li>
              ))}{" "}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
