var helene;

//TROPICAL STORM HELENE
  	var heleneCoordinates = [
	  	new google.maps.LatLng(13.70, -43.80),
      new google.maps.LatLng(13.70, -45.50),
      new google.maps.LatLng(13.60, -47.20),
      new google.maps.LatLng(13.70, -49.50),
      new google.maps.LatLng(13.70, -51.90),
      new google.maps.LatLng(13.90, -54.10),
      new google.maps.LatLng(14.00, -56.10),
      new google.maps.LatLng(14.00, -57.50),
      new google.maps.LatLng(20.60, -96.10),
      new google.maps.LatLng(21.00, -96.40),
      new google.maps.LatLng(21.60, -97.00),
      new google.maps.LatLng(22.00, -98.00),
      new google.maps.LatLng(22.60, -98.80),
  	];

  // Define the symbol, using one of the predefined paths ('CIRCLE')
  // supplied by the Google Maps JavaScript API.
  	var heleneSymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#d6d6d6'
  	};

  	function animateHeleneCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = helene.get('icons');
      icons[0].offset = (count / 2) + '%';
      helene.set('icons', icons);
  }, 20);
}