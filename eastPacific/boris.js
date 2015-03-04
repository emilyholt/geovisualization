var boris;

	var borisCoordinates = [
		new google.maps.LatLng(13.10,  -94.10),
    new google.maps.LatLng(13.80,  -94.20),
    new google.maps.LatLng(14.40,  -94.30),
    new google.maps.LatLng(14.60,  -94.30),
    new google.maps.LatLng(14.70,  -94.10),
    new google.maps.LatLng(15.50,  -94.00),
    new google.maps.LatLng(16.00,  -93.90),
    new google.maps.LatLng(16.20,  -94.00)
	];

	// Define the symbol, using one of the predefined paths ('CIRCLE')
  	// supplied by the Google Maps JavaScript API.
  	var borisSymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#d6d6d6'
  	};

function animateBorisCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = boris.get('icons');
      icons[0].offset = (count / 2) + '%';
      boris.set('icons', icons);
  }, 20);
}