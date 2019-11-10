import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from '@material-ui/core/Button';
import "./HomePageView.scss";

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
        <div className="or-text">- or -</div>
        <div><Button className="submit-button">Submit New Review</Button></div>
      </div>
    );
  }
}
HomePageView.propTypes = {};

export default HomePageView;
