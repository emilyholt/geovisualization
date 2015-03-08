var hellen;

//TROPICAL STORM hellen
  	var hellenCoordinates = [
	  	  new google.maps.LatLng(-12.80,   42.40),
        new google.maps.LatLng(-13.40,   43.50),
        new google.maps.LatLng(-14.10,   43.90),
        new google.maps.LatLng(-14.70,   44.60),
        new google.maps.LatLng(-15.30,   45.40),
        new google.maps.LatLng(-16.20,   45.90),
        new google.maps.LatLng(-17.00,   46.10)
  	];

  // Define the symbol, using one of the predefined paths ('CIRCLE')
  // supplied by the Google Maps JavaScript API.
  	var hellenSymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#d6d6d6'
  	};

    

function animateHellenCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = hellen.get('icons');
      icons[0].offset = (count / 2) + '%';
      hellen.set('icons', icons);
  }, 20);
}