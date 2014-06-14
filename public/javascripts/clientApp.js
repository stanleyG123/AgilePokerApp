/*
 * JavaScript Example
 * @author: swider
 */

var App = (function(win, doc, $){

  
  var socket = io();

	var
		// CONFIG
		containerSel = '#container',
		/*buttonSel3 = '#button3',
    buttonSel5 = '#button5',
    buttonSel8 = '#button8',*/
     buttonSel = '.button',

		// PRIVATE VARIABLES
		$container,
		$buttons,

		// PRIVATE METHODS
		buttonHandler = function(e) {
      var val = $(this).text();
      
      console.log("sending" + val);
      socket.emit('vote performed',  {"text":val });      
			e.preventDefault();
		},

		// KICK OFF
		init = function(){
      console.log("hello world from ClientApp.js");
			$container = $(containerSel);
			$buttons = $container.find(buttonSel);
      /*$button5 = $container.find(buttonSel5);
      $button8 = $container.find(buttonSel8);
      
      $button3.on('click',{msg:"3"}, buttonHandler);
      $button5.on('click',{msg:"5"}, buttonHandler);
      $button8.on('click',{msg:"8"}, buttonHandler);
      */
      $buttons.on('click', buttonHandler);
      
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



