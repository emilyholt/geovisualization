var elida;

	var elidaCoordinates = [
		new google.maps.LatLng(17.10, -103.40),
    new google.maps.LatLng(17.30, -104.10),
    new google.maps.LatLng(17.40, -104.40),
    new google.maps.LatLng(17.50, -104.30),
    new google.maps.LatLng(17.40, -104.30),
    new google.maps.LatLng(17.30, -104.00),
    new google.maps.LatLng(17.10, -103.50)
	];

	// Define the symbol, using one of the predefined paths ('CIRCLE')
  	// supplied by the Google Maps JavaScript API.
  	var elidaSymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#d6d6d6'
  	};

function animateElidaCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = elida.get('icons');
      icons[0].offset = (count / 2) + '%';
      elida.set('icons', icons);
  }, 20);
}