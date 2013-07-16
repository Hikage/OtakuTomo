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

chrome.app.runtime.onLaunched.addListener(function() {
	// TODO: Do stuff
});

chrome.runtime.onSuspend.addListener(function() { 
	// TODO: Do some simple clean-up tasks.
});