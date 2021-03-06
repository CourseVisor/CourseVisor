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
  Button,
  CircularProgress
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
      loading: true,
      currentUser: null,
      course: this.props.match.params.courseName ? this.props.match.params.courseName : "",
      courseTitle: "",
      instructor: this.props.match.params.instructor ? this.formatInstructor(this.props.match.params.instructor) : "",
      workloadRating: 0,
      gradingRating: 0,
      instructorRating: 0,
      comments: "",
      clicked: false,
      validate: null,
      errorMessage: ""
    };
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ currentUser: user });
      } else {
        this.setState({ currentUser: null });
      }
      if (this.state.loading) {
        this.setState({ loading: false });
      }
    });
  }
  goBack = () => {
    this.props.history.goBack();
  }
  updateCourse = async event => {
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
    this.setState({ clicked: true, errorMessage: "" });
    const checkEmptyFields =
      this.state.workloadRating === 0 ||
      this.state.gradingRating === 0 ||
      this.state.instructorRating === 0 ||
      !this.state.course ||
      !this.state.instructor;
    if (checkEmptyFields) {
      await this.setState({
        validate: false,
        errorMessage: "* Please complete all the required fields"
      });
      return;
    }
    if (this.state.instructor.match(/^\W/)) {
      this.setState({ validate: false, errorMessage: "* Instructor field cannot contain illegal characters" });
      return;
    }
    const prefix = this.state.course.toUpperCase().split(" ")[0];
    const number = this.state.course.toUpperCase().split(" ")[1];
    const snapshot =
      prefix && number &&
      await (firebase.database().ref(`courseTeacherReview/${prefix}/${number}`).once("value"));
    if (!snapshot || !snapshot.val()) {
      await this.setState({ validate: false, errorMessage: "* Course does not exist in the database" });
      return;
    }

    await this.addToFirebase();
    !this.state.errorMessage && this.props.history.push(`/review/${this.state.course.toUpperCase()}/${snapshot.val().courseTitle}/${this.state.instructor.toUpperCase()}`);
  };
  addToFirebase = async () => {
    const prefix = this.state.course.toUpperCase().split(" ")[0];
    const number = this.state.course.toUpperCase().split(" ")[1];
    const instructor = this.state.instructor.toUpperCase();
    const instructorReview = {
      ratingWorkload: this.state.workloadRating,
      ratingGrading: this.state.gradingRating,
      ratingInstructor: this.state.instructorRating,
      comment: this.state.comments,
      username: this.state.currentUser.displayName
    };
    try {
      await firebase
        .database()
        .ref(`courseTeacherReview/${prefix}/${number}/instructors/${instructor}/reviews`)
        .push(instructorReview)
        .catch(error => {
          this.setState({ errorMessage: "* Instructor field cannot contain illegal characters" });
        })
    } catch (error) {
      this.setState({ errorMessage: "* Instructor field cannot contain illegal characters" });
    }
  };
  formatInstructor = (instructor) => {
    let result = "";
    instructor && instructor.toLowerCase().split(" ").forEach(word => {
      result += word.charAt(0).toUpperCase() + word.slice(1) + " "
    });
    return result.trim();
  }
  render() {
    if (this.state.loading) {
      return (
        <div className="progress">
          <CircularProgress color="inherit" />
        </div>
      )
    }
    if (!this.state.currentUser) {
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
                defaultValue={this.state.course}
                placeholder="Please enter the course prefix and code, e.g. INFO 442"
                variant="outlined"
                onChange={this.updateCourse}
              />
            </div>
            <div className="submit-input">
              <SubmitInput
                required
                label="Instructor"
                defaultValue={this.state.instructor}
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
              <CancelButton variant="outlined" onClick={this.goBack}>Cancel</CancelButton>
              <SubmitButton onClick={this.validateForm}>Submit</SubmitButton>
            </div>
            {((this.state.clicked && !this.state.validate) || this.state.errorMessage) && (
              <span className="error-message">
                {this.state.errorMessage}
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
