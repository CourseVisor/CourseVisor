import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ReviewView.scss';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import OverAllRatingView from '../OverAllRatingView/OverAllRatingView';
import { CircularProgress, Container } from '@material-ui/core';

class ReviewView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courseName: this.props.match.params.courseName,
      courseTitle: this.props.match.params.courseTitle,
      instructor: this.props.match.params.instructor.toUpperCase(),
      loading: false,
      workloadAvg: 0,
      gradingAvg: 0,
      instructorAvg: 0
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
    const snapshot = (await (firebase.database().ref(`courseTeacherReview/${prefix}/${number}/instructors/${this.state.instructor}`).once("value"))).val();
    this.calculateAverages(snapshot.reviews)
    this.setState({ loading: false });
  }
  calculateAverages = (reviews) => {
    let totalWorkload = 0;
    let totalGrading = 0;
    let totalInstructor = 0;
    const reviewKeys = Object.keys(reviews);
    reviewKeys.forEach(review => {
      console.log(reviews[review])
      totalWorkload += reviews[review].ratingWorkload;
      totalGrading += reviews[review].ratingGrading;
      totalInstructor += reviews[review].ratingInstructor;
    });
    this.setState({
      workloadAvg: totalWorkload / reviewKeys.length,
      gradingAvg: totalGrading / reviewKeys.length,
      instructorAvg: totalInstructor / reviewKeys.length
    })
  }
  render() {
    return (
      <div className="ReviewView">
        {this.state.loading ? (
          <div className="progress">
            <CircularProgress color="inherit" />
          </div>
        ) : (
            <Container>
              <h2>{this.state.courseName} {this.state.courseTitle}</h2>
              <div className="instructor-name">{this.state.instructor.toLowerCase()}</div>
              <OverAllRatingView workload={this.state.workloadAvg} grading={this.state.gradingAvg} instructor={this.state.instructorAvg} />
            </Container>
          )}
      </div>
    )
  }
}
ReviewView.propTypes = {
}

export default ReviewView;