var fausto;

	var faustoCoordinates = [
		new google.maps.LatLng(9.40, -119.30),
    new google.maps.LatLng(9.60, -120.70),
    new google.maps.LatLng(9.40, -121.60),
    new google.maps.LatLng(9.60, -122.60),
    new google.maps.LatLng(9.80, -123.90),
    new google.maps.LatLng(10.80, -125.70),
    new google.maps.LatLng(11.40, -128.00),
    new google.maps.LatLng(11.50, -128.70)
	];

	// Define the symbol, using one of the predefined paths ('CIRCLE')
  	// supplied by the Google Maps JavaScript API.
  	var faustoSymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#d6d6d6'
  	};

function animateFaustoCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = fausto.get('icons');
      icons[0].offset = (count / 2) + '%';
      fausto.set('icons', icons);
  }, 20);
}