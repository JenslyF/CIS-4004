// Jensly Francisco
// 24 April 2018
// Dr. Mark Llewellyn


// Displays Current Date and Time
function writeDateAndTime() {
	document.write("Today is: " + Date());
}

// Hover
window.onload = init;

function init() 
{
	$('td').mouseenter(function() {
		$(this).css({'background-color':'yellow','color':'red'});
	}),
	$('td').mouseleave(function() {
		$(this).css({'background-color':'','color':''});
	});
}

// Comments
function countChars(textbox, counter, max) {
	var count = max - document.getElementById(textbox).value.length;
	
	if (count ==64 ) { 
		document.getElementById(counter).innerHTML = "<p style=\"color: green; text-align:center; font-size:small;\">Message limit <spanMessage limit \">" + count + "</span> characters</p>"; 
	}

	else { 
		document.getElementById(counter).innerHTML = "<p style=\"color: green; text-align:center; font-size:small;\"><span \">" + count +"</span> of 64 characters left</p>"; 
	}
	
	if(count < 0) {
		document.getElementById(counter).innerHTML = "<p style=\"color: red; text-align:center; font-size:small;\"><span \">" + count +"</span> of 64 characters left</p>"; 
	}
}