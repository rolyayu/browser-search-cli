# BROWSER-SEARCH-CLI

CLI based on yargs and open that allows you search in browser on certain platform. Cross-platform.

Supported browsers:
+ Microsoft Edge (Default)
+ Google Chrome
+ Firefox

Supported platforms: 
+ Yandex (Default)
+ Google 
+ Bing
+ Youtube
+ Stackoverflow
## Install:

``` sh
#Using npm
npm install -g browser-search-cli
#Or using yarn
yarn global add browser-search-cli
```

## Usage:

You can run app using the following command:

```sh
bs [options]
```
Options are next:
- text - text you want to search
- config_browser - switch default browser. Possible options: edge,chrome,firefox
- config_search_platform - switch default platform: Possible options: google, bing, yandex,youtube, stack
- platforms - if present, searching on all given platforms platforms
- all - if present, searching on all platforms

## Examples:

Change defaults and no searching. Sets up Edge as default browser and StackOverflow as default search platform.

```sh
bs --config_browser edge --config_search_platform stack
```

Search for ` how to center a div` on all platforms.
```sh
bs --text how to center a div --all
```

Search for ` how to center a div` on given platforms.
```sh
bs --text how to center a div --platforms bing google
```