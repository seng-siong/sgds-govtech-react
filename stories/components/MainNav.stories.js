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
  NavbarEnd,
  NavbarDropdownContainer
 } from "../../src/components/Navbar";

import {
  Page,
  Title,
  ParagraphHeader,
  ParagraphSubHeader
} from "../shared-styles";

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
      <Title>
        <h3 className="has-text-white has-text-weight-semibold">Main Navigation</h3>
      </Title>
      
      <section className="sgds-section">
      <ParagraphHeader>
        All .gov.sg informational services shall adopt a Global Primary Navigation Panel across all pages
      </ParagraphHeader>

      <hr className="margin--bottom--lg margin--top--lg"></hr>

      <ParagraphHeader>Main Navigation example</ParagraphHeader>
      <NavbarContainer>
          <NavbarBrand>
            <a href className="sgds-navbar-item has-text-weight-semibold">
              <img src="https://dev.designsystem.gov.sg/assets/img/logo_sgds.png" alt=""/>
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
              <NavbarDropdownContainer>
                  <a href className="sgds-navbar-item has-text-weight-semibold">
                    Sub Link 1
                  </a>
                  <a href className="sgds-navbar-item has-text-weight-semibold">
                    Sub Link 2
                  </a>
                  <a href className="sgds-navbar-item has-text-weight-semibold">
                    Sub Link 3
                  </a>
              </ NavbarDropdownContainer>
              <a href className="sgds-navbar-item is-uppercase has-text-weight-semibold is-tab">
                Category ABA
              </a>
            </NavbarStart>
            <NavbarEnd>
              <a href className="sgds-navbar-item is-uppercase has-text-weight-semibold is-tab">
                Category ACD
              </a>
              <a href className="sgds-navbar-item is-uppercase has-text-weight-semibold is-tab">
                Category ACD
              </a>
              <a href className="sgds-navbar-item is-uppercase has-text-weight-semibold is-tab">
                Category ACD
              </a>
            </NavbarEnd>
          </NavbarMenu>
        </NavbarContainer>
        </section>
    </Page>
  );
};

export default MainNavStories;
