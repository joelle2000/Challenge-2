function dateToday() {
	var d = new Date();
	//UTC is the coordinated universal time
	var year = d.getUTCFullYear();
	var month = d.getUTCMonth() + 1; //+1 because javascripts starts with counting by 0 so januari would be 0 februari 1 etc..
	var day = d.getUTCDate(); 

	document.getElementById("date").innerHTML = year + "-" + month + "-" + day;
	var t = setTimeout(dateToday, 500); //evaluates if the date is correct every 500ms
}

/*
window.onload = function(){
  dateToday();
};

doesn't work because of the different js documents that'll overwrite each other
*/