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

//  disable storing extra session data
user_pref("browser.sessionstore.privacy_level", 2); 

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
user_pref("privacy.clearOnShutdown.sessions", true);
user_pref("privacy.clearOnShutdown.openWindows", true);

user_pref("privacy.clearOnShutdown.passwords", false);
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
user_pref("media.webspeech.recognition.enable",	false);
user_pref("media.webspeech.synth.enabled", false);

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
user_pref("media.gmp-manager.url", ""); // disable auto download of OpenH264 codec

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
user_pref("general.buildID.override",	"20100101");
user_pref("browser.startup.homepage_override.buildID", "20100101");

// Disable webgl
user_pref("webgl.disabled",	true);

user_pref("webgl.min_capability_mode", true); // When webGL is enabled, use the minimum capability mode
user_pref("webgl.disable-extensions",	true); // When webGL is enabled, disable webGL extensions
user_pref("webgl.disable-fail-if-major-performance-caveat",	true); //  When webGL is enabled, force enabling it even when layer acceleration is not supported
user_pref("webgl.enable-debug-renderer-info",	false); // When webGL is enabled, do not expose information about the graphics driver




// --------------------------------
//  SECTION : SECURITY
// --------------------------------

// certificates
use_pref("security.cert_pinning.enforcement_level", 2); // enable strict public key pinning
use_pref("security.pki.sha1_enforcement_level", 1); // disable sha-1 certificates
use_pref("security.OCSP.enabled", 0); // disable OCSP fetching

// safe negotiation
use_pref("security.ssl.require_safe_negotiation", true); // block websites that do not support safe negotiation, occasional breakage
use_pref("security.ssl.treat_unsafe_negotiation_as_broken",	true); // show warning when safe negotiation is not enable and website is accessed
user_pref("security.tls.enable_0rtt_data" false); // improve forward secrecy

// tls behavior
user_pref("security.tls.version.min", 3); // use tls v3 and up
user_pref("security.ssl.enable_false_start",false);
use_pref("security.tls.enable_0rtt_data", false); // disable 0 round trip time to improve tls 1.3 security
use_pref("security.tls.version.enable-deprecated", false); // default but helps resetting the preference
use_pref("browser.ssl_override_behavior", 1); // prepopulate url on ssl warning screens
use_pref("browser.xul.error_pages.expert_bad_cert", true); // advanced ui infos for broken connections

// permissions
use_pref("permissions.delegation.enabled", false); // force permission request to show the real origin
use_pref("permissions.manager.defaultsUrl", ""); // revoke special permissions from some mozilla domains

use_pref("gfx.font_rendering.opentype_svg.enabled", false); // disale svg opentype fonts

use_pref("browser.download.useDownloadDir", false); // force user interaction on downloads, by always asking location

use_pref("security.csp.enable", true); // default

// Enforce Mixed Active Content Blocking
user_pref("security.mixed_content.block_active_content",	true);
user_pref("security.mixed_content.block_display_content",	true);

// Enable First Party Isolation
user_pref("privacy.firstparty.isolate",				true);

// Enable Do not track
user_pref("privacy.donottrackheader.enabled", true);

user_pref("network.jar.open-unsafe-types", false); // Disable JAR from opening Unsafe File Types
user_pref("security.xpconnect.plugin.unrestricted",	false); // Disable Scripting of Plugins by JS
user_pref("browser.urlbar.filter.javascript",	true); //  Disable Displaying Javascript in History URLs
user_pref("security.fileuri.strict_origin_policy", true); // Set File URI Origin Policy




// ------------------------------------
//  SECTION : NEW TAB PAGE
// ------------------------------------

