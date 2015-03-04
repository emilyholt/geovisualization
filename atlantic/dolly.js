var dolly;

	var dollyCoordinates = [
		new google.maps.LatLng(20.10,  -93.60),
		new google.maps.LatLng(21.00,  -93.90),
		new google.maps.LatLng(22.60,  -94.80),
		new google.maps.LatLng(23.40,  -96.50),
		new google.maps.LatLng(22.00,  -97.00), 
		new google.maps.LatLng(21.90,  -97.70), 
		new google.maps.LatLng(21.80,  -98.40)
	];

	// Define the symbol, using one of the predefined paths ('CIRCLE')
  	// supplied by the Google Maps JavaScript API.
  	var dollySymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#d6d6d6'
  	};


function animateDollyCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = dolly.get('icons');
      icons[0].offset = (count / 2) + '%';
      dolly.set('icons', icons);
  }, 20);
}