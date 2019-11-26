import React, { Component } from "react";
import PropTypes from "prop-types";
import "./NavBarView.scss";
import logo from "../logo.png";

import { BrowserRouter as Router, Route, Link, NavLink, Switch } from "react-router-dom";

import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import HomePageView from "../HomePageView/HomePageView";
import SignInView from "../SignInView/SignInView";
import AccountCreationView from "../AccountCreationView/AccountCreationView";
import firebase from "firebase/app";
import "firebase/auth";
import { Grid, Container } from "@material-ui/core";
import { spacing } from '@material-ui/system';

const SignInButton = withStyles({
  text: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: "12px",
    lineHeight: "14px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    textTransform: "capitalize",
    color: "#FFFFFF",

    width: "90px",
    height: "30px",
    float: "right",
    top: "20px",

    backgroundColor: "#BD36EC",
    borderRadius: "20px"
  }
})(Button);

const SignUpButton = withStyles({
  text: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: "12px",
    lineHeight: "14px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    textTransform: "capitalize",
    color: "#FFFFFF",

    width: "90px",
    height: "30px",

    float: "right",
    // paddingRight: '20px',

    top: "20px",

    backgroundColor: "#BD36EC",
    borderRadius: "20px"
  },

  root: {
    marginRight: '20px',
  }
  
})(Button);

const SignOutButton = withStyles({
  text: {
    // position: "absolute",
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: "12px",
    lineHeight: "14px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    textTransform: "capitalize",
    color: "#FFFFFF",

    width: "90px",
    height: "30px",
    // right: "7%",
    float: "right",

    top: "20px",

    backgroundColor: "#BD36EC",
    borderRadius: "20px"
  }
})(Button);

const NavContainer = withStyles({
  root: {
    width: "60%"
  }
});

export class NavBarView extends Component {
  handleSignOut() {
    firebase
      .auth()
      .signOut()
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    if (this.props.currentUser) {

      console.log(this.props.currentUser);
      return (
        <nav className="navBarView">
          <Container>
            <NavLink exact to="/">
              <img className="logo" src={logo} alt="CourseVisor logo"></img>
            </NavLink>
            <div className="nav-container">
              <SignOutButton onClick={this.handleSignOut}>Sign Out</SignOutButton>
              <div className="username">Hi, {this.props.currentUser.displayName}</div>
            </div>
          </Container>
        </nav>
      );
    } else {
      return (
        <nav className="navBarView">
          <Container>
            <NavLink exact to="/">
              <img className="logo" src={logo} alt="CourseVisor logo"></img>
            </NavLink>
            <NavLink to="/signin">
              <SignInButton>Sign In</SignInButton>
            </NavLink>
            <NavLink to="/signup">
              <SignUpButton>Sign Up</SignUpButton>
            </NavLink>
          </Container>
        </nav>
      );
    }
  }
}

export default NavBarView;
