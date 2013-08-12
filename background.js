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

chrome.extension.onRequest.addListener(function(request, sender) {
    chrome.tabs.update({url: request.redirect});
});
