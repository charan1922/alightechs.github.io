import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";

const NavLink = ({ className, onClick, destination, current }) => {
  const pathDest = destination.toLowerCase();

  return (
    <Link to={pathDest} className={`${className}`} onClick={onClick} activeClassName="active" >
      {destination}
    </Link>
  );
};

NavLink.propTypes = {
  className: PropTypes.string,
  current: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default NavLink;