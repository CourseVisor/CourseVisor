import React, { Component } from "react";
import PropTypes from "prop-types";
import "./SignInView.scss";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/core/styles";

import { NavBarView } from "../NavBarView/NavBarView.js";

import { Link, Redirect } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";

const LogInButton = withStyles({
  text: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: "12px",
    // lineHeight: "14px",
    display: "inline-block",
    alignItems: "center",
    textAlign: "center",
    textTransform: "capitalize",
    color: "#FFFFFF",

    width: "11.25rem",
    height: "2.5rem",
    // top: "7rem",

    backgroundColor: "#BD36EC",
    boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "20px"
  },

  root: {
    marginTop: "3rem",
    position: "relative",
    justifyContent: "center"
  }
})(Button);

const SignUpButton = withStyles({
  text: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "12px",
    lineHeight: "14px",
    display: "inline",
    alignItems: "center",
    textAlign: "center",
    textTransform: "capitalize",

    color: "#FAB124"
  }
})(Button);

const LogInContainer = withStyles({
  root: {
    width: "50%",
    textAlign: "center"
  }
})(Container);

const TextBox = withStyles({
  root: {
    marginTop: "1rem",
    border: "5px solid #F3D5FE",
    // overflow: "hidden",
    borderRadius: 4,
    backgroundColor: "#FFFFFF"
  },
  input: {
    backgroundColor: "white"
  }
})(TextField);

const PurpleCheckbox = withStyles({
  root: {
    color: "#BD36EC",
    "&$checked": {
      color: "#BD36EC",
      backgroundColor: "#FFFFFF"
    },
    float: "left"
  },
  checked: {}
})(Checkbox);

export class SignInView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errorMessage: "",
      submitted: false
    };
  }

  updateEmail = event => {
    this.setState({ email: event.target.value });
  };

  updatePassword = event => {
    this.setState({ password: event.target.value });
  };

  handleSignIn = event => {
    event.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.setState({ errorMessage: "", submitted: true }))
      .catch(async err => {
        if (err.message === 'The password is invalid or the user does not have a password.') {
          this.setState({ errorMessage: 'Incorrect email or password.' });
        } else {
          this.setState({ errorMessage: err.message });
        }
      });
  };

  render() {
    if (!this.state.errorMessage && this.state.submitted) {
      return <Redirect push to="/" />;
    }
    return (
      <div className="SignInView">
        <LogInContainer>
          <div className="login">Log In</div>
          <div className="goldBar"></div>
          <div>
            <TextBox
              name="email"
              variant="filled"
              label="Email"
              className="usernameBox"
              InputProps={{ disableUnderline: true }}
              onChange={this.updateEmail}
            ></TextBox>
          </div>
          <div>
            <TextBox
              name="password"
              variant="filled"
              label="Password"
              type="password"
              className="passwordBox"
              InputProps={{ disableUnderline: true }}
              onChange={this.updatePassword}
            ></TextBox>
          </div>
          <div className="checkbox">
            <PurpleCheckbox></PurpleCheckbox>
            <p className="keepLog">Keep me logged in</p>
          </div>
          <LogInButton onClick={this.handleSignIn}>Log In</LogInButton>
          {this.state.errorMessage && <div><p>{this.state.errorMessage}</p></div>}
          <div className="notMember">
            <p className="question">Not a member?</p>
            <Link to="/signup">
              <SignUpButton onClick={this.handleSignIn}>Sign up</SignUpButton>
            </Link>
          </div>
        </LogInContainer>
      </div>
    );
  }
}

export default SignInView;
