// -------------------------------------------
//  SECTION : COOKIES AND HISTORY
// -------------------------------------------


defaultPref("network.cookie.cookieBehavior", 5); // dFPI, same as strict mode
defaultPref("network.cookie.lifetimePolicy", 2); // keep cookies until the browser is closed then delete everything minus exceptions

// make third party and http cookies session-only
defaultPref("network.cookie.thirdparty.sessionOnly", true);
defaultPref("network.cookie.thirdparty.nonsecureSessionOnly", true);

/**
 This way of sanitizing would override the exceptions set by the users and just delete everything,
 therefore we tell it to delete everything but ignore data needed to stay logged into websites set
 manually as exceptions.
*/
defaultPref("privacy.clearOnShutdown.cookies", false);
defaultPref("privacy.clearOnShutdown.offlineApps", false);
defaultPref("privacy.sanitize.sanitizeOnShutdown", true);

// disable browsing, search and form history
defaultPref("places.history.enabled", false);
defaultPref("browser.formfill.enable", false);

// prevent websites from storing session data like cookies and forms, increase time between session saves
defaultPref("browser.sessionstore.privacy_level", 2);
defaultPref("browser.sessionstore.interval", 60000);
