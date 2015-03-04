var hanna;

	var hannaCoordinates = [
		new google.maps.LatLng(19.40,  -92.90),
		new google.maps.LatLng(19.40,  -92.30), 
		new google.maps.LatLng(19.40,  -92.40),
		new google.maps.LatLng(19.20,  -91.70), 
		new google.maps.LatLng(18.90,  -90.90),
		new google.maps.LatLng(14.50,  -83.20), 
		new google.maps.LatLng(14.60,  -83.90),
		new google.maps.LatLng(14.50,  -84.50)
	];

	// Define the symbol, using one of the predefined paths ('CIRCLE')
  	// supplied by the Google Maps JavaScript API.
  	var hannaSymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#d6d6d6'
  	};

function animateHannaCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = hanna.get('icons');
      icons[0].offset = (count / 2) + '%';
      hanna.set('icons', icons);
  }, 20);
}
