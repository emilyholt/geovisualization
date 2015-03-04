var fay;

	var fayCoordinates = [
		new google.maps.LatLng(23.80,  -63.70),
		new google.maps.LatLng(24.70,  -64.20), 
		new google.maps.LatLng(25.20,  -64.20), 
		new google.maps.LatLng(25.90,  -64.50), 
		new google.maps.LatLng(26.70,  -64.70), 
		new google.maps.LatLng(27.90,  -65.30),
		new google.maps.LatLng(29.50,  -65.40), 
		new google.maps.LatLng(30.90,  -65.00), 
		new google.maps.LatLng(32.40,  -64.60),
		new google.maps.LatLng(34.00,  -62.80),
		new google.maps.LatLng(34.70,  -60.70),
		new google.maps.LatLng(34.10,  -58.20),
		new google.maps.LatLng(34.30,  -55.30), 
		new google.maps.LatLng(34.10,  -52.20)
	];

	// Define the symbol, using one of the predefined paths ('CIRCLE')
  	// supplied by the Google Maps JavaScript API.
  	var faySymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#d6d6d6'
  	};

function animateFayCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = fay.get('icons');
      icons[0].offset = (count / 2) + '%';
      fay.set('icons', icons);
  }, 20);
}