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
Once this package is installed, start up the primo-explore-devenv. This will collect the code and insert it into your view. After this is done, you'll need to add configuration to your custom.js file:

Add `wrlcAnnounce` as a dependency for your custom module definition.

```js
var app = angular.module('viewCustom', ['wrlcAnnounce'])
```
Configure your API calls to retrieve announcements. primo-explore-wrlc-announce has the following configuration options
| name | type | usage |
|---|---|---|
| `announceAPI` | string | A url that can be used to fetch your announcement data. |
| `getShow` | function | A function that returns TRUE if you want to show your announcement banner. |
| `getMessage` | function | A function that returns the message text you want to display. |
| `getLink` | function | A function that returns a link you want to add the the Message text. |

## Example

The following would be added to the custom.js file after the module installed. This example uses Google Sheets as the source for the announcement data.

```js
    var app = angular.module('viewCustom', ['angularLoad', 'wrlcAnnounce']);
    
    app.constant('announceConfig', {
        announceAPI: 'https://spreadsheets.google.com/feeds/list/1ycVxLuY5LYwsFbGX-n_TlJPAF-wI73Lf_aJiZKzm0vI/1/public/values?alt=json',
        getShow: function(response) {
            return(response.data.feed.entry[0].gsx$show.$t);
        },
        getMessage: function(response) {
            return(response.data.feed.entry[0].gsx$message.$t);
        },
        getLink: function(response) {
            return(response.data.feed.entry[0].gsx$link.$t);
        }
    });
```