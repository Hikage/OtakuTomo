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

/**
chrome.browserAction.onClicked.addListener(function(tab) {
chrome.tabs.sendMessage(
		tab.id,
		{method: "getSearchResults"},
		function(response){
			sendServiceRequest(response.data);
		}
);
});
**/

function sendServiceRequest(inputText, sendResponse) {
	var searchURL = 'http://www.google.com/search?q=' + inputText;
	chrome.tabs.create({url: searchURL});
	sendResponse({msg: "Query executed successfully"});
}

function newTab(tab){
	chrome.tabs.sendMessage(
			tab.id,
			{method: "getSearchResults"},
			function(response){
				sendServiceRequest(response.data);
			}
	);
}

function onMessage(request, sendResponse) {
	var query = document.getElementById("textbox").value;
	alert("Got: " + query);
	
	if (request.method == "getSearchResults"){
		//var query = document.forms["s"]["q"].value;
		//var query = window.getSelection().toString();
		//sendServiceRequest(query, sendResponse);
		//var query = document.forms.item(0);
		var query = document.getElementById("textbox").value;
		alert("Got: " + query);
	}
	else
		sendResponse({msg: "Request other than getSearchResults received: " + request.method});
}

chrome.extension.onMessage.addListener(onMessage);