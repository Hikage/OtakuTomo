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

function sendServiceRequest(inputText) {
	var searchURL = 'http://www.google.com/search?q=' + inputText;
	chrome.tabs.create({url: searchURL});
}

chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.sendMessage(
			tab.id,
			{method: "getSearchResults"},
			function(response){
				sendServiceRequest(response.data);
			}
	);
});