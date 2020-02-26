// var express = require('express');
// var app = express()

$(document).ready(function() {
	initializePage();
});

function initializePage() {
	$('#uploadPicture').click(function(res){
  		console.log("upload piciture");
  		// return res.redirect("sdf");
  		//$("#uploadPictureDiv").hide();
  		$(location).attr('href', '/image')
	});

	$('#WriteText').click(function(res){
  		console.log("upload piciture");
  		// return res.redirect("sdf");
  		//$("#uploadPictureDiv").hide();
  		$(location).attr('href', '/text')
	});

	$('#SeeHistories').click(function(res){
  		console.log("upload piciture");
  		// return res.redirect("sdf");
  		//$("#uploadPictureDiv").hide();
  		$(location).attr('href', '/history')
	});
}