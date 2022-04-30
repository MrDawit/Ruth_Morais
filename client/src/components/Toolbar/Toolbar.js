import React from "react";
import DrawerToggleButton from "../DrawerToggleButton";
import { Link } from "react-router-dom";
// import { Link } from '../../../../node_modules/react';
import ScrollToTop from "../ScrollToTop/index.js";
import "./style.css";

function Toolbar(props) {
  return (
    <nav className="toolbar navbar" id="toolbar_navbar">
      {/* <nav className="toolbar_navigation"> */}
      <div className="toolbar_toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      {/* <div className="toolbar__logo"> */}

      <h2 id="h2Toolbar">RUTH MORAIS</h2>
      {/* </div> */}
      {/* <div className="spacer" /> */}

      <form id="navForm">
        <ScrollToTop />
        <Link id="navLink" to="/about">
          About + Connect
        </Link>

        <Link id="navLink" to="/resume">
          Resume
        </Link>

        <Link id="navLink" to="/">
          Select Work
        </Link>
      </form>
    </nav>
  );
}

export default Toolbar;
