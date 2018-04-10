# primo-explore-wrlc-announce

## Description
Add an announcement bar underneath the search bar. This module was created as a demo to try adding an independent feature to Primo. Borrowed CSS to size the bar from [NYUs primo-explore-search-bar-sub-menu](https://github.com/nyulibraries/primo-explore-search-bar-sub-menu).

### Screenshot
![screenshot](screenshot.png)

## Install
1. Make sure you've installed and configured [primo-explore-devenv](https://github.com/ExLibrisGroup/primo-explore-devenv).
2. Navigate to your template/central package root directory. For example:
    ```
    cd primo-explore/custom/MY_VIEW_ID
    ```
3. If you do not already have a `package.json` file in this directory, create one:
    ```
    npm init -y
    ```
4. Install this package:
    ```
    npm install primo-explore-wrlc-announce --save-dev
    ```
## Usage
Once this package is installed, add `wrlcAnnounce` as a dependency for your custom module definition.

```js
var app = angular.module('viewCustom', ['wrlcAnnounce'])
```
This is static for now, it's just a demo. There is no configuration.
