import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import SubmitButtonView from "../SubmitButtonView/SubmitButtonView.js";
import "./HomePageView.scss";
import { Link } from "react-router-dom";

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
        <Link to="/new-review">
          <SubmitButtonView />
        </Link>
      </div>
    );
  }
}
HomePageView.propTypes = {};

export default HomePageView;
