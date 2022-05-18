"use strict";

fetch("data/response-report1.json")
	.then(function(resp) {
		return resp.json();
	})
	.then (function(data) {
		console.log(data)
	});