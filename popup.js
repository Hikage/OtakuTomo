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

function displayResults(results){	
	var htmlHead = "<head><title>OtakuTomo Search Results</title></head>";
	var htmlBody = "<body>" + results + "</body>";
	
	var htmlCode = "<html>" + htmlHead + htmlBody + "</html>";
	var url = "data:text/html," + encodeURIComponent(htmlCode);
	
	chrome.tabs.create({url: url});
}

function processResults(resp){	
	var nodes = resp.getElementsByTagName("entry");
	var results = "";
	for(var i=0; i < nodes.length; i++){
		var title = nodes[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
		var imgurl = nodes[i].getElementsByTagName("image")[0].childNodes[0].nodeValue;
		var id = nodes[i].getElementsByTagName("id")[0].childNodes[0].nodeValue;
		
		results += "\n<div><b>" + title + "</b></div>";
		results += '\n<a href=\'http://myanimelist.net/anime/' + id + '\'><img src=\'' + imgurl + '\'/></a>';
		results += "<br><br>";
	}
	
	displayResults(results);
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
				if(request.status == 0){
					displayResults("Sorry, request status came back as zero :(");
				}
				if(request.status == 200){
					processResults(request.responseXML);
				}
				if(request.status == 204){
					displayResults("No results found");
				}
			}
		};
		
		request.overrideMimeType("text/xml");
        request.send();
	}
}

function submitHandler(event){
	var query = document.getElementById("textbox").value;
	if(query == "Enter anime title");
	else{
		getResults("http://myanimelist.net/api/anime/search.xml?q=" + query);
		event.preventDefault();
	}
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("form").onsubmit = submitHandler;
});



