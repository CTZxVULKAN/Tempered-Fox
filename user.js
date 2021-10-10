// -------------------------------------------
//  SECTION : COOKIES AND HISTORY
// -------------------------------------------

// Enable strict mode
user_pref("network.cookie.cookieBehavior", 5);

// Delete cookies on exit
user_pref("network.cookie.lifetimePolicy", 2); 

// Make third party and http cookies session-only
user_pref("network.cookie.thirdparty.sessionOnly", true);
user_pref("network.cookie.thirdparty.nonsecureSessionOnly", true);

// Increase time between session saves
user_pref("browser.sessionstore.privacy_level", 2);
user_pref("browser.sessionstore.interval", 60000); 

// disable browsing, search and form history
user_pref("places.history.enabled", false);
user_pref("browser.formfill.enable", false);

// Delete everything in history on exit, except saved login info, site settings and user defined exceptions.
user_pref("privacy.clearOnShutdown.cache", true);
user_pref("privacy.clearOnShutdown.cookies", true);
user_pref("privacy.clearOnShutdown.downloads", true);
user_pref("privacy.clearOnShutdown.formdata", true);
user_pref("privacy.clearOnShutdown.history", true);
user_pref("privacy.clearOnShutdown.offlineApps", true);

user_pref("privacy.clearOnShutdown.passwords", false);
user_pref("privacy.clearOnShutdown.sessions", false);
user_pref("privacy.clearOnShutdown.openWindows", false);
user_pref("privacy.clearOnShutdown.siteSettings", false);

user_pref("privacy.sanitize.sanitizeOnShutdown", true);

user_pref("privacy.sanitize.timeSpan", 0);  // Set time range to "Everything" as default in "Clear Recent History"


// -------------------------------------------
//  SECTION : NETWORK
// -------------------------------------------

// Force HTTPS over HTTP on  all windows
user_pref("dom.security.https_only_mode", true); 

// Disable cross-origin HTTP authentication
user_pref("network.auth.subresource-http-auth-allow", 1); 

// Block insecure passive content
user_pref("security.mixed_content.block_display_content", true); 

// Disable ipv6
user_pref("network.dns.disableIPv6", true); 

// XOrigin referer
user_pref("network.http.referer.XOriginPolicy", 2); 
user_pref("network.http.referer.XOriginTrimmingPolicy", 2); 

// Use punycode
user_pref("network.IDN_show_punycode", true); 

// Proxy over DNS queries
user_pref("network.proxy.socks_remote_dns", true); 
user_pref("network.gio.supported-protocols", ""); 

// Skip undesired DNS connection test.
user_pref("network.trr.confirmationNS", "skip"); 

// Prefetching
user_pref("network.dns.disablePrefetch", true); 
user_pref("network.predictor.enabled", false); 
user_pref("network.prefetch-next", false);
user_pref("network.http.speculative-parallel-limit", 0); 


// Disable pinging URIs specified in HTML
user_pref("browser.send_pings", false);
user_pref("browser.send_pings.require_same_host",true);

// Optimise SSL
user_pref("security.ssl.require_safe_negotiation",true);

// TLS
user_pref("security.tls.version.min", 3);
user_pref("security.ssl.enable_false_start",false);

// Improve forward secrecy
user_pref("security.tls.enable_0rtt_data" false);

// Prevent network information leakage via javascript 
user_pref("dom.netinfo.enabled",false);
user_pref("network.allow-experiments",false);

// Disable firefox from detecting online/offline status
user_pref("network.connectivity-service.enabled" false);
user_pref("network.manage-offline-status" false);



// -------------------------------------------
//  SECTION : DOM & APIs
// -------------------------------------------

// Disable service workers
user_pref("dom.serviceWorkers.enabled", false); 

// Disable webassembly
user_pref("javascript.options.wasm", false);

// Disable web-notifications
user_pref("dom.webnotifications.enabled",	false);

// Prevent sripts from interacting with open windows.
user_pref("dom.disable_window_move_resize", true);

// Disable DOM timing & performance APIs
user_pref("dom.enable_performance",	false);
user_pref("dom.enable_user_timing",	false);
user_pref("dom.enable_resource_timing", false)

// Disable Network API
user_pref("dom.network.enabled", false)

// Disable battery API
user_pref("dom.battery.enabled", false);

//  Disable webaudio API
user_pref("dom.webaudio.enabled",	false);

