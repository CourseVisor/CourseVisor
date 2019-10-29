import React, {Component} from 'react';
import PropTypes from 'prop-types';

const CourseTeacherReviewModel = () => {
  // do something with props here
  addCourseTeacherReview = () => {
    // firebase.add(this.props.course)
  }
}
CourseTeacherReviewModel.propTypes = {
  course: {
    courseName: string,
    courseTitle: string,
    instructors: PropTypes.arrayOf({
      instructorName: string,
      reviews: PropTypes.arrayOf({
        userName: string,
        ratingWorkload: Number,
        ratingGrading: Number,
        ratingInstructor: Number,
        comment: string
      })
    })
  }
}

export default CourseTeacherReviewModel;