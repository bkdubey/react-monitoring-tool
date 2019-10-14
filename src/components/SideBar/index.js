import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Collapse } from "react-bootstrap";
import UserInfo from "./UserInfo";
import Nav from "./Nav";
import backgroundImage from "assets/images/sidebar-5.jpg";

class SideBar extends Component {
  state = {};

  render() {
    let {
      location,
      backgroundColor,
      enableBackgroundImage,
      backgroundImage
    } = this.props;

    return (
      <div
        className="sidebar"
        data-color={backgroundColor}
        data-image={backgroundImage}
      >
        <div className="brand">
          <a href="http://jslancer.com" className="brand-name">
            {/* <img
              src={
                "https://www.societegenerale.com/sites/default/files/styles/newsroom_grille/public/logo-societe-generale11_12.jpg?itok=HAPSB8u1"
              }
              alt="logo"
              className="logo"
            /> */}
            <img
              src={
                "https://www.societegenerale.com/sites/default/files/2018/societe-generale-logo.png"
              }
              alt="logo"
              className="logo"
            />
          </a>
        </div>

        <div className="sidebar-wrapper">
          <UserInfo />
          <div className="line"></div>
          <Nav />
        </div>
        <div
          className="sidebar-background"
          style={{
            backgroundImage: enableBackgroundImage
              ? "url(" + backgroundImage + ")"
              : null
          }}
        ></div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  enableBackgroundImage: state.ThemeOptions.enableBackgroundImage,
  backgroundColor: state.ThemeOptions.backgroundColor,
  backgroundImage: state.ThemeOptions.backgroundImage
});

export default withRouter(connect(mapStateToProps)(SideBar));
