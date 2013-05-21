
/*! Remove [fb frame] On Filter v0.1 
	(c) 2013 Hamed Nemati Ziabari - hitech.innovative@gmail.com
	GPLv3
*/

(function(){

	"use strict";

	var img, timeOut;

	var init = function () {
		img = new Image();	
		img.onload = function() { remove(img); };
		img.onerror = function() { remove(img); };

		// load a public image from fb CDN
		img.src = "http://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-prn2/969740_4930773782426_1750704834_n.jpg";

		// load time out after 2.5 sec
		timeOut = setTimeout(function() { remove(img); }, 2500);
	};

	var remove = function (image) {
		if (image.height === 0) {
			// failed to load image..
			image.src = "";

			// remove all fb frames
			var allIframes = document.getElementsByTagName("iframe");
			for (var i = 0, max = allIframes.length; i < max; i++) {
				if (allIframes[i].src.indexOf('https://www.facebook.com/') !== -1){
					allIframes[i].parentNode.removeChild(allIframes[i]);
					window.console.log('Facebook iframe removed');
				}
			}
		} else {
			clearTimeout(timeOut);
			window.console.log('fb is not filter');
		}
	};

	init();

})();
