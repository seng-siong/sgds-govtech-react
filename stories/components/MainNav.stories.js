import React, { useState } from "react";
// import styled from "styled-components";
// import { action } from "@storybook/addon-actions";
// import { formatCode } from "../lib/utils";
// import SyntaxHighlighter from "../lib/SyntaxHighlighter";
import { 
  NavbarContainer,
  NavbarBrand,
  NavbarMenu,
  NavbarStart,
  NavbarEnd
 } from "../../src/components/Navbar";
import { Page } from "../shared-styles";

// const code1 = `
// import { MainNav } from 'sgds-govtech-react' 

// <MainNav
// brand={this.mainNavItems.brand}
// links={this.mainNavItems.links}
// selectItem={this.selectMenuItem}
// />

// `;
// const code2 = `
// <MainNav
// brand={this.mainNavItems.brand}
// links={this.mainNavItems.links}
// selectItem={this.selectMenuItem}
// displaySearch={true}
// />
// `;

const MainNavStories = () => {
  const [showNavbarMenu, setShowNavbarMenu] = useState('');
  return (
    <Page>
      <NavbarContainer>
          <NavbarBrand>
            <a href className="sgds-navbar-item has-text-weight-semibold">
              <h1>Main brand</h1>
            </a>
            <div
              className={`sgds-navbar-burger burger ${
                showNavbarMenu ? "is-active" : null
              }`}
              onClick={() => setShowNavbarMenu(!showNavbarMenu)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </NavbarBrand>
          <NavbarMenu isActive={showNavbarMenu}>
            <NavbarStart>
              <a href className="sgds-navbar-item is-uppercase has-text-weight-semibold">
                Category ABA
              </a>
              <div className="sgds-navbar-item has-dropdown is-hoverable">
                <a href className="sgds-navbar-link is-uppercase has-text-weight-semibold">
                  Who we are
                </a>
                <div className="sgds-navbar-dropdown">
                  <a href className="sgds-navbar-item has-text-weight-semibold">
                    Sub Link 1
                  </a>
                  <a href className="sgds-navbar-item has-text-weight-semibold">
                    Sub Link 2
                  </a>
                  <a href className="sgds-navbar-item has-text-weight-semibold">
                    Sub Link 3
                  </a>
                </div>
              </div>
            </NavbarStart>
            <NavbarEnd>
              <a href className="sgds-navbar-item is-uppercase has-text-weight-semibold">
                Category ACD
              </a>
              <a href className="sgds-navbar-item is-uppercase has-text-weight-semibold">
                Category ACD
              </a>
              <a href className="sgds-navbar-item is-uppercase has-text-weight-semibold">
                Category ACD
              </a>
            </NavbarEnd>
          </NavbarMenu>
        </NavbarContainer>
    </Page>
  );
};

export default MainNavStories;
