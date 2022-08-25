A small script to that opens a video from [Scruffy's Animal Crossing: Taking Root](https://www.youtube.com/playlist?list=PLQY6PNl6p3MYWVZa5R5Emdi-CxgM40Scm) playlist synced at the current time of day.

Tested on Google Chrome version 104.0.5112.102

# How to use
No need to download or clone the repo.

Add a new page in your bookmarks, add "javascript:" to its url, and then copy paste the content of [syncTakingRoot.min.js](syncTakingRoot.min.js?raw=true) after it.

Then clicking on the bookmark should either jump to the right video, or if you're already on it, change the timestamp to the right time.

![screenshot](EditBookmark.png?raw=true)

# Issues
Bookmarklets won't execute one Google Chrome's "New Tab" page, so either open the bookmark in a new tab/window, or open a new tab first and then click on the bookmark.
https://stackoverflow.com/a/56794455/2692695
