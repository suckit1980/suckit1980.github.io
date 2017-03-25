/*We Learn To Walk javascript 
 *By Daniel Rhoades
 *CIS166AA
 *filename learn.js
 */


function calcTotal() {
	//establish varabiles
		var itemTotal = 0;
		var item1 = document.getElementById("item1");
		var item2 = document.getElementById("item2");
		var item3 = document.getElementById("item3");
		var item4 = document.getElementById("item4");
		var item5 = document.getElementById("item5");
		var item6 = document.getElementById("item6");
		var item7 = document.getElementById("item7");
		var item8 = document.getElementById("item8");
	//assign value to variables
		(item1.checked) ? (itemTotal += 19) : (itemTotal += 0);
		(item2.checked) ? (itemTotal += 24) : (itemTotal += 0);
		(item3.checked) ? (itemTotal += 25) : (itemTotal += 0);
		(item4.checked) ? (itemTotal += 17) : (itemTotal += 0);
		(item5.checked) ? (itemTotal += 13) : (itemTotal += 0);
		(item6.checked) ? (itemTotal += 12) : (itemTotal += 0);
		(item7.checked) ? (itemTotal += 13) : (itemTotal += 0);
		(item8.checked) ? (itemTotal += 9) : (itemTotal += 0);
		var salesTaxRate = 0.12;
	//create orderTotal variable and messege
		var orderTotal = itemTotal + (itemTotal * salesTaxRate);
		alert("Your order total is $" + orderTotal);	
	}
	document.getElementById("submit").addEventListener("click", calcTotal, false);
