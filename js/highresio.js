

window.highresio = function( options ) {
	//var imported = document.createElement('script');
	// imported.src = 'js/feedback.js';
	// document.getElementsByTagName('head')[0].appendChild(imported);
	
	// Load the css file first
	var url1 = 'http://pub.dev:9000/assets/css/feedback.css';
//	var url2 = 'css/uidarkness/jquery-ui-1.9.2.custom.min.css'
		
	
	
	if(document.createStyleSheet) {
	    try { document.createStyleSheet(url1); } catch (e) { }
//	    try { document.createStyleSheet(url2); } catch (e) { }
	}
	else {
		createStylesheet(url1);
//		createStylesheet(url2);
	}
	
	// Load the feedback.js
	loadScript('http://pub.dev:9000/assets/js/feedback.js', function() {
		// safe way to load another script. A good place to add dependent code
		Feedback({
			h2cPath:'http://pub.dev:9000/assets/js/html2canvas.js',
			url: "http://pub.dev:9000/servercapture/captureimg"
		});
	});
	
	// Load the photo.js
	loadScript('http://pub.dev:9000/assets/js/photo.js', function() {
		// safe way to load another script. A good place to add dependent code
		snapPhoto({url: "http://pub.dev:9000/servercapture/captureimg"});
	});
	
	// Load the speech2text.js.js
	loadScript('http://pub.dev:9000/assets/js/speech2text.js', function() {
		// safe way to load another script. A good place to add dependent code
		speech2Text({url: "http://pub.dev:9000/servercapture/captures2t"});
	});

	// All audio related stuff - Boy there are a few :). 
	// TODO: Can move recorder.js inside audio.js
	// Load the swfobject.js
	loadScript('https://ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js', function() {
		// safe way to load another script. A good place to add dependent code
		// Load the recorder.js
		loadScript('http://pub.dev:9000/assets/js/recorder.js', function() {
			// safe way to load another script. A good place to add dependent code
			// Load the audio.js
			loadScript('http://pub.dev:9000/assets/js/audio.js', function() {
				// safe way to load another script. A good place to add dependent code
				audio({
					url: "http://pub.dev:9000/servercapture/captureflaudio",
					swfurl: "http://pub.dev:9000/assets/Wami.swf"
				});
			});
		});
	});
	
	// Load the comingup.js.js
	loadScript('http://pub.dev:9000/assets/js/comingup.js', function() {
		// safe way to load another script. A good place to add dependent code
		comingUp({});
	});


	function createStylesheet(url) {
	    var css;
	    css         = document.createElement('link');
	    css.rel     = 'stylesheet';
	    css.type    = 'text/css';
	    css.media   = "all";
	    css.href    = url;
	    document.getElementsByTagName("head")[0].appendChild(css);
	};


	function loadScript(url, callback) {
	    var script = document.createElement('script');
	    script.async = true;
	    script.src   = url;
	    var entry = document.getElementsByTagName('script')[0];
	    entry.parentNode.insertBefore(script, entry);
	    script.onload = script.onreadystatechange = function() {
	       var rdyState = script.readyState;
	       if (!rdyState || /complete|loaded/.test(script.readyState)) {
	           callback();
	           script.onload = null;
	           script.onreadystatechange = null;
	       }
		};
	}

	
}

