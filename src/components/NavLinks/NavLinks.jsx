import React from "react";
import { NavLink } from "react-router-dom";

const navigation = [
  { name: "Sci-FI", path: "#", current: true },
  { name: "Home", path: "#", current: false },
  { name: "Search", path: "#", current: false },
  { name: "About", path: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NavLinks = () => {
  return (
    <>
      {navigation.map((item) => (
        <NavLink
          key={item.name}
          path={item.path}
          className={classNames(
            item.current
              ? "bg-gray-900 text-white"
              : "text-gray-300 hover:bg-gray-700 hover:text-white",
            "rounded-md px-3 py-2 text-sm font-medium"
          )}
          aria-current={item.current ? "page" : undefined}
        >
          {item.name}
        </NavLink> //probar con href
      ))}
    </>
  );
};

export default NavLinks;
