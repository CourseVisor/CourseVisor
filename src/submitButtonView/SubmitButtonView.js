import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import "./SubmitButtonView.scss";
import { withStyles, createMuiTheme, MuiThemeProvider, Link } from "@material-ui/core";

const StyledButton = withStyles({
  root: {
    backgroundColor: "#BD36EC",
    borderRadius: "20px",
    color: "white",
    margin: "20px",
    fontSize: "12px",
    textTransform: "none",
    fontWeight: "bold",
    width: "180px",
    height: "40px",
    boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.25)",
    "&:hover": {
      background: "#D88AF3"
    }
  }
})(Button);

class SubmitButtonView extends Component {
  //constructor(props){
  //  super(props);
  //}
  render() {
    return (
      <div className="SubmitButtonView">
        <StyledButton className="SubmitNew">Submit New Review</StyledButton>
      </div>
    );
  }
}
//SubmitButtonView.propTypes = {
//}

export default SubmitButtonView;
