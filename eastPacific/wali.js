var wali;

	var waliCoordinates = [
		new google.maps.LatLng(12.70, -140.70),
    new google.maps.LatLng(12.40, -140.40),
    new google.maps.LatLng(13.10, -140.90),
    new google.maps.LatLng(13.70, -141.30),
    new google.maps.LatLng(14.40, -141.70),
    new google.maps.LatLng(15.60, -143.60),
    new google.maps.LatLng(16.10, -144.40)
	];

	// Define the symbol, using one of the predefined paths ('CIRCLE')
  	// supplied by the Google Maps JavaScript API.
  	var waliSymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#d6d6d6'
  	};

function animateWaliCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = wali.get('icons');
      icons[0].offset = (count / 2) + '%';
      wali.set('icons', icons);
  }, 20);
}