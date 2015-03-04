var two;

	var twoCoordinates = [
		new google.maps.LatLng(11.60,  -43.80),
		new google.maps.LatLng(12.00,  -45.10),
		new google.maps.LatLng(12.20,  -46.40),
		new google.maps.LatLng(12.60,  -48.00),
		new google.maps.LatLng(13.40,  -51.40),
		new google.maps.LatLng(13.90,  -53.20)
	];

	// Define the symbol, using one of the predefined paths ('CIRCLE')
  	// supplied by the Google Maps JavaScript API.
  	var twoSymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#d6d6d6'
  	};

function animateTwoCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = two.get('icons');
      icons[0].offset = (count / 2) + '%';
      two.set('icons', icons);
  }, 20);
}