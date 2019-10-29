//During Sign-In: checks if the user exists in the system, and if so - if they provided the correct password.
function authenticateUser(requestedLogin, requestedPassword) {
	//Code to be executed
	return boolean;
}

//During registering an account: checks if the username is taken already by another user
function isUsernameTaken(requestedUsername) {
	//Code to be executed
	return boolean;
}

//During registering an account: checks if the email is taken already by another user
function isEmailTaken(requestedEmail) {
	//Code to be executed
	return boolean;
}

//During registering an account: submits the data to be saved in the database
function addNewUser(submittedEmail, submittedUsername, submittedPassword) {
	//Code to be executed
	return void;
}