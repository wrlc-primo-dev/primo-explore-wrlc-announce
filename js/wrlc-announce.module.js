angular
  // Define the module name
  .module('helloWorld', [])
    .component('prmSearchBarAfter', {
      template: `
	    <wrlc-announce>
	    	<div id="wrlc-announce-banner" class="layout-align-center-center layout-row flex">
	            <prm-icon icon-type="svg" svg-icon-set="action" icon-definition="ic_announcement_24px" id="wrlc-announce-icon"></prm-icon>
	            <span id="message">Search at WRLC Shared Collections has a new look. <a href="#">Let us know what you think.</a></span>
	        </div>
	    </wrlc-announce>
	    `

})
