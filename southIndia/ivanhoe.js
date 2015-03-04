var ivanhoe;

//TROPICAL STORM ivanhoe
  	var ivanhoeCoordinates = [
	  	  new google.maps.LatLng(-16.60,   79.40),
        new google.maps.LatLng(-17.60,   81.10),
        new google.maps.LatLng(-20.40,   82.80),
        new google.maps.LatLng(-25.50,   86.30),
  	];

  // Define the symbol, using one of the predefined paths ('CIRCLE')
  // supplied by the Google Maps JavaScript API.
  	var ivanhoeSymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#d6d6d6'
  	};

    

function animateIvanhoeCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = ivanhoe.get('icons');
      icons[0].offset = (count / 2) + '%';
      ivanhoe.set('icons', icons);
  }, 20);
}