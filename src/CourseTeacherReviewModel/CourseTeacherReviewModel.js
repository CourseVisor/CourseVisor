import React, {Component} from 'react';
import PropTypes from 'prop-types';

const CourseTeacherReviewModel = () => {
  return (
    <div className="CourseTeacherReviewModel">
    </div>
  )
}
CourseTeacherReviewModel.propTypes = {
  coursePrefix: {
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