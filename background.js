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


function clickHandler(){
	alert("Reached clickHandler");
	//var query = document.getElementById("textbox").value;
	//var searchURL = 'http://myanimelist.net/anime.php?q=' + query;
	//chrome.windows.create({'url': 'http://myanimelist.net/'});
}

chrome.app.runtime.onLaunched.addListener(function () {
	chrome.app.window.create('OtakuTomo.html');
	//alert("Do something!");
    document.getElementById("submitbtn").onclick = clickHandler;
});

//chrome.runtime.onSuspend.addListener(function() { 
	// TODO: Do some simple clean-up tasks.
//});