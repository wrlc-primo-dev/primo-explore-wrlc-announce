// specify module name and its dependency
angular.module('wrlcAnnounce', ['ngAnimate'])

.component('prmSearchBarAfter', {
  template: `
  <wrlc-announce ng-show="!$ctrl.dismissed" ng-if="$ctrl.show">
    <div id="wrlc-announce-banner" class="layout-align-center-center layout-row flex">
      <prm-icon icon-type="svg" svg-icon-set="action" icon-definition="ic_announcement_24px" id="wrlc-announce-icon"></prm-icon>
      <span ng-if="$ctrl.link" id="message"><a href="{{$ctrl.link}}">{{ $ctrl.message }}</a></span>
      <span ng-if="!$ctrl.link" ng-bind-html=$ctrl.message id="message"></span>
      <button id="dismiss-announcement" area-label="dismiss announcement" type="button" ng-click="$ctrl.wrDismiss()"
              class="dismiss-alert-button zero-margin md-button md-primoExplore-theme md-ink-ripple button-with-icon">
        <prm-icon icon-type="svg" svg-icon-set="navigation" icon-definition="ic_close_24px" class="material-icons gray"></prm-icon>
      </button>
    </div>
  </wrlc-announce>
  `,
  controller:
    function announceController(announceConfig, $http) {
      var self = this;
      var config = announceConfig;

      // interact with announceAPI helper to set values
      $http.get(config.announceAPI)
        .then(function(response){
          // Test if we want to show the banner or not
          self.show = (config.getShow(response) == "TRUE");

          // get message and link using configured functions
          self.message = config.getMessage(response);
          self.link = config.getLink(response);
        });

      //respond to user exing out of function
      self.wrDismiss = function() {
        self.dismissed = true;
      }
    }
});
