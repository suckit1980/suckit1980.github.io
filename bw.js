/*Baby on the way javascript 
 *By Daniel Rhoades
 *CIS166AA
 *filename bw.js
 */

 var totalCost = 0;
 var canCost = 0;
 

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