$(function(){
	let request = $.ajax({
		method: 'GET',
		url: 'report2.json',
	});

	request.done(function(data){
		console.log(data);
	});

	request.fail(function(response){
		console.log('ERROR: ' + response.statusText);
	});
});