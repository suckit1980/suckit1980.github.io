/*We Learn To Walk javascript 
 *By Daniel Rhoades
 *CIS166AA
 *filename learn.js
 */

 
//add selected values
   function calcTotal() {
	var itemTotal = 0;
	var items = document.getElementsByTagName("input");
	for (var i = 0; i < 8; i++) {
		if (items[i].checked) {
			itemTotal += (items[i].value * 1);
		}
	}
	document.getElementById("total").innerHTML = "Your order total is $" + itemTotal + ".00";
   }
   
   
   //event listener for submit button
   var submitButton = document.getElementById("sButton");
   if (submitButton.addEventListener) {
	   submitButton.addEventListener("click", calcTotal, false);
   } else if (submitButton.attachEvent) {
	   submitButton.attachEvent("onclick", calcTotal);
   }
	//placeholders for ancient Internet Explorer	
function insertPlaceholders() {
		if (!Modernizr.input.placeholder) {
			document.getElementById("nameinput").value = "first and last name";
			document.getElementById("emailinput").value = "address@example.com";
			document.getElementById("phoneinput").value = "###-###-####";
			document.getElementById("homeaddressinput").value = "home address";
			document.getElementById("cityandstateinput").value = "city and state";
			document.getElementById("zipcodeinput").value = "zipcode";
		}
   }
   if  (window.addEventListener) {
		window.addEventListener("load", insertPlaceholders, false);   
   } else if (window.attachEvent) {
	   window.attachEvent("onload", insertPlaceholders);
   }
   
   