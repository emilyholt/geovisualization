var gonzalo;

	var gonzaloCoordinates = [
		new google.maps.LatLng(16.40,  -58.40), 
		new google.maps.LatLng(16.40,  -59.50), 
		new google.maps.LatLng(16.60,  -60.20), 
		new google.maps.LatLng(16.80,  -60.90), 
		new google.maps.LatLng(17.20,  -61.90), 
		new google.maps.LatLng(17.90,  -62.90),
		new google.maps.LatLng(18.70,  -63.40), 
		new google.maps.LatLng(19.60,  -64.40),
		new google.maps.LatLng(20.30,  -65.20), 
		new google.maps.LatLng(21.20,  -66.00), 
		new google.maps.LatLng(22.20,  -66.60), 
		new google.maps.LatLng(22.90,  -67.30), 
		new google.maps.LatLng(23.50,  -68.00), 
		new google.maps.LatLng(24.10,  -68.60),
		new google.maps.LatLng(24.60,  -68.70),
		new google.maps.LatLng(25.30,  -68.70),
		new google.maps.LatLng(26.10,  -68.60), 
		new google.maps.LatLng(27.10,  -68.20), 
		new google.maps.LatLng(28.00,  -67.50),
		new google.maps.LatLng(29.30,  -66.80), 
		new google.maps.LatLng(30.40,  -66.10), 
		new google.maps.LatLng(31.70,  -65.30), 
		new google.maps.LatLng(32.70,  -64.50), 
		new google.maps.LatLng(34.70,  -63.20),
		new google.maps.LatLng(36.80,  -61.70), 
		new google.maps.LatLng(39.30,  -60.00), 
		new google.maps.LatLng(42.30,  -57.00), 
 		new google.maps.LatLng(46.30,  -52.90), 
 		new google.maps.LatLng(49.00,  -47.30)
	];

	// Define the symbol, using one of the predefined paths ('CIRCLE')
  	// supplied by the Google Maps JavaScript API.
  	var gonzaloSymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#d6d6d6'
  	};

function animateGonzaloCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = gonzalo.get('icons');
      icons[0].offset = (count / 2) + '%';
      gonzalo.set('icons', icons);
  }, 20);
}