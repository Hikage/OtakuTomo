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

function sendServiceRequest(inputText) {
	var searchURL = 'http://www.google.com/search?q=' + inputText;
	chrome.tabs.create({url: searchURL});
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

function onMessage(request, sender, sendResponse) {
	if (request.method == "getSearchResults"){
		var text = '';
        if(window.getSelection){
          text = window.getSelection();
        }else if(document.getSelection){
          text = document.getSelection();
        }else if(document.selection){
          text = document.selection.createRange().text;
        }
        text=text.toString();
		sendResponse(sendServiceRequest("kitten"));
	}
	else
		sendResponse({});	//do nothing
}

chrome.extension.onMessage.addListener(onMessage);