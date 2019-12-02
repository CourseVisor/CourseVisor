import { withStyles } from "@material-ui/styles";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ReviewView.scss';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import OverAllRatingView from '../OverAllRatingView/OverAllRatingView';
import { CircularProgress, Container, Grid } from '@material-ui/core';
import SubmitButtonView from '../SubmitButtonView/SubmitButtonView';
import { Link } from "react-router-dom";
import SearchBarView from "../SearchBarView/SearchBarView";
import IndividualReviewView from "../IndividualReviewView/IndividualReviewView";

const ReviewContainer = withStyles({
  root: {
    ['@media (min-width:780px)']: {
      width: "80%"
    }
  }
})(Container);
class ReviewView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courseName: this.props.match.params.courseName,
      courseTitle: this.props.match.params.courseTitle,
      instructor: this.props.match.params.instructor.toUpperCase(),
      reviews: [],
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
    const allReviews = [];
    const reviewKeys = Object.keys(reviews);
    reviewKeys.forEach(review => {
      allReviews.push(reviews[review]);
      totalWorkload += reviews[review].ratingWorkload;
      totalGrading += reviews[review].ratingGrading;
      totalInstructor += reviews[review].ratingInstructor;
    });
    this.setState({
      reviews: allReviews,
      workloadAvg: totalWorkload / reviewKeys.length,
      gradingAvg: totalGrading / reviewKeys.length,
      instructorAvg: totalInstructor / reviewKeys.length
    })
  }
  render() {
    const reviewRoute = `/new-review/${this.state.courseName}/${this.state.instructor}`
    return (
      <div className="ReviewView">
        {this.state.loading ? (
          <div className="progress">
            <CircularProgress color="inherit" />
          </div>
        ) : (
            <ReviewContainer>
              <div className="searchBarReview">
                <SearchBarView />
              </div>
              <div className="top-container">
                <h3 className="heading">{this.state.courseName} {this.state.courseTitle}</h3>
                <div className="container-right">
                  <Link to={reviewRoute}>
                    <SubmitButtonView />
                  </Link>
                </div>
              </div>
              <div className="instructor-name">{this.state.instructor.toLowerCase()}</div>
              <OverAllRatingView workload={this.state.workloadAvg} grading={this.state.gradingAvg} instructor={this.state.instructorAvg} />
              <div className='all-reviews'>
                <div className='left-line'></div>
                <h5 className='review-banner'>{this.state.reviews.length} Student Ratings & Reviews</h5>
                <div className='right-line'></div>
              </div>
              {this.state.reviews.map(review => {
                return (
                  <div>
                    <IndividualReviewView username={review.username} workload={review.ratingWorkload} grading={review.ratingGrading} instructor={review.ratingInstructor} comment={review.comment}/>
                    <div className='full-line'></div>
                  </div>
                  )
              })}
              <br />
              <br />
              <br />
            </ReviewContainer >
          )}
      </div>
    )
  }
}
ReviewView.propTypes = {
}

export default ReviewView;