/*
 * JavaScript Example
 * @author: swider
 */

var App = (function(win, doc, $){

	var
		// CONFIG
		containerSel = '#container',
		buttonSel3 = '#button3',
    buttonSel5 = '#button5',
    buttonSel8 = '#button8',

		// PRIVATE VARIABLES
		$container,
		$button,

		// PRIVATE METHODS
		buttonHandler = function(e) {
      console.log('Button clicked:' + e.data.data);      
			e.preventDefault();
		},

		// KICK OFF
		init = function(){
      console.log("hello world from ClientApp.js")
			$container = $(containerSel);
			$button3 = $container.find(buttonSel3);
      $button5 = $container.find(buttonSel5);
      $button8 = $container.find(buttonSel8);
      $button3.on('click',{data:"3"}, buttonHandler);
      $button5.on('click',{data:"5"}, buttonHandler);
      $button8.on('click',{data:"8"}, buttonHandler);
		};

	// EXPOSE WHAT YOU NEED
	return {
		init: init
	}
})(window, document, jQuery);


// This would live somewhere else
$(function(){
	App.init();
});



