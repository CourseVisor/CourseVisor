import React, { Component } from "react";
import PropTypes from "prop-types";
import "./CourseSearchView.scss";
import { withRouter, Link } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import {
  Container,
  Paper,
  TableHead,
  Table,
  TableCell,
  TableRow,
  TableBody,
  CircularProgress
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const HeadTableCell = withStyles({
  root: {
    "border-top": "1px solid",
    borderColor: "#F7E173"
  }
})(TableCell);

const CourseTableCell = withStyles({
  root: {
    color: "#42005A",
    fontWeight: "bold",
    border: "none"
  }
})(TableCell);

const TableContainer = withStyles({
  root: {
    "@media (min-width:960px)": {
      width: "60%"
    },
    paddingTop: "4rem"
  }
})(Container);
class CourseSearchView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: this.props.location.pathname.split("/results/")[1],
      courses: [],
      loading: false
    };
  }

  async componentDidMount() {
    await this.search();
  }

  search = async () => {
    this.setState({ loading: true });
    let prefix = this.state.query.split(/\d/)[0].toUpperCase();
    // delete trailing space
    if (prefix.slice(prefix.length - 1, prefix.length) == " ") {
      prefix = prefix.slice(0, prefix.length - 1);
    }
    const search = this.state.query.search(/\d/);
    let number;
    if (search >= 0) {
      number = this.state.query.slice(this.state.query.search(/\d/), this.state.query.length);
    }
    let snapshot;
    const courses = [];
    if (prefix && number) {
      snapshot = await firebase
        .database()
        .ref(`courseTeacherReview/${prefix}/${number}`)
        .once("value");
      if (snapshot.val()) {
        courses.push({
          course: snapshot.val().course,
          courseTitle: snapshot.val().courseTitle
        });
      }
    } else if (prefix && !number) {
      snapshot = await firebase
        .database()
        .ref(`courseTeacherReview/${prefix}`)
        .once("value");
      snapshot.val() &&
        Object.values(snapshot.val()).forEach(course => {
          courses.push({
            course: course.course,
            courseTitle: course.courseTitle
          });
        });
    }
    this.setState({ courses: courses, loading: false });
    console.log(courses);
  };

  render() {
    return (
      <div className="CourseSearchView">
        {this.state.loading ? (
          <div className="progress">
            <CircularProgress color="inherit" />
          </div>
        ) : (
          <TableContainer>
            <div className="results">
              {this.state.courses.length} search
              {this.state.courses.length > 1 ? " results " : " result "}
              for "{this.state.query.toUpperCase()}"
            </div>
            {this.state.courses.length > 0 ? (
              <Table>
                <TableHead>
                  <TableRow>
                    <HeadTableCell size="small">Course</HeadTableCell>
                    <HeadTableCell size="small">Course Title</HeadTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.courses.map(course => {
                    return (
                      <TableRow>
                        <CourseTableCell size="small">
                          <div className="course-icon">
                            <svg
                              width="30"
                              height="30"
                              viewBox="0 0 30 30"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle cx="15" cy="15" r="15" fill="#42005A" />
                              <path
                                d="M5.6897 21.2069C5.6897 20.2275 6.48368 19.4335 7.4631 19.4335H22.0936C23.0731 19.4335 23.867 20.2275 23.867 21.2069H5.6897Z"
                                fill="white"
                              />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M6.57642 10.7931C6.57642 9.68855 7.47185 8.79312 8.57642 8.79312H21.4237C22.5283 8.79312 23.4237 9.68855 23.4237 10.7931V18.9902H6.57642V10.7931ZM15.4434 18.1034L14.5046 18.9901H10.1232V17.2167L14.5046 17.2167L15.4434 18.1034ZM16.7418 10.2359C16.3186 9.88966 15.6958 9.94749 15.3436 10.3657L12.4658 13.7831L10.796 12.265C10.3873 11.8935 9.75486 11.9236 9.38335 12.3322C9.01184 12.7409 9.04196 13.3734 9.45062 13.7449L11.889 15.9616C12.0902 16.1444 12.357 16.2375 12.6282 16.2195C12.8994 16.2014 13.1516 16.0737 13.3266 15.8658L16.2383 12.4081L20.3521 15.774C20.7796 16.1237 21.4096 16.0607 21.7593 15.6332C22.109 15.2058 22.046 14.5758 21.6186 14.226L16.7418 10.2359Z"
                                fill="white"
                              />
                            </svg>
                          </div>
                          <Link to={`/course/${course.course}`}>
                            <div className="course-prefix-number">{course.course}</div>
                          </Link>
                        </CourseTableCell>
                        <Link to={`/course/${course.course}`}>
                          <CourseTableCell>{course.courseTitle}</CourseTableCell>
                        </Link>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            ) : (
              <div className="not-found">
                <h2>Oops, sorry!</h2>
                <div>
                  Your search <span className="search-query">"{this.state.query.toUpperCase()}"</span> did not match any
                  courses.
                </div>
                <div>
                  Please make sure you entered in the correct prefix and code.
                </div>
              </div>
            )}
          </TableContainer>
        )}
      </div>
    );
  }
}
CourseSearchView.propTypes = {};

export default CourseSearchView;
