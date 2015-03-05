var trudy;

	var trudyCoordinates = [
		new google.maps.LatLng(15.40,  -99.00),
    new google.maps.LatLng(15.70,  -99.00),
    new google.maps.LatLng(16.20,  -98.90),
    new google.maps.LatLng(16.60,  -98.90),
    new google.maps.LatLng(17.10,  -98.50),
    new google.maps.LatLng(17.30,  -98.30)
	];

	// Define the symbol, using one of the predefined paths ('CIRCLE')
  	// supplied by the Google Maps JavaScript API.
  	var trudySymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#d6d6d6'
  	};

function animateTrudyCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = trudy.get('icons');
      icons[0].offset = (count / 2) + '%';
      trudy.set('icons', icons);
  }, 20);
}