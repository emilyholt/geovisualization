var alberto;

//TROPICAL STORM ALBERTO
  	var albertoCoordinates = [
	  	new google.maps.LatLng(32.20,  -77.70),
      new google.maps.LatLng(31.80,  -78.50),
      new google.maps.LatLng(31.70,  -78.90),
      new google.maps.LatLng(31.50,  -79.70),
      new google.maps.LatLng(30.90,  -80.00),
      new google.maps.LatLng(30.50,  -80.10),
      new google.maps.LatLng(30.40,  -79.70),
      new google.maps.LatLng(30.40,  -78.80),
      new google.maps.LatLng(30.50,  -77.90),
      new google.maps.LatLng(30.90,  -76.50),
      new google.maps.LatLng(32.00,  -75.50)
  	];

  // Define the symbol, using one of the predefined paths ('CIRCLE')
  // supplied by the Google Maps JavaScript API.
  	var albertoSymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#d6d6d6'
  	};

  	function animateAlbertoCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = alberto.get('icons');
      icons[0].offset = (count / 2) + '%';
      alberto.set('icons', icons);
  }, 20);
}