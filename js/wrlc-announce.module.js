angular
  // Define the module name
  .module('wrlcAnnounce', [])
    .component('prmSearchBarAfter', {
        template: `
            <wrlc-announce ng-if="$ctrl.show">
                <div id="wrlc-announce-banner" class="layout-align-center-center layout-row flex">
                    <prm-icon icon-type="svg" svg-icon-set="action" icon-definition="ic_announcement_24px" id="wrlc-announce-icon"></prm-icon>
                    <span ng-if="$ctrl.link" id="message"><a href="{{$ctrl.link}}">{{ $ctrl.message }}</a></span>
                    <span ng-if="!$ctrl.link" id="message">{{ $ctrl.message }}</span>
                </div>
            </wrlc-announce>
            `,
        controller: 
            function announceController(announceConfig, $http) {

                var self = this;
                var config = announceConfig;

                // get show announcement
                $http.get('config.announceAPI')
                    .then(function(response){
                        // Test if we want to show the banner or not
                        if (config.getShow(response) == "TRUE") {
                            self.show = true;
                        } else {
                            self.show = false;
                        }
                        // get message and link using configured functions
                        self.message = config.getMessage(response);
                        self.link = config.getLink(response);

                    });    
            }


    });
