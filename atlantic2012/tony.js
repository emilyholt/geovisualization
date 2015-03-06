var tony;

//TROPICAL STORM TONY
  	var tonyCoordinates = [
	  	new google.maps.LatLng(22.30,  -51.70),
      new google.maps.LatLng(23.00,  -51.80),
      new google.maps.LatLng(24.10,  -51.50),
      new google.maps.LatLng(25.70,  -51.00),
      new google.maps.LatLng(26.30,  -50.00),
      new google.maps.LatLng(26.70,  -49.20),
      new google.maps.LatLng(27.40,  -47.90),
      new google.maps.LatLng(28.50,  -45.40),
      new google.maps.LatLng(29.60,  -42.50),
      new google.maps.LatLng(30.10,  -40.30),
      new google.maps.LatLng(30.40,  -38.40),
      new google.maps.LatLng(31.00,  -36.30)
  	];

  // Define the symbol, using one of the predefined paths ('CIRCLE')
  // supplied by the Google Maps JavaScript API.
  	var tonySymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#00fff9'
  	};

  	function animateTonyCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = tony.get('icons');
      icons[0].offset = (count / 2) + '%';
      tony.set('icons', icons);
  }, 20);
}