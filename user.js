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



// -------------------------------------------
//  SECTION : NETWORK
// -------------------------------------------

// Force HTTPS over HTTP on  all windows
defaultPref("dom.security.https_only_mode", true); // only allow https in all windows, including private browsing

// Disable cross-origin HTTP authentication
defaultPref("network.auth.subresource-http-auth-allow", 1); 

// Block insecure passive content
defaultPref("security.mixed_content.block_display_content", true); 

// Disable ipv6
defaultPref("network.dns.disableIPv6", true); 

// XOrigin referer
defaultPref("network.http.referer.XOriginPolicy", 2); // Send Referer only when the full hostnames match
defaultPref("network.http.referer.XOriginTrimmingPolicy", 2); // trim referer to only send scheme, host and port

// Use punycode
defaultPref("network.IDN_show_punycode", true); // use punycode in idn to prevent spoofing

// Proxy over DNS queries
defaultPref("network.proxy.socks_remote_dns", true); // forces dns query through the proxy when using one
defaultPref("network.gio.supported-protocols", ""); // disable gio as it could bypass proxy

// Skip undesired DNS connection test.
defaultPref("network.trr.confirmationNS", "skip"); // skip undesired doh test connection

// prefetching
defaultPref("network.dns.disablePrefetch", true); // disable dns prefetching
lockPref("network.predictor.enabled", false); // disable predictor
lockPref("network.prefetch-next", false); // disable link prefetching
lockPref("network.http.speculative-parallel-limit", 0); // disable prefetching on mouse over

