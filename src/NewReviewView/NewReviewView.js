import React, { Component } from "react";
import PropTypes from "prop-types";
import "./NewReviewView.scss";
import {
  Container,
  TextField,
  withStyles,
  Tooltip,
  IconButton,
  Grid,
  Button
} from "@material-ui/core";
import { Redirect, Link } from "react-router-dom";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";
import StarRatings from "react-star-ratings";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const SubmitInput = withStyles({
  root: {
    width: "100%",
    "vertical-align": "middle"
  }
})(TextField);

const ReviewContainer = withStyles({
  root: {
    ['@media (min-width:780px)']: {
      width: "60%"
    }
  }
})(Container);

const CancelButton = withStyles({
  root: {
    "background-color": "transparent",
    "border-radius": "20px",
    display: "inline-block",
    "text-transform": "capitalize",
    "border-color": "#42005a",
    width: "90px",
    height: "40px",
    "vertical-align": "middle",
    float: "left"
  },
  text: {
    color: "#42005a",
    textTransform: "capitalize"
  }
})(Button);

const SubmitButton = withStyles({
  root: {
    "justify-content": "flex-end",
    display: "inline-block",
    "background-color": "#BD36EC",
    "border-radius": "20px",
    width: "90px",
    height: "40px",
    "vertical-align": "middle",
    float: "right"
  },
  text: {
    color: "white",
    textTransform: "capitalize"
  }
})(Button);

class NewReviewView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      course: "",
      instructor: "",
      workloadRating: 0,
      gradingRating: 0,
      instructorRating: 0,
      comments: "",
      clicked: false,
      validate: null
    };
  }
  updateCourse = event => {
    this.setState({ course: event.target.value });
  };
  updateInstructor = event => {
    this.setState({ instructor: event.target.value });
  };
  changeWorkloadRating = newRating => {
    this.setState({
      workloadRating: newRating
    });
  };
  changeGradingRating = newRating => {
    this.setState({
      gradingRating: newRating
    });
  };
  changeInstructorRating = newRating => {
    this.setState({
      instructorRating: newRating
    });
  };
  updateComments = event => {
    this.setState({
      comments: event.target.value
    });
  };
  validateForm = async () => {
    this.setState({ clicked: true });
    const condition =
      this.state.workloadRating === 0 ||
      this.state.gradingRating === 0 ||
      this.state.instructorRating === 0 ||
      !this.state.course ||
      !this.state.instructor;
    await this.setState({
      validate: condition ? false : true
    });
    if (this.state.validate) {
      this.addToFirebase();
    }
  };
  addToFirebase = () => {
    const prefix = this.state.course.toUpperCase().split(" ")[0];
    const number = this.state.course.toUpperCase().split(" ")[1];
    const instructor = this.state.instructor.toUpperCase();
    const instructorReview = {
      ratingWorkload: this.state.workloadRating,
      ratingGrading: this.state.gradingRating,
      ratingInstructor: this.state.instructorRating,
      comment: this.state.comments,
      username: this.props.currentUser.displayName
    };
    firebase
      .database()
      .ref(`courseTeacherReview/${prefix}/${number}/instructors/${instructor}/reviews`)
      .push(instructorReview);
  };
  render() {
    if (!this.props.currentUser) {
      return <Redirect push to="/signin" />;
    }
    return (
      <div className="NewReviewView">
        <ReviewContainer>
          <h2 className="submit-new-review">Submit New Review</h2>
          <form className="submit-form">
            <div className="submit-input">
              <SubmitInput
                required
                label="Course"
                placeholder="Please enter the course prefix and code, e.g. INFO 442"
                variant="outlined"
                onChange={this.updateCourse}
              />
            </div>
            <div className="submit-input">
              <SubmitInput
                required
                label="Instructor"
                placeholder="Please enter the instructor's full name"
                variant="outlined"
                onChange={this.updateInstructor}
              />
            </div>
            <div className="ratings-field">
              <p className="ratings">Ratings *</p>
              <div className="star-ratings">
                <Grid
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                >
                  <Grid item xs={2}>
                    <span className="rating-header">Workload</span>
                  </Grid>
                  <Grid item xs={10}>
                    <Tooltip title="The workload of this course is rated from 1 star to 5 stars. 1 represents the most work and 5 represents minimal work">
                      <IconButton aria-label="help">
                        <HelpOutlineOutlinedIcon />
                      </IconButton>
                    </Tooltip>
                    <StarRatings
                      rating={this.state.workloadRating}
                      starDimension="2rem"
                      starRatedColor="#7800A2"
                      starHoverColor="#D88AF3"
                      changeRating={this.changeWorkloadRating}
                      numberOfStars={5}
                      name="rating"
                    />
                  </Grid>
                </Grid>
              </div>
              <div className="star-ratings">
                <Grid
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                >
                  <Grid item xs={2}>
                    <span className="rating-header">Grading</span>
                  </Grid>
                  <Grid item xs={10}>
                    <Tooltip title="The grading of this course is rated from 1 star to 5 stars. 1 represents strict grading and 5 represents lenient grading">
                      <IconButton aria-label="help">
                        <HelpOutlineOutlinedIcon />
                      </IconButton>
                    </Tooltip>
                    <StarRatings
                      rating={this.state.gradingRating}
                      starDimension="2rem"
                      starRatedColor="#7800A2"
                      starHoverColor="#D88AF3"
                      changeRating={this.changeGradingRating}
                      numberOfStars={5}
                      name="rating"
                    />
                  </Grid>
                </Grid>
              </div>
              <div className="star-ratings">
                <Grid
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                >
                  <Grid item xs={2}>
                    <span className="rating-header">Instructor</span>
                  </Grid>
                  <Grid item xs={10}>
                    <Tooltip title="The instructor of this course is rated from 1 star to 5 stars. 1 represents ineffective and 5 represents effective">
                      <IconButton aria-label="help">
                        <HelpOutlineOutlinedIcon />
                      </IconButton>
                    </Tooltip>
                    <StarRatings
                      rating={this.state.instructorRating}
                      starDimension="2rem"
                      starRatedColor="#7800A2"
                      starHoverColor="#D88AF3"
                      changeRating={this.changeInstructorRating}
                      numberOfStars={5}
                      name="rating"
                    />
                  </Grid>
                </Grid>
              </div>
            </div>
            <div className="submit-input">
              <SubmitInput
                multiline
                rows="6"
                value={this.state.comments}
                onChange={this.updateComments}
                label="Comments"
                variant="outlined"
                helperText={`${this.state.comments.length}/3000`}
                inputProps={{ maxLength: 3000 }}
              />
            </div>
            <div className="buttons">
              <Link to="/">
                <CancelButton variant="outlined">Cancel</CancelButton>
              </Link>
              <SubmitButton onClick={this.validateForm}>Submit</SubmitButton>
            </div>
            {this.state.clicked && !this.state.validate && (
              <span className="error-message">
                * Please complete all the required fields
              </span>
            )}
          </form>
        </ReviewContainer>
      </div>
    );
  }
}
NewReviewView.propTypes = {
  // currentUser: Object
};

export default NewReviewView;
