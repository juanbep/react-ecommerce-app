import React from "react";

import BrandLink from "../BrandLink";
import HeartIcon from "../Icons/HeartIcon";
import CartIcon from "../Icons/CartIcon";
import NavLinks from "../NavLinks";

//import './Navbar.css';
const BrandLinkStyle = "font-Workbench";

const Navbar = () => {
  return (
    <nav className="container mx-auto flex justify-between py-3">
      <BrandLink classes={BrandLinkStyle} />
      <div className="flex">
        <HeartIcon />
        <CartIcon />
      </div>
    </nav>
  );
};

export default Navbar;
