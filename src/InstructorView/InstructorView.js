import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './InstructorView.scss';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import { Card, CardContent, Typography, CardActions, Container, CircularProgress } from '@material-ui/core';
import { withStyles } from "@material-ui/styles";
import SubmitButtonView from '../SubmitButtonView/SubmitButtonView';
import { Link } from "react-router-dom";
import SearchBarView from "../SearchBarView/SearchBarView";

const InstructorCard = withStyles({
  root: {
    textAlign: "center",
    marginBottom: "2rem",
    "&:hover": {
      backgroundColor: "#E8E8E8"
    }
  }
})(Card);

const InstructorContainer = withStyles({
  root: {
    "@media (min-width:720px)": {
      width: "60%"
    },
    "@media (min-width:960px)": {
      width: "40%"
    },
    textAlign: "center"
  }
})(Container);

const InstructorCardContent = withStyles({
  root: {
    textTransform: "capitalize",
    fontWeight: "bold",
    color: "#42005A"
  }
})(CardContent);
class InstructorView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courseName: this.props.match.params.courseName,
      courseTitle: "",
      instructors: [],
      loading: false
    }
  }

  componentDidMount = async () => {
    await this.getData();
  }

  getData = async () => {
    this.setState({ loading: true });
    let prefix = this.state.courseName.split(/\d/)[0].toUpperCase();
    // delete trailing space
    if (prefix.slice(prefix.length - 1, prefix.length) == " ") {
      prefix = prefix.slice(0, prefix.length - 1);
    }
    const search = this.state.courseName.search(/\d/);
    let number;
    if (search >= 0) {
      number = this.state.courseName.slice(this.state.courseName.search(/\d/), this.state.courseName.length);
    }
    const snapshot = (await (firebase.database().ref(`courseTeacherReview/${prefix}/${number}`).once("value"))).val();
    const instructors = [];
    snapshot.instructors && Object.keys(snapshot.instructors).forEach(key => {
      const instructor = {
        name: key,
        reviews: snapshot.instructors[key].reviews
      }
      instructors.push(instructor);
    })
    this.setState({ courseTitle: snapshot.courseTitle, instructors: instructors, loading: false })
  }
  render() {
    const newReviewRoute = `/new-review/${this.state.courseName}`
    console.log(newReviewRoute)
    return (
      <div className="InstructorView">
        {this.state.loading ? (
          <div className="progress">
            <CircularProgress color="inherit" />
          </div>
        ) : (
            <Container>
              <div className="searchBarInstructor">
                <SearchBarView />
              </div>
              <div className="course-header">
                <h2 className="course-title">{this.state.courseName} {this.state.courseTitle}</h2>
              </div>
              <InstructorContainer>
                {this.state.instructors.map(instructor => {
                  const reviewRoute = `/review/${this.state.courseName}/${this.state.courseTitle}/${instructor.name.toUpperCase()}`;
                  return (
                    <Link to={reviewRoute}>
                      <InstructorCard key={instructor.name}>
                        <InstructorCardContent>
                          <div className="instructor-icon">
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="15" cy="15" r="15" fill="#42005A" />
                              <path d="M9 18C9 15.2386 11.2386 13 14 13H16C18.7614 13 21 15.2386 21 18V24.1023C16.3141 25.2842 13.6842 25.3142 9 24.1023V18Z" fill="white" />
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M14.9629 12.5185C17.3152 12.5185 19.2221 10.6116 19.2221 8.25926C19.2221 5.90694 17.3152 4 14.9629 4C12.6105 4 10.7036 5.90694 10.7036 8.25926C10.7036 10.6116 12.6105 12.5185 14.9629 12.5185ZM11.25 7.55554C11.25 7.00326 11.6977 6.55554 12.25 6.55554H13.7794C14.3317 6.55554 14.7794 7.00326 14.7794 7.55554V7.70134H15.2206V7.55554C15.2206 7.00326 15.6683 6.55554 16.2206 6.55554H17.7499C18.3022 6.55554 18.7499 7.00326 18.7499 7.55554V8.30554C18.7499 8.85783 18.3022 9.30554 17.7499 9.30554H16.2206C15.6683 9.30554 15.2206 8.85783 15.2206 8.30554V8.15967H14.7794V8.30554C14.7794 8.85783 14.3317 9.30554 13.7794 9.30554H12.25C11.6977 9.30554 11.25 8.85783 11.25 8.30554V7.55554ZM11.92 7.5C11.92 7.36193 12.0319 7.25 12.17 7.25H13.92C14.0581 7.25 14.17 7.36193 14.17 7.5V8.4C14.17 8.53807 14.0581 8.65 13.92 8.65H12.17C12.0319 8.65 11.92 8.53807 11.92 8.4V7.5ZM15.88 7.5C15.88 7.36193 15.9919 7.25 16.13 7.25H17.88C18.018 7.25 18.13 7.36193 18.13 7.5V8.4C18.13 8.53807 18.018 8.65 17.88 8.65H16.13C15.9919 8.65 15.88 8.53807 15.88 8.4V7.5Z" fill="white" />
                            </svg>
                          </div>
                          <div className="instructor-name">
                            {instructor.name.toLowerCase()}
                          </div>
                        </InstructorCardContent>
                      </InstructorCard>
                    </Link>
                  )
                })}
                <div className="no-instructor">
                  The instructor you're looking for isn't on the list?
                  Yikes, looks like nobody has made a review for them yet.
                  Submit your review to start a new course/instructor combination!
                </div>
                <Link to={newReviewRoute}>
                  <SubmitButtonView />
                </Link>
              </InstructorContainer>
            </Container>
          )}
      </div>
    )
  }
}
InstructorView.propTypes = {
}

export default InstructorView;