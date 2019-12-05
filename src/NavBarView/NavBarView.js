import React, { Component } from "react";
import PropTypes from "prop-types";
import "./NavBarView.scss";
import logo from "../logo.png";

import { BrowserRouter as Link, NavLink} from "react-router-dom";

import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import firebase from "firebase/app";
import "firebase/auth";
import { Grid, Container } from "@material-ui/core";
import { spacing } from '@material-ui/system';

const SignInButton = withStyles({
  text: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: "10px",
    lineHeight: "14px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    textTransform: "capitalize",
    color: "#FFFFFF",

    width: "60px",
    height: "20px",
    float: "right",

    backgroundColor: "#BD36EC",
    borderRadius: "20px",

    ['@media (min-width:400px)']: {
      width: "75px",
      height: "25px",

      fontSize: "11px",
    },

    ['@media (min-width:768px)']: {
      width: "90px",
      height: "30px",

      fontSize: "12px",
    },
  },
  root: {
    marginTop: "1.25rem",

    ['@media (min-width:400px)']: {
      marginTop: '1.1rem',
    },

    ['@media (min-width:768px)']: {
      marginTop: '1rem',
    },
  }
})(Button);

const SignUpButton = withStyles({  
  text: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: "10px",
    lineHeight: "14px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    textTransform: "capitalize",
    color: "#FFFFFF",

    width: "60px",
    height: "20px",

    float: "right",


    backgroundColor: "#BD36EC",
    borderRadius: "20px",

    ['@media (min-width:400px)']: {
      width: "75px",
      height: "25px",

      fontSize: "11px",
    },

    ['@media (min-width:768px)']: {
      width: "90px",
      height: "30px",

      fontSize: "12px",
    },
  },

  root: {
    marginTop: "1.25rem",
    marginRight: ".5rem",

    ['@media (min-width:400px)']: {
      marginTop: '1.1rem',
      marginRight: '.75rem',
    },

    ['@media (min-width:768px)']: {
      marginTop: '1rem',
      marginRight: '1rem',
    },
  }
  
})(Button);

const SignOutButton = withStyles({
  text: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: "10px",
    lineHeight: "14px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    textTransform: "capitalize",
    color: "#FFFFFF",

    width: "60px",
    height: "20px",
    float: "right",

    backgroundColor: "#BD36EC",
    borderRadius: "20px",

    ['@media (min-width:400px)']: {
      width: "75px",
      height: "25px",

      fontSize: "11px",
    },

    ['@media (min-width:768px)']: {
      width: "90px",
      height: "30px",

      fontSize: "12px",
    },
  },
  root: {
    marginTop: ".25rem",

    ['@media (min-width:400px)']: {
      marginTop: '0rem',

    },
  }
})(Button);

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
    if (this.props.currentUser && this.props.currentUser.displayName) {

      return (
        <nav className="navBarView">
          <Container>
            <NavLink exact to="/">
              <img className="logo" src={logo} alt="CourseVisor logo"></img>
            </NavLink>
            <div className="nav-container-right">
              <div className="head-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="10" r="10" fill="white" />
                  <circle cx="10" cy="6" r="3" fill="#42005A" />
                  <path d="M10 17.3C7.5 17.3 5.29 16.02 4 14.08C4.03 12.09 8 11 10 11C11.99 11 15.97 12.09 16 14.08C14.71 16.02 12.5 17.3 10 17.3Z" fill="#42005A" />
                </svg>
              </div>

              <div className="username">Hi, {this.props.currentUser.displayName}</div>
              <NavLink exact to='/'>
                <SignOutButton className="sign-out-button" onClick={this.handleSignOut}>Sign Out</SignOutButton>
              </NavLink>
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
