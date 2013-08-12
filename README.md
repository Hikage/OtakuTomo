![Alt text](https://github.com/Hikage/OtakuTomo/blob/master/tomo-128.png?raw=true) OtakuTomo
=========
Copyright © 2013 Brianna Shade  
bshade@pdx.edu  
Portland State University
  
This program is licensed under the "MIT License"  
Please see the file COPYING in the source distribution of this software for license terms.

*Disclaimer: This code is in the early stages of development and is not yet complete or functional (see Code Plan below for estimated progress)*
  
  
### About
This Chrome extension is designed to be an otaku (fan) tomo (friend), aiding in the search for web-based fansub streaming sites provided a given anime.  Users will be able to provide a series and optionally a season and/or episode, as well as specify English dub (official or fandubs) or Japanese with English subtitles (fansubs).  Tomo will then search for available sites providing the given series, ranked based on a number of criteria, including:  
*  Healthy videos (vs. broken links)  
*  Number of ads on site  
*  Popups detected  
*  Chat sidebars

Users will also be able to contribute to ratings based on experiences, improving accuracy with future recommendations.

Once options have been determined, they will be presented to the user.

Most recent stable code available at https://github.com/Hikage/OtakuTomo on master
  
  
### Code Plan
*  Basic:
  *  Establish extension (compl: 6/30)
  *  User input support, presenting Google search results (compl: 7/15 - changed to My Anime List results)
  *  Extract search results and present as multiple choice for user confirmation (compl: 8/7)
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
  
  
### License and Sharing
Full MIT license details available within COPYING
  
------------------------
*Last updated: 8/11/13*
