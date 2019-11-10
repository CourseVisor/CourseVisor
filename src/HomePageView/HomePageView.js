import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import {
  createMuiTheme,
  ThemeProvider,
  withStyles
} from "@material-ui/core/styles";

import "./HomePageView.scss";

const SubmitButton = withStyles({
  root: {
    "background-color": "#BD36EC",
    "border-radius": "20px",
    width: "180px",
    height: "40px",
    "vertical-align": "middle"
  },
  text: {
    color: "white",
    textTransform: "capitalize"
  }
})(Button);

class HomePageView extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="HomePageView">
        <h1 className="search-text">
          Search for a <span className="course">course</span> review
        </h1>
        <div>* insert SearchBarView here *</div>
        <div className="or-text">-- or --</div>
        <SubmitButton className="submit-button">Submit New Review</SubmitButton>
      </div>
    );
  }
}
HomePageView.propTypes = {};

export default HomePageView;
