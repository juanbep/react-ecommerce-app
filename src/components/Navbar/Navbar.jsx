import React from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";

import BrandLink from "../BrandLink";
import HeartIcon from "../Icons/HeartIcon";
import CartIcon from "../Icons/CartIcon";
import NavLinks from "../NavLinks";

import "./Navbar.css";
import ProfileDropdown from "../ProfileDropdown/ProfileDropDown";

const Navbar = () => {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button>
                  
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <BrandLink/>
                <div className="hidden sm:ml-6 my-1 sm:block">
                  <div className="flex space-x-4">
                    <NavLinks />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
