import React, { Component } from "react";
import "./App.css";
import firebase from "firebase/app";

import { BrowserRouter as Router, Route, Link, NavLink, Switch } from "react-router-dom";

import { NavBarView } from "./NavBarView/NavBarView.js";
import NewReviewView from "./NewReviewView/NewReviewView";
import HomePageView from "./HomePageView/HomePageView";
import { SignInView } from "./SignInView/SignInView.js";
import AccountCreationView from "./AccountCreationView/AccountCreationView";
import CourseSearchView from "./CourseSearchView/CourseSearchView";
import OverAllRatingView from "./OverAllRatingView/OverAllRatingView";
import InstructorView from "./InstructorView/InstructorView";
import ReviewView from "./ReviewView/ReviewView";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    this.authUnRegFunc = firebase.auth().onAuthStateChanged(async user => {
      if (user) {
        console.log("logged in");
        console.log(user);
        await this.setState({
          user: user
        });
      } else {
        console.log("logged out");
        await this.setState({
          user: null
        });
      }
    });
  }

  componentWillUnmount() {
    this.authUnRegFunc = null;
  }

  updateUser = (user) => {
    this.setState({ user, user});
  }

  render() {
    return (
      <Router>
        <NavBarView currentUser={this.state.user} />
        <Route exact path="/" component={HomePageView} />
        <Route path="/signin" component={SignInView} />
        <Route path="/signup" render={(props) => <AccountCreationView {...props} updateUser={this.updateUser} />} />
        <Route path="/new-review/:courseName?/:instructor?" component={NewReviewView} />
        <Route path="/review/:courseName/:courseTitle/:instructor" component={ReviewView} />
        <Route path="/results/:query" component={CourseSearchView} />
        <Route path="/course/:courseName" component={InstructorView} />
        <Route path="/overall-review" component={OverAllRatingView} />
      </Router>
    );
  }
}

export default App;