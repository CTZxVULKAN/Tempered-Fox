<p align="center" >
<img src="https://user-images.githubusercontent.com/65299153/135608910-a219b036-09b7-4aec-8cf7-cb266295a690.png" width="60" />
</p>

<h1 align="center">Tempered Fox</h1>
<p align="center"> A comprehesive guide to hardening firefox. </p>


<div align="center">
	<a href="https://github.com/CTZxVULKAN/Tempered-Fox">Setup</a>
  <span> • </span>
    	<a href="https://github.com/CTZxVULKAN/Tempered-Fox">FAQ</a>
  <span> • </span>
       	<a href="https://github.com/CTZxVULKAN/Tempered-Fox">Contribute</a>
  <span> • </span>
	<a href="https://github.com/CTZxVULKAN/Tempered-Fox">Suggest</a>
</div>


<br>

Firefox is a reliable, open-source, privacy-respecting browser developed by Mozilla. Out of the box Firefox isn't the strongest browser in terms of privacy and security. This guide aims to harden firefox in these spheres to avoid digtal surveillance as much as possible.

If you dont like the direction firefox's development is heading to, but still want to have the flexibility that firefox offers check out [Libre Wolf](https://librewolf-community.gitlab.io/).

### Important Links you might want to check out
* [Download Firefox](https://www.mozilla.org/en-US/firefox/new/)

* [Firefox Source Code](https://hg.mozilla.org/mozilla-central/summary)

* [Firefox Souce Code Documentaion](https://firefox-source-docs.mozilla.org/index.html)

* [Firefox Privacy Notice](https://www.mozilla.org/en-US/privacy/firefox/)

* [Mozilla's Manifesto](https://www.mozilla.org/en-US/about/manifesto/)


<br>

### Index

* [Hardening with extensions *( basic )*](#hardening-with-extensions--basic-)

   * [Recommended videos](#recommended-videos)
   * [Recommended extensions](#recommened-extensions)

* [Hardening with config settings *( advanced )*](#hardening-with-config-settings--advanced-)

   * [Recommended videos & tools](#recommended-videos--tools)
   * [Configuration settings](#configuration-settings) 

* [Credits](#credits)


<br>

## Hardening with extensions *( basic )*

### Recommended videos

Feel free to watch these videos by Techlore and The Hated One incase you are new to firefox or this is the first time you are playing with the settings in Firefox.

* [Techlore](https://piped.kavin.rocks/watch?v=NXsC1j7wIQE)
* [The Hated One](https://piped.kavin.rocks/watch?v=xxWXLlfqNAo)

> Note : These videos are great but dated and may contain depriciated extensions or settings, the purpose of mentioning these videos is to make you fimiliar with how to configure settings in firefox.
> Do your own research and customize the settings upto your own needs. 


### Recommened Extensions 

* [Ublock Origin](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/) *( script / tracker blocker, suppliments as an adblocker )*
* [LocalCDN](https://addons.mozilla.org/en-US/firefox/addon/localcdn-fork-of-decentraleyes/) *( decentralized content delevery, decentraleyes' successor )*
* [Cookie Auto Delete](https://addons.mozilla.org/en-US/firefox/addon/cookie-autodelete/) *( cookie manager )*
* [Privacy Possum](https://addons.mozilla.org/en-US/firefox/addon/privacy-possum/) / [Privacy Badger](https://addons.mozilla.org/en-US/firefox/addon/privacy-badger17/) *( blocks invisible trackers )*
* [NeatURL](https://addons.mozilla.org/en-US/firefox/addon/neat-url/) / [ClearURLs](https://addons.mozilla.org/en-US/firefox/addon/clearurls/) *( filter out urls with tracking elements )*
* [User Agent Switcher](https://addons.mozilla.org/en-US/firefox/addon/user-agent-string-switcher/) *( manager user agents )*


<br>

## Hardening with config settings *( advanced )*

### Recommended videos & tools

For beginners Firefox's `about:config` can be really tricky and intimidating. Feel free to watch Mental Outlaws' video below to get the basic gist of how its done. If you are still uncomfortable and dont feel confident yet then check out Firefox Profilemaker. 

* [Mental Outlaw](https://piped.kavin.rocks/watch?v=xxWXLlfqNAo)
* [Firefox Profilemaker](https://ffprofile.com/)


### Configuration settings

The following section consists of various configuration settings inorder to harden firefox. Please take the time to read and understand, but also to customize the settings to find your own setup.

This is a large section use the index below to navigate to parts that you need

* [Cookies and history](#cookies-and-history)
* [Network](#network)

<br>

#### Cookies and history

* Enable strict mode 

```
network.cookie.cookieBehavior = 5
```
> This will enable firefox's scrict mode which automatically blocks social media trackers, cross-site tracking cookies and all tracking content in both private and normal windows


* Delete cookies on exit

```
network.cookie.lifetimePolicy = 2
```
> This will delete all cookies after the browser is quit, except user defined exceptions.


* Make third party and http cookies session-only

``` 
network.cookie.thirdparty.sessionOnly= true
network.cookie.thirdparty.nonsecureSessionOnly= true
```
> Enable third party or http cookies to be restricted to their specific session only.


* Increase time between session saves

```
browser.sessionstore.privacy_level = 2
browser.sessionstore.interval = 60000
```
> This prevents websites from storing session data like cookies and forms


* Disable browsing, search and form history

```
places.history.enabled = false
browser.formfill.enable = false
```

* Delete everything in history on exit

```
privacy.clearOnShutdown.cookies = false
privacy.clearOnShutdown.offlineApps = false
privacy.sanitize.sanitizeOnShutdown = true
```
> Force firefox to delete everything from history, but ignore data needed to stay logged into websites and user defined exceptions.

____


#### Network


* Force HTTPS over HTTP in all windows 

```
dom.security.https_only_mode = true
```
> Forcefully change connection from HTTP (insecure) to HTTPS (secure) in all normal and private browsing windows.


* Disable cross-origin HTTP authentication

```
network.auth.subresource-http-auth-allow = 1
```
> Stops all cross-origin resources from making insecure HTTP authentications.


* Block insecure passive content

```
security.mixed_content.block_display_content = true
```
> This blocks portions of insecure HTTP components in a fully HTTPS website making sure all data transferred from the browser to the server is encrypted.
> To learn more about this visit [here](https://support.mozilla.org/en-US/kb/mixed-content-blocking-firefox#w_what-is-mixed-content-and-what-are-the-risks). 


* Disable IPV6

```
network.dns.disableIPv6 = true
```

* Xorigin referer

```
network.http.referer.XOriginPolicy = 2
network.http.referer.XOriginTrimmingPolicy
```
> This sends referer only when the hostnames fully match and trims referer to only send scheme, host and port for all cross-origin reffers.

> Other notable options :  
```
network.http.referer.XOriginPolicy :

0 = Send Referer in all cases
1 = Send Referer to same eTLD sites
2 = Send Referer only when the full hostnames match

network.http.referer.XOriginTrimmingPolicy

0 = Send full url in Referer
1 = Send url without query string in Referer
2 = Only send scheme, host, and port in Referer
```


* Use punycode

```
network.IDN_show_punycode = true 
```
> Enable punycode to prevent adress spoofing. To learn more about punycode visit [here](https://blogs.msmvps.com/brink/2018/02/21/how-to-enable-or-disable-idn-punycode-in-firefox-address-bar-in-windows/).


* DNS query over proxy

```
network.proxy.socks_remote_dns = true
network.gio.supported-protocols = true
```
> Forces DNS queries over proxies whenever available, also disables gio to prevent proxy bypass.


* Skip undesired DNS connection test.

```
network.trr.confirmationNS = skip
```

* Disable prefetching of pages

```
network.dns.disablePrefetch = true disable dns prefetching
network.predictor.enabled = false // disable predictor
network.prefetch-next = false // disable link prefetching
network.http.speculative-parallel-limit = 0 // disable prefetching on mouse over
```
> Firefox prefetches pages it thinks you might visit next for faster load times, however this will send small amounts of your information to websites you might not visit. Disabling this feature will result in a minimal dip in perfomance. 






<br>

### Credits
This project wasn't been completely made by me, and a lot of stuff has been added from the following projects :

* [LibreWolf](https://librewolf-community.gitlab.io/)
