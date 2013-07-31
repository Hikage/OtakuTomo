/**
 * "OtakuTomo"
 * Copyright © 2013 Brianna Shade
 * bshade@pdx.edu
 * 
 * This program is licensed under the "MIT License"
 * Please see the file COPYING in the source distribution of this software for license terms.
 *
 * popup.js
 * TODO details on this class
 */

function getResults(searchURL){
	//chrome.tabs.create({url: searchURL});

	var xhr = new XMLHttpRequest();
	xhr.open('GET', searchURL);
	xhr.overrideMimeType('text/xml');
	xhr.send(null);
	
	var htmlHead = "<head><title>OtakuTomo Search Results</title></head>";
	
	var root = xhr.responseXML;
	var results = root;
	var htmlBody = "<body>" + results + "</body>";
	
	var htmlCode = "<html>" + htmlHead + htmlBody + "</html>";
	var url = "data:text/html," + encodeURIComponent(htmlCode);
	
	chrome.tabs.create({url: url});
	
	//chrome.tabs.create({url: chrome.extension.getURL('results.html')});
	//var pics = root.getElementsByTagName("image");
	//chrome.tabs.create({url: 'http://cdn.myanimelist.net/images/anime/6/7632.jpg'});
}

function clickHandler(){
	var query = document.getElementById("textbox").value;
	getResults('http://myanimelist.net/api/anime/search.xml?q=' + query);
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("submitbtn").onclick = clickHandler;
});



