var five;

	var fiveCoordinates = [
		new google.maps.LatLng(13.80,   87.00), 
		new google.maps.LatLng(14.20,   86.80), 
		new google.maps.LatLng(13.40,   88.10), 
		new google.maps.LatLng(13.30,   88.00), 
		new google.maps.LatLng(13.30,   87.50), 
		new google.maps.LatLng(14.10,   87.70), 
		new google.maps.LatLng(14.30,   87.70), 
		new google.maps.LatLng(14.40,   87.30) 
	];

	// Define the symbol, using one of the predefined paths ('CIRCLE')
  	// supplied by the Google Maps JavaScript API.
  	var fiveSymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#d6d6d6'
  	};

function animateFiveCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = five.get('icons');
      icons[0].offset = (count / 2) + '%';
      five.set('icons', icons);
  }, 20);
}