$.getJSON("https://wave.webaim.org/api/request?key=M1t7wpxB1455&url=https://www.philasd.org/",function(data) {
	//console.log(data);

	// save name of URL that was tested
	let pageTested = data.statistics.pageurl;

	// save URL of visual accessibility report
	let visualReportURL = data.statistics.waveurl;
	
	// variables to save error counts by category
	let generalErrors = data.categories.error.count;
  	let contrastErrors = data.categories.contrast.count;
  	let alertIssues = data.categories.alert.count;
  	let featureIssues = data.categories.feature.count;
  	let structureItems = data.categories.structure.count;
  	let ariaIssues = data.categories.aria.count;

  	// display URL of page that was evaluated
	$('#pagetested').append(pagetested);

	// display URL for visual evaluation report
	$('#visualreport').append('<a href=/"' + visualReportURL + '/">' + visualReportURL + '</a>');

	// display error counts
	$('#generalerrors').append(generalErrors);
	$('#contrasterrors').append(contrastErrors);
	$('#alerterrors').append(alertIssues);
	$('#featureerrors').append(featureIssues);
	$('#structureerrors').append(structureItems);
	$('#ariaerrors').append(ariaIssues);
});