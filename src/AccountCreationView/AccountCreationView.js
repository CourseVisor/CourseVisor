import React, { Component } from "react";
import PropTypes from "prop-types";
import "./AccountCreationView.scss";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/core/styles";

import { Link } from "react-router-dom";

import { NavBarView } from "../NavBarView/NavBarView.js";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const AccountCreationContainer = withStyles({
  root: {
    width: "50%",
    textAlign: "center"
  }
})(Container);

const TextBox = withStyles({
  root: {
    marginTop: "1rem",
    border: "2px solid #F3D5FE",
    // overflow: "hidden",
    borderRadius: 4,
    backgroundColor: "#FFFFFF",

    position: "relative",
    height: "auto"
  },
  input: {
    backgroundColor: "white"
  }
})(TextField);

const SignUpButton = withStyles({
  text: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: "12px",
    lineHeight: "14px",
    display: "inline-block",
    alignItems: "center",
    textAlign: "center",
    textTransform: "capitalize",
    color: "#FFFFFF",

    width: "11.25rem",
    height: "2.5rem",
    marginTop: "2rem",

    backgroundColor: "#BD36EC",
    boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "20px"
  },

  root: {
    position: "relative",
    justifyContent: "center"
  }
})(Button);

const LogInButton = withStyles({
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

export class AccountCreationView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      passwordConf: "",
      username: "",
      error: ""
    };
  }

  updateEmail = event => {
    this.setState({ email: event.target.value });
  };

  updateUserName = event => {
    this.setState({ username: event.target.value });
  };

  updatePassword = event => {
    this.setState({ password: event.target.value });
  };

  updatePasswordConf = event => {
    this.setState({ passwordConf: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    this.setState({ error: "" });
    if (this.state.email && this.state.password && this.state.username) {
      if (this.state.username.includes(" ")) {
        this.setState({ error: "Username cannot contain spaces."});
        return;
      }
      if (this.state.password !== this.state.passwordConf) {
        this.setState({ error: "Passwords do not match" });
      } else {
        try {
          const usernames = await firebase.database().ref("usernames").once("value");
          if (Object.values(usernames.val()).includes(this.state.username)) {
            this.setState({ error: "Username already exists" });
          } else {
            const newUser = await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);
            console.log(newUser);
            await newUser.user.updateProfile({ displayName: this.state.username });
            console.log(newUser.user);
            firebase.database().ref("usernames").child(newUser.user.uid).set(this.state.username)
            this.props.updateUser(newUser.user)
            this.props.history.push("/");
          }
        } catch (error) {
          if (error.message === 'The email address is already in use by another account.') {
            this.setState({ error: 'Account with this email already exists.' });
          } else {
            this.setState({ error: error.message });
          }
          console.log(error);
        }
      }
    } else {
      this.setState({ error: "Please fill out all required fields" });
    }
  };
  render() {
    return (
      <div className="accountCreationView">
        <AccountCreationContainer>
          <div className="header">
            <span className="title">Sign up for </span>
            <span className="name">CourseVisor</span>
          </div>
          <div className="goldBar"></div>
          <form>
            <TextBox
              onChange={this.updateUserName}
              variant="filled"
              label="Create a username"
              className="createUsernameBox"
              InputProps={{ disableUnderline: true }}
            ></TextBox>
            <TextBox
              onChange={this.updateEmail}
              variant="filled"
              label="Email"
              className="emailBox"
              InputProps={{ disableUnderline: true }}
            ></TextBox>
            <TextBox
              onChange={this.updatePassword}
              variant="filled"
              label="Password"
              type='password'
              className="createPasswordBox"
              InputProps={{ disableUnderline: true }}
            ></TextBox>
            <TextBox
              onChange={this.updatePasswordConf}
              variant="filled"
              label="Confirm Password"
              type='password'
              className="confirmPasswordBox"
              InputProps={{ disableUnderline: true }}
            ></TextBox>
            {this.state.error && <div className="error">{this.state.error}</div>}
            <SignUpButton type="submit" onClick={this.handleSubmit}>Sign Up</SignUpButton>
          </form>
          <div className="alreadyMember">
            <p className="question">Already a member?</p>
            <Link to="/signin">
              <LogInButton>Log In</LogInButton>
            </Link>
          </div>
        </AccountCreationContainer>
      </div>
    );
  }
}
AccountCreationView.propTypes = {};

export default AccountCreationView;
