$.getJSON("https://wave.webaim.org/api/request?key=M1t7wpxB1455&url=https://www.philasd.org/",function(data) {
	//console.log(data);

	// name of URL that was evaluated
	let pageTested = data.statistics.pageurl;

	// name of URL for visual report
	let visualURL = data.statistics.waveurl;
	
	let errorCategoryName = "";
	let errorCategoryCount = "";
	let errorDescription = "";
	let errorDescriptionCount = "";

	// counter variable
	let i = "";
	//console.log(pageTested);

	// display URL that was evaluated
	//$('#pagetested').append(pageTested);
	document.getElementById("pagetested").append(pageTested);

	// display URL for visual report
	//$(/'#visualreport').append(visualURL);
	document.getElementById("visualreport").append(visualURL);
	document.getElementById("visualreport").innerHTML += ("a href=/" + visualURL + "/"">");

	// loop through error categories list (outer elements)
	for (i in data.categories) {
		errorCategoryName = data.categories[i].description;
		errorCategoryCount = data.categories[i].count;
		document.getElementById("report").append(errorCategoryName);
		document.getElementById("report").append(" = " + errorCategoryCount);		
		document.getElementById("report").innerHTML += "<p>";
	}

	console.log(data.statistics.creditsremaining + " API credits remaining");
});