user_pref("browser.newtab.preload", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeDownloads", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeVisited", false);
user_pref("browser.newtabpage.activity-stream.feeds.topsites",	false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeBookmarks",	false);


// blank homepage
user_pref("browser.startup.page", 0);

// blank newtabs
user_pref("browser.newtabpage.enabled", false);

// hide pocket and sponsored content, from new tab page and search bar
user_pref("extensions.pocket.enabled",false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket",	false);
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.section.highlights.includePocket",	false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories",	false);
user_pref("browser.newtabpage.activity-stream.feeds.system.topstories",	false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories.options", "{\"hidden\":true}"); // hide buggy pocket section from about:preferences#home
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.newtabpage.activity-stream.default.sites", "");
user_pref("browser.newtabpage.activity-stream.feeds.discoverystreamfeed", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.enabled", false);
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false); // default

// disable recommend as you browse
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);




// ----------------------------------
//  SECTION : BROWSER BEHAVIOR
// ----------------------------------

user_pref("app.update.auto", false); // disable update auto installs

// password manager
user_pref("signon.autofillForms", false); // disable username and password autofills
user_pref("signon.formlessCapture.enabled", false); // disable formless login capture

// just ask wether to save passwords
user_pref("signon.rememberSignons", true); // disable will not allowing saving passwords in the browser
user_pref("signon.generation.enabled", false); // dont generate any password

user_pref("signon.management.page.breach-alerts.enabled" false); // dont cross check dbs to identify breached passwords
user_pref("signon.management.page.breachAlertUrl", ""); 



// autofill
user_pref("extensions.formautofill.available", "off");
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.creditCards.enabled", false);
user_pref("extensions.formautofill.creditCards.available", false);
user_pref("extensions.formautofill.heuristics.enabled", false);

// mouse and input
user_pref("general.autoScroll", false); // prevent mouse middle click from triggering scrolling
user_pref("middlemouse.contentLoadURL", false); // prevent mouse middle click from opening links
user_pref("clipboard.autocopy", false); // disable autocopy to clibpboard

// containers
user_pref("privacy.userContext.enabled", true); // enable containers
user_pref("privacy.userContext.ui.enabled", true);  // enable containers ui

user_pref("pdfjs.enableScripting", false); // block pdf js scripting

user_pref("accessibility.force_disabled", 1); // block accessibility services

// devtools
user_pref("devtools.chrome.enabled", false); // disable chrome debugging tools
user_pref("devtools.debugger.remote-enabled", false); // default, disable remote debugging
user_pref("devtools.remote.adb.extensionURL", ""); // url to download ad extension
user_pref("devtools.selfxss.count", 0); // see https://gitlab.com/librewolf-community/browser/linux/-/issues/80

// misc
user_pref("browser.shell.checkDefaultBrowser", false); // do not check if default browser
user_pref("browser.tabs.drawInTitlebar", true); // hide titlebar
user_pref("browser.aboutConfig.showWarning", false); // disable about:config warning
user_pref("browser.download.autohideButton", false); // hide download button automatically
user_pref("browser.download.manager.addToRecentDocs", false); // do not add downloads to recents
user_pref("browser.tabs.loadBookmarksInTabs", true); // always open bookmarks in new tab

// remove default handlers and translation engine
user_pref("gecko.handlerService.schemes.mailto.0.uriTemplate", "");
user_pref("gecko.handlerService.schemes.mailto.0.name", "");
user_pref("gecko.handlerService.schemes.mailto.1.uriTemplate", "");
user_pref("gecko.handlerService.schemes.mailto.1.name", "");
user_pref("gecko.handlerService.schemes.irc.0.uriTemplate", "");
user_pref("gecko.handlerService.schemes.irc.0.name", "");
user_pref("gecko.handlerService.schemes.ircs.0.uriTemplate", "");
user_pref("gecko.handlerService.schemes.ircs.0.name", "");
user_pref("browser.translation.engine", "");

// disable welcome, what's new pages and ui tour
user_pref("browser.startup.homepage_override.mstone", "ignore");
user_pref("startup.homepage_override_url", "about:blank");
user_pref("startup.homepage_welcome_url", "about:blank");
user_pref("startup.homepage_welcome_url.additional", "");
user_pref("browser.messaging-system.whatsNewPanel.enabled", false);
user_pref("browser.uitour.enabled", false);
user_pref("browser.uitour.url", "");



// --------------------------------
// SECTION : SEARCH AND URLBAR
// --------------------------------

// disable search suggestions
user_pref("browser.urlbar.autoFill", false)
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.urlbar.suggest.searches", false);
user_pref("browser.urlbar.quicksuggest.scenario", ""); // disable firefox suggests and hide its UI

user_pref("browser.search.region", "US"); // set a default search region for all users
user_pref("browser.search.update", false); // do not update open search search engines
user_pref("browser.urlbar.trimURLs", false); // do not trim urls in the urlbar

// urlbar-dns interactions, avoid unwanted and speculative connections
user_pref("browser.urlbar.dnsResolveSingleWordsAfterSearch", 0);
user_pref("browser.urlbar.speculativeConnect.enabled", false);
user_pref("browser.fixup.alternate.enabled", false);

user_pref("browser.urlbar.dnsResolveSingleWordsAfterSearch", 0); // disable location bar leaking single words to a DNS provider

//  disable location bar contextual suggestions
user_pref("browser.urlbar.autocomplete.enabled",		false);

user_pref("browser.urlbar.suggest.quicksuggest", false);
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false);