//  Disable geolocation
user_pref("geo.enabled",					false);
user_pref("geo.wifi.uri", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");
user_pref("geo.wifi.logging.enabled", false);
user_pref("geo.provider.use_gpsd", false);
user_pref("geo.provider.use_corelocation", false);
user_pref("geo.provider.ms-windows-location", false);

// Disable raw TCP socket support
user_pref("dom.mozTCPSocket.enabled",	false);

// Disable telephony API
user_pref("dom.telephony.enabled", false);

// Disable sensor API
user_pref("device.sensors.enabled",	false);

// Disable gamepad API
user_pref("dom.gamepad.enabled", false);

// Prevent font emmuration
// user_pref("browser.display.use_document_fonts", 0);

// Disable VR APIs
user_pref("dom.vr.enabled", false);

// Disable vibrator API
user_pref("dom.vibrator.enabled", false);



// -------------------------------------
//  SECTION : CACHE AND TEMPORARY FILES
// -------------------------------------


user_pref("browser.cache.disk.enable", false);     // disable disk cache
user_pref("browser.cache.disk_cache_ssl", false);  // disable Caching of SSL Pages
user_pref("browser.cache.memory.enable", false);   // disable memory cache
user_pref("browser.cache.offline.enable", false);  // do not download URLs for the offline cache
user_pref("browser.cache.insecure.enable", false); // do not cache insecure sites

user_pref("browser.privatebrowsing.forceMediaMemoryCache", true); // block media cache from writing to disk in private browsing mode
user_pref("media.memory_cache_max_size", 65536); // increase max cache size to avoid playback issues caused by above setting

user_pref("browser.shell.shortcutFavicons", false); // disable shortcut favicons from being stored in profile
user_pref("browser.helperApps.deleteTempFileOnExit", true); // delete temporary files opened with external apps
user_pref("browser.pagethumbnails.capturing_disabled", true); // disable page thumbnails capturing



// ----------------------
//   SECTION : MEDIA
// ----------------------


// disable webrtc
use_pref("media.peerconnection.enabled", false); // master switch

// limit potential IP leaks for webrtc users
user_pref("media.peerconnection.ice.default_address_only", true); // use public IP for ICE candidates
user_pref("media.peerconnection.ice.no_host", true); // don't use local IP for ICE candidates
user_pref("media.peerconnection.ice.proxy_only_if_behind_proxy", true); // force webrtc inside proxy for proxy users

// prevent capture of local camera and microphone streams
user_pref("media.navigator.enabled",	false);
user_pref("media.navigator.video.enabled",	false);
user_pref("media.getusermedia.screensharing.enabled",	false);
user_pref("media.getusermedia.audiocapture.enabled",	false);

// disable speech recognition and sysnthesis
user_pref("media.webspeech.recognition.enable",			false);
user_pref("media.webspeech.synth.enabled",			false);

// disable face detection
use_pref("camera.control.face_detection.enabled", false);

// autoplay
user_pref("media.autoplay.blocking_policy", 2); // only allow to play when a certain element is clicked
user_pref("media.autoplay.default", 5); // personal preference, currently apply blocking policy to all autplay including muted



// -----------------------
//    SECTION : DRM
// -----------------------

user_pref("media.eme.enabled", false); // disable drm content, master switch that also controls widevine plugin
user_pref("media.gmp-manager.url", "data:text/plain,"); // prevent outgoing connections when DRM is disabled

// disable the openh264 plugin
user_pref("media.gmp-provider.enabled", false);
user_pref("media.gmp-gmpopenh264.enabled", false);
user_pref("media.gmp-manager.url",	""); // disable auto download of OpenH264 codec

user_pref("media.gmp-widevinecdm.enabled", false); // prevent auto download of google's content decryption module.



// -----------------------------
//    SECTION : FINGERPRINTING
// -----------------------------

user_pref("privacy.resistFingerprinting", true); // allow firefox to take measures to resist fingerprinting

// rfp compatibility settings
user_pref("privacy.resistFingerprinting.block_mozAddonManager", true); // prevents rfp from breaking AMO
user_pref("browser.startup.blankWindow", false); // if set to true it breaks RFP windows resizing
user_pref("browser.display.use_system_colors", false); // default but enforced due to RFP

user_pref("privacy.resistFingerprinting.letterboxing", true); // allow letterboxing (prevents disclosing actual screensize)

user_pref("media.video_stats.enabled", false); // disable media stats to prevent fingerprinting

// dont reveal build id
user_pref("general.buildID.override",				"20100101");
user_pref("browser.startup.homepage_override.buildID",		"20100101");

// Disable webgl
user_pref("webgl.disabled",	true);

user_pref("webgl.min_capability_mode", true); // When webGL is enabled, use the minimum capability mode
user_pref("webgl.disable-extensions",	true); // When webGL is enabled, disable webGL extensions
user_pref("webgl.disable-fail-if-major-performance-caveat",	true); //  When webGL is enabled, force enabling it even when layer acceleration is not supported
user_pref("webgl.enable-debug-renderer-info",	false); // When webGL is enabled, do not expose information about the graphics driver
