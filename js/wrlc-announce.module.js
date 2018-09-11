// specify module name and its dependency
angular.module('wrlcAnnounce', ['ngAnimate'])

.component('prmSearchBarAfter', {
  template: `
    <wrlc-announce ng-show="!$ctrl.dismissed" ng-if="$ctrl.show">
      <div id="wrlc-announce-banner" class="layout-align-center-center layout-row flex {{$ctrl.severity}}">
        <prm-icon ng-if="$ctrl.severity=='info'" icon-type="svg" svg-icon-set="action" icon-definition="ic_info_24px"></prm-icon>
        <prm-icon ng-if="$ctrl.severity=='alert'" icon-type="svg" svg-icon-set="action" icon-definition="ic_announcement_24px"></prm-icon>
        <prm-icon ng-if="$ctrl.severity=='warn'" icon-type="svg" svg-icon-set="action" icon-definition="ic_report_problem_24px"></prm-icon>
        <prm-icon ng-if="$ctrl.severity=='success'" icon-type="svg" svg-icon-set="action" icon-definition="ic_check_circle_24px"></prm-icon>
        <span ng-if="$ctrl.link" id="message"><a target="_blank" href="{{$ctrl.link}}">{{ $ctrl.message }}</a></span>
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
          var data = (config.getData)? config.getData(response) : response;

          // Test if we want to show the banner or not
          var showFlagEnabled = config.getShow(data) == "TRUE";
          var isEmptyMessage = config.getMessage.length == 0;
          self.show = showFlagEnabled && !isEmptyMessage && !self.dismissed;

          // get message info using configured functions
          self.message = config.getMessage(data);
          self.link = config.getLink(data);
          self.severity = (config.getSeverity)? config.getSeverity(data) : 'info';
        });

      //respond to user exing out of the banner
      self.wrDismiss = function() {
        self.dismissed = true;
      }
    }
});
