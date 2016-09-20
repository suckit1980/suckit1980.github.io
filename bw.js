/*Baby on the way javascript 
 *By Daniel Rhoades
 *CIS166AA
 *filename bw.js
 */

var totalCost = 0;
var canCost = 0;
var message = document.getElementById("message");
 
function validateNumCans (){
	var numbCans = document.getElementById("numcans").value;
	var messageText = "";
	try {
		if (numbCans.value < 1) 
			throw "Please enter a number greater than 0.";
	}
	catch(message) {
		messageText = message;
		numbCans.value = "";
	}
	finally {
		message.innerHTML = messageText;
		document.getElementById("numcans").value = 1;
	}	
}

function validateYears (){
	var numbYears = document.getElementById("years").value;
	var messageText = "";
	try {
		if (numbYears.value < 1) 
			throw "Please enter a number greater than 0 and less than 52.";
	}
	catch(message) {
		messageText = message;
		numbYears.value = "";
	}
	finally {
		message.innerHTML = messageText;
		document.getElementById("years").value = 1;
	}	
}

/* I tried to debug this program but was unsuccesful. At first I tried using
break points to isolate the problem but could not find it. Next I used 
console.log but was unable to find when inputs where being processed.*/

function calcCanAmount() {
	var num = document.getElementById("numcans");
	var yrs = document.getElementById("years");
	totalCost -= canCost;
	canCost = num.value * 24.98 * yrs.value;
	totalCost += canCost;
	document.getElementById("totalcost").innerHTML = "$" + totalCost;
	
}

function resetForm() {
	document.getElementById("numcans").value = 1;
	document.getElementById("years").value = 1;
	calcCanAmount();
	createEventListeners();
}
window.addEventListener("load", resetForm, false);



function createEventListeners() {
	document.getElementById("numcans").addEventListener("change", calcCanAmount, false);
	document.getElementById("years").addEventListener("change", calcCanAmount, false);
	
}