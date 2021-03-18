import React from "react";
import { Link } from "gatsby";

import logoB from "../../assets/image/logo_lidergestion-200.svg";

const Logo = ({ className = "", ...rest }) => {
  return (
    <Link to="/" className={`${className}`} {...rest}>
      {/* <!-- light version logo (logo must be black)--> */}
      <img src={logoB} alt="" className="light-version-logo" />
      {/* <!-- Dark version logo (logo must be White)--> */}
      <img src={logoB} alt="" className="dark-version-logo" />
    </Link>
  );
};

export default Logo;
