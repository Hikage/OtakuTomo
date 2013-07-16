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

/**
var query = 'kittens';

function popupAction() {
	var cx = '018373880543266522285:-8rnpoqzrd8';
	var gcse = document.createElement('script');
	gcse.type = 'text/javascript';
	gcse.async = true;
	gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
		'//www.google.com/cse/cse.js?cx=' + cx;
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(gcse, s);
}

function clickHandler() {
	var img = document.createElement('img');
    img.src = "tomo-256.png";
    img.setAttribute('alt', "Tomo256");
    document.body.appendChild(img);
    google.load('search','1');
}
**/
		/**
		searchOnGoogle_: 'https://www.googleapis.com/customsearch/v1?' +
	      'method=flickr.photos.search&' +
	      'api_key=90485e931f687a9b9c2a66bf58a3861a&' +
	      'text=' + encodeURIComponent(query) + '&' +
	      'safe_search=1&' +
	      'content_type=1&' +
	      'sort=interestingness-desc&' +
	      'per_page=20',
		**/
  /**
   * Sends an XHR GET request to grab photos of lots and lots of kittens. The
   * XHR's 'onload' event is hooks up to the 'showPhotos_' method.
   *
   * @public
   */
/**
requestKittens: function() {
    var req = new XMLHttpRequest();
    req.open("GET", this.searchOnFlickr_, true);
    req.onload = this.showPhotos_.bind(this);
    req.send(null);
  },
**/
  /**
   * Handle the 'onload' event of our kitten XHR request, generated in
   * 'requestKittens', by generating 'img' elements, and stuffing them into
   * the document for display.
   *
   * @param {ProgressEvent} e The XHR ProgressEvent.
   * @private
   */
/**
  showPhotos_: function (e) {
    var kittens = e.target.responseXML.querySelectorAll('photo');
    for (var i = 0; i < kittens.length; i++) {
      var img = document.createElement('img');
      img.src = this.constructKittenURL_(kittens[i]);
      img.setAttribute('alt', kittens[i].getAttribute('title'));
      document.body.appendChild(img);
    }
  },
**/
  /**
   * Given a photo, construct a URL using the method outlined at
   * http://www.flickr.com/services/api/misc.urlKittenl
   *
   * @param {DOMElement} A kitten.
   * @return {string} The kitten's URL.
   * @private
   */
/**
  constructKittenURL_: function (photo) {
    return "http://farm" + photo.getAttribute("farm") +
        ".static.flickr.com/" + photo.getAttribute("server") +
        "/" + photo.getAttribute("id") +
        "_" + photo.getAttribute("secret") +
        "_s.jpg";
  }
  **/


// Run our kitten generation script as soon as the document's DOM is ready.
//document.addEventListener('DOMContentLoaded', function(request, sender, sendResponse) {
	//document.querySelector('sa').addEventListener('click', clickHandler);
	//popupAction();
	//https://www.google.com/#output=search&sclient=psy-ab&q=kittens
	//document.getElementById('click-me').addEventListener('click', clickHandler);
//	if (request.method == "getSearchResults")
//		sendResponse(function(){data: window.getSelection().toString();});
//	else
//		sendResponse(function(){});	//do nothing
/**
chrome.runtime.onMessage.addListener(
		function(request, sender, sendResponse) {
			if (request.method == "getSearchResults")
				sendResponse({data: window.getSelection().toString()});
			else
				sendResponse({});	//do nothing
		}
);
//});
**/

/**
function onMessage(request, sendResponse) {
	var query = document.getElementById("textbox").value;
	sendResponse({msg: "Got: " + query});

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
**/

/**
function clickHandler() {
    chrome.extension.sendMessage(
    		{method: "getSearchResults"},
    		function(response){    	
    			alert("test!");//response.msg);
    			//this.close(); 					//close the popup when the background finishes processing request
    		}
	);
}
**/


function clickHandler(){
	var query = document.getElementById("textbox").value;
	var searchURL = 'http://myanimelist.net/anime.php?q=' + query;
	chrome.tabs.create({url: searchURL});
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("submitbtn").onclick = clickHandler;
});

//chrome.extension.onMessage.addListener(onMessage);



