var usersList = [];

if (null != localStorage.getItem("usersList"))
	usersList = JSON.parse(localStorage.getItem("usersList"));

// get local storage content if exist

function clearSignUpForm() {

	nameInput = document.getElementById("floatingName");
	nameInput.value = null;
	nameInput.classList.remove("is-valid");

	emailInput = document.getElementById("floatingEmail");
	emailInput.value = null;
	emailInput.classList.remove("is-valid");

	passwordInput = document.getElementById("floatingPassword");
	passwordInput.value = null;
	passwordInput.classList.remove("is-valid");
}


function signUpNameValidation() {
	element = document.getElementById("floatingName");
	var regex = /^[A-Z][a-zA-Z '.-]*[A-Za-z][^-]$/;

	if (regex.test(element.value)) {
		element.classList.remove("is-invalid");
		element.classList.add("is-valid");
		return true;
	} else {
		element.classList.remove("is-valid");
		element.classList.add("is-invalid");
		return false;
	}
}
function signUpEmailValidation() {
	element = document.getElementById("floatingEmail");
	var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	if (regex.test(element.value) && isUniqueEmail(element.value)) {
		element.classList.remove("is-invalid");
		element.classList.add("is-valid");
		return true;
	}
	else {
		element.classList.remove("is-valid");
		element.classList.add("is-invalid");
		return false;
	}
}
function isUniqueEmail(email) {
	if (usersList.length == 0) {
		return true
	}
	else {
		for (var i = 0; i < usersList.length; i++) {
			if (usersList[i].email != email) {
				console.log(usersList[i].email + " " + " " + email)
			}
			else {
				console.log("exist")
				return false;
			}
		}
	}
}
function signUpPassValidation() {
	element = document.getElementById("floatingPassword");

	var regex = /^[A-Za-z\d]{3,}$/;

	if (regex.test(element.value)) {
		element.classList.remove("is-invalid");
		element.classList.add("is-valid");
		return true;
	} else {
		element.classList.remove("is-valid");
		element.classList.add("is-invalid");
		return false;
	}
}

function signUpUser() {
	if (signUpNameValidation() && signUpEmailValidation() && signUpPassValidation()) {
		console.log("yes");
		var userData = {
			name: document.getElementById("floatingName").value,
			email: document.getElementById("floatingEmail").value,
			password: document.getElementById("floatingPassword").value,
		};
		clearSignUpForm();
		usersList.push(userData);
		localStorage.setItem("usersList", JSON.stringify(usersList));
	} else console.log("no1");
}

function loginUser() {
	var email = document.getElementById("floatingLoginEmail").value;
	var pass = document.getElementById("floatingLoginPass").value;

	for (var i = 0; usersList.length > i; i++) {
		if (usersList[i].email == email && usersList[i].password == pass) {
			console.log("user exist");
			sessionStorage.setItem("currentUser", JSON.stringify(usersList[i]));
			window.location.href = "home.html";
		}
	}
}

function greetingMsg() {
	var currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
	console.log(currentUser);
	document.getElementById("welcomeMsg").innerText =
		`
	Welcome ${currentUser.name}
	`;
}
greetingMsg();