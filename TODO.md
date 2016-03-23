# TODO

This file captures miscellaneous TODO items which are not recorded in the REQUIREMENTS.md file.

## Definitely

* "Dev build" Flag
   * Show a message on the login screen
   * Use dev server URL
* SceneLogin
   * Replace SceneSplash
   * Add status message under spinner (e.g. "Logging in"; "Log in failed")
   * "Remember me" checkbox
* Store application-wide state (e.g. login status) in App object
* Add navigation methods (e.g. goToCategory(...)) to App object
* Keep some context on screen when showing spinner (e.g. when navigating between pages)
* Wait for a short time before showing the scene spinner
* Instead of inheriting from ListViewXxx, it should be instantiated via the parent component's render() function.
* API timeout / cancel
* Handle API errors
* Gesture-based navigation (e.g. swipes) between pages
* Jump to page
* Version management
   * Do we need a way to show the version in the app UI, or do we rely on the platform package manager for accessing the version?

## Maybe

* "Send feedback" (for use during beta testing)
* Pre-load previous and next pages in background
