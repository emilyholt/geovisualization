var beryl;

//TROPICAL STORM BERYL
  	var berylCoordinates = [
	  	new google.maps.LatLng(32.50,  -74.80),
      new google.maps.LatLng(32.30,  -75.60),
      new google.maps.LatLng(31.60,  -76.30),
      new google.maps.LatLng(31.50,  -76.60),
      new google.maps.LatLng(30.80,  -77.20),
      new google.maps.LatLng(30.50,  -78.80),
      new google.maps.LatLng(30.10,  -79.60),
      new google.maps.LatLng(30.00,  -80.30),
      new google.maps.LatLng(30.20,  -81.10),
      new google.maps.LatLng(30.30,  -82.00),
      new google.maps.LatLng(30.50,  -82.70),
      new google.maps.LatLng(30.80,  -83.10),
      new google.maps.LatLng(30.80,  -83.40),
      new google.maps.LatLng(30.90,  -83.40),
      new google.maps.LatLng(31.50,  -82.90),
      new google.maps.LatLng(31.80,  -82.50),
      new google.maps.LatLng(32.20,  -81.30),
      new google.maps.LatLng(33.10,  -79.80),
      new google.maps.LatLng(34.20,  -78.00)
  	];

  // Define the symbol, using one of the predefined paths ('CIRCLE')
  // supplied by the Google Maps JavaScript API.
  	var berylSymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#d6d6d6'
  	};

  	function animateBerylCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = beryl.get('icons');
      icons[0].offset = (count / 2) + '%';
      beryl.set('icons', icons);
  }, 20);
}