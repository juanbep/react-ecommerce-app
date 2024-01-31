import React from "react";
import { Link } from "react-router-dom";

const BrandLink = () => {
  return (
    <div className="flex flex-shrink-0 items-center">
      <Link to="/home">
        <img className="h-10 w-auto" src="/favicon_page.png" alt="SciFi-Logo" />
      </Link>
    </div>
  );
};

export default BrandLink;
