var jack;

//TROPICAL STORM jack
  	var jackCoordinates = [
	  	  new google.maps.LatLng(-12.50,   91.60),
        new google.maps.LatLng(-13.40,   91.10),
        new google.maps.LatLng(-14.50,   90.90),
        new google.maps.LatLng(-15.20,   91.00),
        new google.maps.LatLng(-15.30,   91.30),
        new google.maps.LatLng(-16.30,   92.70),
        new google.maps.LatLng(-16.70,   93.20),
        new google.maps.LatLng(-17.80,   95.20)
  	];

  // Define the symbol, using one of the predefined paths ('CIRCLE')
  // supplied by the Google Maps JavaScript API.
  	var jackSymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#d6d6d6'
  	};

    

function animateJackCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = jack.get('icons');
      icons[0].offset = (count / 2) + '%';
      jack.set('icons', icons);
  }, 20);
}