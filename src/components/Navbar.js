import React from "react";
import PropTypes from 'prop-types';

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

export const NavbarDropdownContainer = props => {
  return (
    <div className="sgds-navbar-item has-dropdown is-hoverable">
      <a href={props.link} className="sgds-navbar-link has-text-weight-semibold is-uppercase">{props.dropdownTitle}</a>
      <div className="sgds-navbar-dropdown">
        {props.children}
      </div>
    </div>
  );
};

NavbarDropdownContainer.propType = {
  dropdownTitle: PropTypes.string,
  link: PropTypes.string
}

NavbarDropdownContainer.defaultProps = {
  dropdownTitle: 'hello',
  link: ''
}
