![Alt text](https://github.com/Hikage/OtakuTomo/blob/master/tomo-128.png?raw=true) OtakuTomo
=========
Copyright © 2013 Brianna Shade  
bshade@pdx.edu  
Portland State University
  
This program is licensed under the "MIT License"  
Please see the file COPYING in the source distribution of this software for license terms.

*Disclaimer: This code is in the early stages of development and is not yet complete (see Code Plan below for estimated progress)*
  
  
### About
This Chrome extension is designed to be an otaku (fan) tomo (friend), aiding in the search for web-based fansub (subtitled anime) streaming sites provided a given anime.  Users will be able to provide a series and optionally a season and/or episode, as well as specify English dub (official or fandubs) or Japanese with English subtitles (fansubs).  Tomo will then search for available sites providing the given series, ranked based on a number of criteria, including:  
*  Healthy videos (vs. broken links)  
*  Number of ads on site  
*  Popups detected  
*  Chat sidebars

Users will also be able to contribute to ratings based on experiences, improving accuracy with future recommendations.

Once options have been determined, they will be presented to the user for the final selection.

Most recent stable code available at https://github.com/Hikage/OtakuTomo on master (only stable versions of the code have been committed).
  

### Build Instructions
# Download the most recent code from the GitHub location above into a directory on your local machine
# Within Chrome (version 19 or above), go to Tools -> Extensions from Chrome's "control" button, or navigate to chrome://extensions
# Be sure "Developer Mode" is selected, then click "Load Unpacked Extension"
# Choose the directory containing the source code
# You will now have a new icon next to your omnibar - a smaller version of the "tomo" icon in this README document.  The extension is set and ready to use.  When making changes with the source code, be sure to "Reload" the extension on this page to apply the changes

  
### Code Plan
*  Basic:
  *  Establish extension (compl: 6/30/13)
  *  User input support, presenting Google search results (compl: 7/15/13 - changed to My Anime List results)
  *  Extract search results and present as multiple choice for user confirmation (compl: 8/7/13)
  *  Search for fansub URLs based on selected anime
  *  Present top 5 fansub URL results within extension popup
  *  Result tuning (only sites with valid videos, not matching other episodes of the series, etc)
*  Website:
  *  Establish website with database back-end to store site stats and rankings for improved search results
  *  Support for new record entries/modifications
*  Stats:
  *  Detect site stats (sidebar ads/chat, etc)
*  Advanced features
  

### Optional Enhancements  
*  Automatically queuing up the selected video, bypassing any pre-video ads
*  Prompting the user to advance to the next episode in the series
*  Alternatively automatically bookmarking the next episode to resume at a later date
  

### Development Challenges  
This project is currently facing several challenges:
*  While I am intimately familiar with Java, I have no experience with JavaScript.  This has been an adventure in learning the nuances, including nested functions and message handling.
*  Learning Google's API for Chrome extensions is new for this developer.  One hurdle is discovering what can reside in the main JavaScript code and one must reside in the background page to be accessed via messaging.
  *  Chrome extensions do not allow for any JavaScript to reside in the popup HTML code - it must all be segregated into its own .js file.
  *  I have read that Chrome extensions do not support JQuery - this is as yet unconfirmed, but I have stayed away from JQuery as a result.  As I am unfamiliar with JavaScript, I have also not worked with JQuery and have yet to test it out with extensions.
  *  Popups (usually the primary interface for extensions) do not allow for alert boxes.  This is a known Chrome extension bug and makes debugging more difficult.
*  This extension interacts primarily with MyAnimeList.com (MAL).  Their API is still rudementary, unpolished, and not without its quirks.  The major error discovered is in how MAL's API returns search result XML nodes.  These contain un-escaped HTML encodings instead of straight unicode, which XML does not recognize as valid XML.  Therefore JavaScript's XML parser chokes, rendering the results unuseable for this extension.  This seems to occur in at least 50% of anime searches - any that would return results containing a special character in either the title or description (fract12, eacute, agrave, etc).  Bug report 0000246 has been submitted to MAL at http://malupdater.com/MalUpdater/bugs to address.  My remaining choices are to somehow handle the bad XML data (accounting for every possible special character) or to not use the results.  I have currently implemented the latter, redirecting the user directly to MAL if bad XML is returned.


### Currently Working On / Next Steps
*  Redirect page for bad XML data returned by MAL - currently bypasses initial notification page and goes straight to MAL
*  Tie user selection into a fansub site search, instead of simply directing to the MAL page

  
### License and Sharing  
Full MIT license details available within COPYING
  
------------------------
*Last updated: 8/16/13*
