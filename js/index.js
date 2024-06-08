var usersList = [];

if (null != localStorage.getItem("usersList"))
	usersList = JSON.parse(localStorage.getItem("usersList"));

// get local storage content if exist



// session storage

function signUpUser() {
	var userData = {
		name: document.getElementById("floatingName").value,
		email: document.getElementById("floatingEmail").value,
		password: document.getElementById("floatingPassword").value
	};
	usersList.push(userData);
	localStorage.setItem("usersList", JSON.stringify(usersList));
};