// disable adressbar to suggest bookmarks history open tabs etc.
user_pref("browser.urlbar.suggest.bookmark", false);
user_pref("browser.urlbar.suggest.engines", false);
user_pref("browser.urlbar.suggest.history", false);
user_pref("browser.urlbar.suggest.openpage", false);
user_pref("browser.urlbar.suggest.openpage",false);
user_pref("browser.urlbar.suggest.searches",false);
user_pref("browser.urlbar.suggest.topsites",false);



// ---------------------------------
//  SECTION : SAFE BROWSING
// ---------------------------------

// disable safe browsing, including the fetch of updates and all outgoing connections 
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);
user_pref("browser.safebrowsing.blockedURIs.enabled", false);
user_pref("browser.safebrowsing.provider.google4.gethashURL", "");
user_pref("browser.safebrowsing.provider.google4.updateURL", "");
user_pref("browser.safebrowsing.provider.google.gethashURL", "");
user_pref("browser.safebrowsing.provider.google.updateURL", "");

// disable safe browsing checks on downloads, both local and remote
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.url", "");
user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);

// other safe browsing options, all default but enforce
user_pref("browser.safebrowsing.passwords.enabled", false);
user_pref("browser.safebrowsing.provider.google4.dataSharing.enabled", false);
user_pref("browser.safebrowsing.provider.google4.dataSharingURL", "");



// ---------------------------------------------
//  SECTION : LOCATION, LANGUAGE AND REGION
// ---------------------------------------------

user_pref("geo.enabled", false); // block geo api, behind a prompt so review
user_pref("permissions.default.geo", 2); // review as well

