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

/**
function delayer(){
    chrome.tabs.update({url: "http://myanimelist.net/"}); //anime.php?q=" + query);
	//var url = "http://myanimelist.net/";
	//chrome.tabs.create({url: url});
}
**/

function getResults(query){
	var searchURL = "http://otakutomo:hikage@myanimelist.net/api/anime/search.xml?q=" + query;
	var body = "<body>";
	var pgtxt = "";
	
	var request = new XMLHttpRequest();
	if (request == null){
        displayResults(body, "Unable to create request");
    }
	else{
		request.open("GET", searchURL, true);
		
		request.onreadystatechange = function(){
			if(request.readyState == 4){
				if(request.responseXML == null && request.responseText != ""){
					//body = "<body onLoad=\"setTimeout('delayer()', 1000)\">";
					pgtxt = "Sorry, response data was not correctly formatted.  Redirecting...";
					//setTimeout(5000);
					setTimeout(function() {chrome.extension.sendRequest({redirect: "http://myanimelist.net/"});}, 1000);
				}				
				else{
					switch(request.status){
					case 200: pgtxt = processResults(request.responseXML); break;
					case 204: pgtxt = "No results found for: " + query; break;
					case 0: pgtxt = "Sorry, request status came back as zero :("; break;
					case 401: pgtxt = "Not correctly logged in"; break;
					default: pgtxt = "Unknown request status: " + request.status;
					}
				}
				
				displayResults(body, pgtxt);
			}
		};
		
		request.overrideMimeType("text/xml");
        request.send();
	}
	
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



