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

function processResults(resp){	
	var htmlHead = "<head><title>OtakuTomo Search Results</title></head>";
	
	//var root = request.responseXML;
	//var results = root;
	var htmlBody = "<body>" + resp + "</body>";
	
	var htmlCode = "<html>" + htmlHead + htmlBody + "</html>";
	var url = "data:text/html," + encodeURIComponent(htmlCode);
	
	chrome.tabs.create({url: url});
	
	//chrome.tabs.create({url: chrome.extension.getURL('results.html')});
	//var pics = root.getElementsByTagName("image");
	//chrome.tabs.create({url: 'http://cdn.myanimelist.net/images/anime/6/7632.jpg'});
}

function getResults(searchURL){
	//chrome.tabs.create({url: searchURL});

	var request = new XMLHttpRequest();
	if (request == null){
        processResults("Unable to create request");
    }
	else{
		request.open("GET", searchURL, true);
		
		request.onreadystatechange = function(){
			if(request.readyState == 4){
				//if (request.status == 200) {
					//processResults("Sending stuff...");
					processResults(request.status);
				//}
			}
		};
		
		//request.overrideMimeType('text/xml');
        request.send();
	}
}

function clickHandler(){
	var query = document.getElementById("textbox").value;
	getResults('http://myanimelist.net/api/anime/search.xml?q=' + query);
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("submitbtn").onclick = clickHandler;
});



