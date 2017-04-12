"use strict"; //interpret document contents in JavaScript strict mode

// global variables 
var formValidity = true;

// validate required fields
function validateRequired() {
	var inputElements = document.querySelectorAll("#contactinfo input");
	var errorDiv = document.getElementById("errorText");
	var elementCount = inputElements.length;
	var requiredValidity = true;
	var currentElement;
	try {
		for (var i = 0; i < elementCount; i++) {
			//validate all input elements in fieldset
			currentElement = inputElements[i];
			if (currentElement.value === "") {
				currentElement.style.background = "rgb(255,233,233)";
				requiredValidity = false;
			} else {
				currentElement.style.background = "white";
			}
		}
		if (requiredValidity === false) {
			throw "Please complete all fields.";
		}
		errorDiv.style.display = "none";
		errorDiv.innerHTML = "";
	}
	catch(msg) {
		errorDiv.style.display = "block";
		errorDiv.innerHTML = msg;
		formValidity = false;
	}
}

// validate numeric fields for ancient browsers
function validateNumber() {
	var numberInputs = document.querySelectorAll("#contactinfo input[type=number]");
	var elementCount = numberInputs.length;
	var numErrorDiv = document.getElementById("numErrorText");
	var numbersValidity = true;
	var currentElement;
	try {
		for (var i = 0; i < elementCount; i++) {
			//validate fieldset as numeric
			currentElement = numberInputs[i];
			if (isNaN(currentElement.value) || (currentElement.value === "")) {
				currentElement.style.background = "rgb(255,233,233)";
				numbersValidity = false;
			} else {
				currentElement.style.background = "white";
			}
		}
		if (numbersValidity === false) {
			throw "Zipcode must be numeric.";
		}
		numErrorDiv.style.display = "none";
		numErrorDiv.innerHTML = "";
	}
	catch(msg) {
		numErrorDiv.style.display = "block";
		numErrorDiv.innerHTML = msg;
		formValidity = false;
	}
}

// create event listeners
function createEventListeners() {
	var form = document.getElementsByTagName("form")[0];
	if (form.addEventListener) {
		form.addEventListener("submit", validateForm, false);
	} else {
		form.attachEvent("onsubmit", validateForm);
	}
}

// validate form
function validateForm(evt) {
	if (evt.preventDefault) {
		evt.preventDefault(); //prevent form submition 
	} else {
		evt.returnValue = false;
	}
	formValidity = true; //reset values
	validateRequired();
	validateNumber();
	if (formValidity === true) {
		document.getElementsByTagName("form")[0].submit();
	}
}
// reset page
if (window.addEventListener) {
	window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
	window.attachEvent("onload", createEventListeners);
}
