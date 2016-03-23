# Features

## Version 1

* Android app with fixed screen size (Nexus 5)
* Read-only access to discussions
   * All discussions
   * By category
   * My discussions
   * Bookmarks
   * Note: listing comments on a discussion looks like it requires a new API
* Read-only access to account data for logged in user
* Mark post(s) as read
* Log in
   * Optionally store authentication credentials locally
* Star / unstar discussion
* WOW / LoL / Wis comment
* Notification list
* Open links in native browser

## Version 2

* Help screen
   * Easy link to "Start here" category
* Flag discussion
* WYSIWIG editor
* Post new discussion
* Edit existing discussion
* Post new comment
* Access to "my drafts"
* Edit existing comment
* Read-only access to messages
* Send messages
* Edit access to account data for logged in user (e.g. edit signature)
* Read-only access to account data for other users
* Basic search (keywords only)

## Future

* iOS app
* UIs tailored for different screen sizes
* Advanced search
* Native notification integration
* Infinite scrolling (requires new API)
* Opportunistic full screen
* Accessibility
* Raw HTML editor
* Hide / show category
* Hide / show discussion ?
* Ignore user
* Social integration ("share this to FB / Twitter")
* For sale template (single item per post)
* For sale template (multiple items in a single post)
* Mark item as sold (requires new API)
* Integration with photo-sharing apps
* Open by URL
* Who's online


## Never

* Localisation
   * Since the content is in English, it seems pointless internationalizing the UI


# Development process

## Resources

* Does TheFB have any of the following we can use?
   * File storage (drive / dropbox)
   * Version control server
   * Code review server
   * Bug tracker


* How is access to the development server controlled?


* How is the web interface tested?  Could we reuse any existing infrastructure for testing the app?


* Do we want to open source the app?
   * Might we ever want to charge for it (e.g. freemium)?  If so, need to ensure licences of any dependencies allow it.


# Misc

* To what extent has theFB branched Vanilla?
* Are we OK with extending the REST API?
   * For example, adding "get comments for discussion"
* To what extent should we try to separate the front-end of the app from the Vanilla-facing backend?
