import React, { Component } from "react";
import PropTypes from "prop-types";
import "./NewReviewView.scss";
import { Container, TextField, withStyles } from "@material-ui/core";

const SubmitInput = withStyles({
  root: {
    width: "60%",
    "vertical-align": "middle"
  }
})(TextField);
class NewReviewView extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="NewReviewView">
        <Container>
          <h2>Submit New Review</h2>
          <form className="submit-form">
            <div className="submit-input">
              <SubmitInput required label="Course" variant="outlined" />
            </div>
            <div className="submit-input">
              <SubmitInput required label="Instructor" variant="outlined" />
            </div>
            <div className="submit-input">
              <SubmitInput
                multiline
                rows="4"
                required
                label="Comments"
                variant="outlined"
                inputProps={{ maxLength: 3000 }}
              />
            </div>
          </form>
        </Container>
      </div>
    );
  }
}
NewReviewView.propTypes = {};

export default NewReviewView;
