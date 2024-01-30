import React from "react";

import BrandLink from "../BrandLink";
import HeartIcon from "../Icons/HeartIcon";
import CartIcon from "../Icons/CartIcon";
import NavLinks from "../NavLinks";

//import './Navbar.css';

const Navbar = () => {
  return (
    //<BrandLink/>

    <div>
      <NavLinks />
      <div className="flex">
        <HeartIcon />
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;
