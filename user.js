// -------------------------------------------
//  SECTION : COOKIES AND HISTORY
// -------------------------------------------

// Enable strict mode
defaultPref("network.cookie.cookieBehavior", 5); // dFPI, same as strict mode

// Delete cookies on exit
defaultPref("network.cookie.lifetimePolicy", 2); // keep cookies until the browser is closed then delete everything minus exceptions

// Make third party and http cookies session-only
defaultPref("network.cookie.thirdparty.sessionOnly", true);
defaultPref("network.cookie.thirdparty.nonsecureSessionOnly", true);

// Increase time between session saves
defaultPref("browser.sessionstore.privacy_level", 2);
defaultPref("browser.sessionstore.interval", 60000); // prevent websites from storing session data like cookies and forms by increasing time between session saves

// disable browsing, search and form history
defaultPref("places.history.enabled", false);
defaultPref("browser.formfill.enable", false);

// Delete everything in history on exit, except saved login info, site settings and user defined exceptions.
defaultPref("privacy.clearOnShutdown.cache", true);
defaultPref("privacy.clearOnShutdown.cookies", true);
defaultPref("privacy.clearOnShutdown.downloads", true);
defaultPref("privacy.clearOnShutdown.formdata", true);
defaultPref("privacy.clearOnShutdown.history", true);
defaultPref("privacy.clearOnShutdown.offlineApps", true);

defaultPref("privacy.clearOnShutdown.passwords", false);
defaultPref("privacy.clearOnShutdown.sessions", false);
defaultPref("privacy.clearOnShutdown.openWindows", false);
defaultPref("privacy.clearOnShutdown.siteSettings", false);

defaultPref("privacy.sanitize.sanitizeOnShutdown", true);


