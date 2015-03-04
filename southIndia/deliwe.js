var deliwe;

	var deliweCoordinates = [
		new google.maps.LatLng(-20.20,   43.40), 
  		new google.maps.LatLng(-22.40,   42.60), 
  		new google.maps.LatLng(-23.50,   42.30), 
  		new google.maps.LatLng(-25.40,   40.70), 
  		new google.maps.LatLng(-25.90,   39.40) 
	];

	// Define the symbol, using one of the predefined paths ('CIRCLE')
  	// supplied by the Google Maps JavaScript API.
  	var deliweSymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#d6d6d6'
  	};

function animateDeliweCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = deliwe.get('icons');
      icons[0].offset = (count / 2) + '%';
      deliwe.set('icons', icons);
  }, 20);
}