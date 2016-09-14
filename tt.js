/*java chapter 3 
tt.js*/

var daysOfWeek = ["Sunday", "Monday", "Tuesday",  "Wednesday", "Thursday", "Friday", "Saturday"];


var appointments = ["", "Complications", "", "", "Pregnancy Yoga", "", "", 
				"", "Complications", "", "", "Pregnancy Yoga", "", "",
				"", "Complications", "", "", "Pregnancy Yoga", "", "",
				"", "Complications", "", "", "Pregnancy Yoga", "", "",
				"", "Complications", "", "", "Pregnancy Yoga", "", "",];

		
function addColumnHeaders()
{
	var i = 0;
	while (i < 7) 
	{
		document.getElementsByTagName("th")[i].innerHTML = daysOfWeek[i];
		i++;
	}
}

function addCalendarDates() 
{
	var i = 1;
	var paragraphs = "";
	do 
	{
		var tableCell = document.getElementById("08-" + i);
		paragraphs = tableCell.getElementsByTagName("p");
		paragraphs[0].innerHTML = i;
		i++;
	} 
	while (i <= 31);
}

window.addEventListener("load", addColumnHeaders, false);
window.addEventListener("load", addCalendarDates, false);



