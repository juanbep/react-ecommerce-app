import React from "react";
import { Link } from "react-router-dom";

const BrandLink = ({ classes }) => {
  return (
    <div>
      <Link className={`${classes}`} to="/">
        Sci-Fi
      </Link>
    </div>
  );
};

export default BrandLink;
