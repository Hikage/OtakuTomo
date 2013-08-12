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

function displayResults(body, results){	
	var htmlHead = "<head><title>OtakuTomo Search Results</title></head>";
	var htmlBody = body + results + "</body>";
	
	var htmlCode = "<html>" + htmlHead + htmlBody + "</html>";
	var url = "data:text/html," + encodeURIComponent(htmlCode);
	
	chrome.tabs.create({url: url});
}

function processResults(resp){	
	var nodes = resp.getElementsByTagName("entry");
	displayResults("Got here");
	var results = "";
	if(nodes == null){
		displayResults("Element \"entry\" does not exist");
	}
	else{
		for(var i = 0; i < nodes.length; i++){
			var title = nodes[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
			var imgurl = nodes[i].getElementsByTagName("image")[0].childNodes[0].nodeValue;
			var id = nodes[i].getElementsByTagName("id")[0].childNodes[0].nodeValue;
			
			results += "\n<div><b>" + title + "</b></div>";
			results += '\n<a href=\'http://myanimelist.net/anime/' + id + '\'><img src=\'' + imgurl + '\'/></a>';
			results += "<br><br>";
		}
		
		return results;
	}
}

function delayer(query){
    window.location = "http://myanimelist.net/anime.php?q=" + query;
}

function getResults(query){
	var searchURL = "http://otakutomo:hikage@myanimelist.net/api/anime/search.xml?q=" + query;
	var request = new XMLHttpRequest();
	var body = "<body";
	var pgtxt = "";
	
	if (request == null){
        pgtxt = "Unable to create request: " + searchURL;
    }	
	else{
		request.open("GET", searchURL, true);
		
		//request.overrideMimeType("text/xml");
        request.send();
		
		request.onreadystatechange = function(){
			if(request.readyState == 4){
				switch(request.status){
				case 200: pgtxt = processResults(request); break;
				case 204: pgtxt = "No results found"; break;
				case 0: pgtxt = "Sorry, request status came back as zero :("; break;
				case 401: pgtxt = "Not correctly logged in"; break;
				default: pgtxt = "Unknown request status: " + request.status;
				}
			}
			else{
				pgtxt = "Unknown readyState: " + request.readyState;
			}
		};
	}
	
	if(request.responseXML == null){
		pgtxt = "Sorry, but the response data was not well-formed.  Redirecting...";
		body += "onLoad=\"setTimeout('delayer(" + query + ")', 5000)\"";
	}
	
	body += ">";
	displayResults(body, pgtxt);
}

function submitHandler(event){
	var query = document.getElementById("textbox").value;
	if(query == "Enter anime title" || query == "");
	else{
		getResults(query);
		event.preventDefault();
	}
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("form").onsubmit = submitHandler;
});



