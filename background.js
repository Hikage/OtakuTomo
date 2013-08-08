/**
 * "OtakuTomo"
 * Copyright © 2013 Brianna Shade
 * bshade@pdx.edu
 * 
 * This program is licensed under the "MIT License"
 * Please see the file COPYING in the source distribution of this software for license terms.
 *
 * background.js
 * TODO details on this class
 */

function sendServiceRequest(inputText, sendResponse) {
	var searchURL = 'http://www.google.com/search?q=' + inputText;
	chrome.tabs.create({url: searchURL});
	sendResponse({msg: "Query executed successfully"});
}

function clickHandler(){
	alert("Reached clickHandler");
	//var query = document.getElementById("textbox").value;
	//var searchURL = 'http://myanimelist.net/anime.php?q=' + query;
	//chrome.windows.create({'url': 'http://myanimelist.net/'});
}

function onMessage(request, sendResponse) {
	var query = document.getElementById("textbox").value;
	alert("Got: " + query);
	
	if (request.method == "getSearchResults"){
		var query = document.getElementById("textbox").value;
		alert("Got: " + query);
	}
	else
		sendResponse({msg: "Request other than getSearchResults received: " + request.method});
}

//chrome.runtime.onSuspend.addListener(function() { 
	// TODO: Do some simple clean-up tasks.
//});
