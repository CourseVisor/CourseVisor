# Requirements

## Generic Items:
- Across all pages, if the user clicks on the CourseVisor Logo or CourseVisor text in top left corner, the user is redirected to the homepage.
- Across all pages, if the user is logged in, “Hi, [username]” is displayed in the top right corner.  The button “Log out” is displayed underneath “Hi, [username]”.
- If a user clicks on log out when they are in the “submitting review page”
- The user is directed back to the course page they previously clicked on to submit a review on. 
- The user is directed back to the homepage if they started the review submission through the homepage.
- If a user clicks on the “Log Out” button, the system should log the user out and return to the same page
- If a user is not logged into the website, login and sign up buttons are displayed  in the top right corner.
- If a user clicks on the login button, the user will be directed to the login page
- If a user clicks on the sign-up button, the user will be redirected to the account creation page.

## Homepage
- If the user clicks login, the user will be redirected to the login page.
- If the user clicks sign up, the user will be redirected to the account creation page.
- If the user clicks submit a review and is logged in, the user will be redirected to the review submission page.
- If the user clicks on submit a review and is not logged in, the user will be redirected to the login page.
- If the user clicks on the CourseVisor logo or text, the user will reload the homepage. 
- If the user clicks on the magnifying glass without any text in the search bar, an error message will appear that asks the user to provide a class to search.
- If the user provides input in the search bar, a search suggest drop down list will appear that suggests class options to select.
- If the user provides input in the search bar and clicks on the magnifying glass, the user will be redirected to a search result page for the input.
- If the user clicks on one of the options in the search suggest drop down list, the user will be redirected to a search result page for the selected option. 

## Account Creation
- If the user clicks sign up and an account with the same email already exists, the account will not be created and an error message will be shown that says “Account with this email already exists”.
- If the user clicks sign up and an account with the same username already exists, the account will not be created and an error message will be shown that says “Account with this username already exists”.
- If the user clicks sign up and the input in the “confirm password” field does not match the input in the “password” field, the account will not be created and an error message will be shown that says “Passwords do not match”.
- If the user clicks sign up and the email and username have not been previously used and the inputs in the “password and “confirm password” fields match, the account will be successfully created and the user will be redirected to the login screen.
- If the user clicks login, the user will be redirected to the login page.

## Account Log In
- If the user clicks login and there is no account with a matching username or email and password, the user will fail to log in and an error message will show that says “Incorrect username, email, or password”.
- If the user clicks log in and there is an existing account with a matching username or email and password, the user will be logged in and redirected to the homepage.
- If the user clicks the box for “keep me logged in”, clicks log in, and there is an existing account with a matching username or email and password, the user will be logged in and redirected to the homepage. The browser will continue to keep the user logged in until the user clicks log out.

## Search
- If the user clicks on the magnifying glass without any text in the search bar, an error message will appear that asks the user to provide a class to search.
- If the user provides input in the search bar, a search suggest drop down list will appear that suggests class options to select.
- If the user provides input in the search bar and clicks on the magnifying glass, the user will be redirected to a search result page for the input.
- If the user clicks on one of the options in the search suggest drop down list, the user will be redirected to a search result page for the selected option. 
- If the user clicks on the magnifying glass with text for a course that is in the database and there are reviews for the course, the search query will remain in the search bar and the course title will be displayed in the middle of the screen. The page will display professors of the course below.
- If the user clicks on a professor, the user will be redirected to the review page of the course for the professor.
- If the user clicks on the magnifying glass with text for a course that is not in the database, the user will be redirected to the no existing review page.

## No existing review page
- The search box has the same requirements outlined above in Search.
- If the user clicks on the submit new review button and is not logged in, the user will be redirected to the login page.
- If the user clicks on the submit new review button and is logged in, the user will be redirected to the review submission page.

## Review Page
- The search box has the same requirements outlined above in Search.
- If the user is logged in and clicks “submit new review” page on this page, the user will be redirected to the course review page, with the course instructor and course name fields auto-filled with the course instructor and course name of the previous review page. 
- If the user is not logged in and clicks “submit new review” page on this page, the user will be redirected to the login page.
- If the user clicks “view rating” on any individual review, the individual review will be expanded, displaying the full review.
- If the user clicks the close button on the upper-right corner, the expanded review will collapse. 

## Review Submission

- It is required for the user to enter course name (prefix and course name) and instructor name in the “Course” and  “Instructor” fields respectively in order to successfully submit a new review.
- It is required for the user to make numerical ratings for workload, grading, and instructor and select at least one tag.
- If the user does not fille in all required fields which are course, instructor, numerical ratings, and tag selection and clicks submit new review, the review will not be created and an error message will display saying “please complete required fields”.
- If the user makes changes to all required fields which are course, instructor, numerical ratings, and tag selection and clicks submit new reivew, the review will be successfully created and the user will be redirected to the review page for the course that the newly submitted review was for. 
- The text review box is an optional field. Whether it is filled in or not will not affect the submission of a review when a user clicks submit new review.
- If the user clicks cancel, the user will be redirected to the homepage.
- If the user clicks expand for more, the page will display a complete list of tags. 
