import React from "react";

// navbar.js
export const NavbarBrand = props => {
  return <div className="sgds-navbar-brand">{props.children}</div>;
};

export const NavbarMenu = props => {
  const isActive = props.isActive || false;
  return (
    <div className={`sgds-navbar-menu ${isActive ? "is-active" : null}`}>
      {props.children}
    </div>
  );
};

export const NavbarStart = props => {
  return <div className="sgds-navbar-start">{props.children}</div>;
};

export const NavbarEnd = props => {
  return <div className="sgds-navbar-end">{props.children}</div>;
};

export const NavbarContainer = props => {
  return (
    <nav className="sgds-navbar" role="navigation">
      {props.children}
    </nav>
  );
};
