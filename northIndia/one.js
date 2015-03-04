var one;

var oneCoordinates = [
		new google.maps.LatLng(9.00,   83.30),
		new google.maps.LatLng(9.10,   83.00), 
		new google.maps.LatLng(9.30,   82.40),
		new google.maps.LatLng(9.30,   81.90), 
		new google.maps.LatLng(9.30,   81.80), 
		new google.maps.LatLng(9.20,   81.50), 
		new google.maps.LatLng(9.30,   81.20)
	];

	// Define the symbol, using one of the predefined paths ('CIRCLE')
  	// supplied by the Google Maps JavaScript API.
  	var oneSymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#d6d6d6'
  	};

function animateOneCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = one.get('icons');
      icons[0].offset = (count / 2) + '%';
      one.set('icons', icons);
  }, 20);
}