// use mozilla geo service as deault
user_pref("geo.provider.network.url", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");

// prevent use of OS location services
user_pref("geo.provider.ms-windows-location", false); // [WINDOWS]
user_pref("geo.provider.use_corelocation", false); // [MAC]
user_pref("geo.provider.use_gpsd", false); // [LINUX]

// show language as en-US for all users, regardless of their OS language and local version, to avoid leaking
user_pref("javascript.use_us_english_locale", true);
user_pref("intl.locale.requested", "en-US");
user_pref("privacy.spoof_english", 2);

// disable region updates
user_pref("browser.region.network.url", "");
user_pref("browser.region.update.enabled", false);


// -----------------------------------
//  SECTION : TRACKING PROTECTION
// -----------------------------------

user_pref("browser.contentblocking.category", "strict"); // set tracking protection cto strict mode

// enable / disable TP in normal and private browsing
user_pref("privacy.trackingprotection.enabled", false);
user_pref("privacy.trackingprotection.pbmode.enabled", false);

user_pref("privacy.trackingprotection.annotate_channels", false); // reduce priority of trackers, remove if TP is on

// remove urls to fetch contentblocking lists.
// without these urls TP cannot work. the lists are not shipped with the browser but download on first launch.
user_pref("browser.safebrowsing.provider.mozilla.updateURL", "");
user_pref("browser.safebrowsing.provider.mozilla.gethashURL", "");

// disable blocking lists and hide ui elements in custom mode UI, if TP is enabled revert to true
user_pref("privacy.trackingprotection.cryptomining.enabled", false);
user_pref("privacy.trackingprotection.fingerprinting.enabled", false);
user_pref("browser.contentblocking.cryptomining.preferences.ui.enabled", false);
user_pref("browser.contentblocking.fingerprinting.preferences.ui.enabled", false);

// hide annoying ui elements from about:protections
user_pref("browser.contentblocking.report.lockwise.enabled", false);
user_pref("browser.contentblocking.report.monitor.enabled", false);
user_pref("browser.contentblocking.report.hide_vpn_banner", true);
user_pref("browser.contentblocking.report.vpn.enabled", false);
user_pref("browser.contentblocking.report.show_mobile_app", false);



// --------------------------------------
// # EXTENSIONS
// --------------------------------------

/**
 allow extensions to work on all domains.
 default is "debug-notes.log"
 */
 user_pref("extensions.webextensions.restrictedDomains", "");

 // set extensions scopes
 user_pref("extensions.enabledScopes", 5);
 user_pref("extensions.autoDisableScopes", 11);
 
 user_pref("extensions.postDownloadThirdPartyPrompt", false); // force install prompt for thrid party extensions 
 
 /**
  prevent users from adding lang packs, which would cause leaks.
  default is https://services.addons.mozilla.org/api/v3/addons/language-tools/?app=firefox&type=language&appversion=%VERSION%
 */ 
 user_pref("extensions.getAddons.langpacks.url", "");
 
 // about:addons ui
 user_pref("extensions.getAddons.showPane", false); // disable recommendations section
 user_pref("extensions.htmlaboutaddons.recommendations.enabled", false); // disable recommendations from addons list
 user_pref("lightweightThemes.getMoreURL", ""); // disable button to get more themes
 
 // background checking and updating of extensions
 user_pref("extensions.update.enabled", false); // disable automatic checks for extension updates
 user_pref("extensions.update.autoUpdateDefault", false); // disable automatic installs of extension updates
 user_pref("extensions.getAddons.cache.enabled", false); // disable fetching of extension metadata
 
 // extension firewall, disabled by default
 // user_pref("extensions.webextensions.base-content-security-policy", "default-src 'none'; script-src 'none'; object-src 'none';");
 // user_pref("extensions.webextensions.base-content-security-policy.v3", "default-src 'none'; script-src 'none'; object-src 'none';");
 
 // report site issue, disable button and url for in depth defense
 user_pref("extensions.webcompat-reporter.enabled", false);
 user_pref("extensions.webcompat-reporter.newIssueEndpoint", "");
 
 // system addons, prevent updates and strip url for in depth defense
 user_pref("extensions.systemAddon.update.enabled", false);
 user_pref("extensions.systemAddon.update.url", "");



// --------------------------------
//  SECTION : PERMISSIONS
// --------------------------------

// block new requests to acess camera mic geolocation notifications and vr devices
user_pref("permissions.default.camera", 2);
user_pref("permissions.default.microphone", 2);
user_pref("permissions.default.desktop-notification", 2);
user_pref("permissions.default.geo", 2);
user_pref("permissions.default.xr", 2);


// --------------------------------
//  SECTION : TELEMETRY
// --------------------------------

user_pref("toolkit.telemetry.unified", false); // master switch
user_pref("toolkit.telemetry.enabled", false);  // master switch
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabledFirstSession", false); // default
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.reportingpolicy.firstRun", false); // default
user_pref("toolkit.telemetry.cachedClientID", "");
user_pref("toolkit.telemetry.previousBuildID", "");
user_pref("toolkit.telemetry.server_owner", "");
user_pref("toolkit.coverage.opt-out", true); // [HIDDEN PREF]
user_pref("toolkit.coverage.enabled", false);
user_pref("toolkit.coverage.endpoint.base", "");
user_pref("toolkit.crashreporter.infoURL", "");


user_pref("security.protectionspopup.recordEventTelemetry", false);
user_pref("browser.ping-centre.telemetry", false);

// crash report
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);

// health reports
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.healthreport.service.enabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);

// normandy and studies
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");
user_pref("app.shield.optoutstudies.enabled", false);

// personalized extension recommendations
user_pref("browser.discovery.enabled", false);
user_pref("browser.discovery.containers.enabled", false);
user_pref("browser.discovery.sites", "");

// connectivity checks
user_pref("network.connectivity-service.enabled", false);

// captive portal
user_pref("network.captive-portal-service.enabled", false);
user_pref("captivedetect.canonicalURL", "");

// prevent sending server side analytics
user_pref("beacon.enabled", false);

