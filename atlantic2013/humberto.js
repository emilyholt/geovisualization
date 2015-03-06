var humberto;

//TROPICAL STORM HUMBERTO
  	var humbertoCoordinates = [
	  	new google.maps.LatLng(13.10,  -20.70),
      new google.maps.LatLng(13.20,  -21.90),
      new google.maps.LatLng(13.40,  -22.80),
      new google.maps.LatLng(13.60,  -24.10),
      new google.maps.LatLng(13.70,  -25.30),
      new google.maps.LatLng(13.90,  -25.90),
      new google.maps.LatLng(14.40,  -26.60),
      new google.maps.LatLng(14.60,  -27.70),
      new google.maps.LatLng(15.00,  -28.10),
      new google.maps.LatLng(15.40,  -28.40),
      new google.maps.LatLng(16.00,  -28.90),
      new google.maps.LatLng(16.70,  -29.10),
      new google.maps.LatLng(18.00,  -29.00),
      new google.maps.LatLng(19.10,  -29.00),
      new google.maps.LatLng(20.50,  -28.70),
      new google.maps.LatLng(21.80,  -29.00),
      new google.maps.LatLng(23.10,  -29.20),
      new google.maps.LatLng(23.40,  -29.70),
      new google.maps.LatLng(24.40,  -30.20),
      new google.maps.LatLng(24.70,  -31.30),
      new google.maps.LatLng(25.00,  -32.10),
      new google.maps.LatLng(24.80,  -33.00),
      new google.maps.LatLng(25.00,  -34.00),
      new google.maps.LatLng(27.20,  -43.20),
      new google.maps.LatLng(27.30,  -43.50),
      new google.maps.LatLng(27.00,  -43.30),
      new google.maps.LatLng(27.80,  -42.70),
      new google.maps.LatLng(29.40,  -42.50),
      new google.maps.LatLng(30.30,  -42.80),
      new google.maps.LatLng(30.80,  -43.30),
      new google.maps.LatLng(31.40,  -43.70),
      new google.maps.LatLng(31.30,  -43.80),
      new google.maps.LatLng(31.80,  -43.70),
      new google.maps.LatLng(32.50,  -43.40),
      new google.maps.LatLng(33.00,  -44.30),
      new google.maps.LatLng(32.80,  -43.30)
  	];

  // Define the symbol, using one of the predefined paths ('CIRCLE')
  // supplied by the Google Maps JavaScript API.
  	var humbertoSymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#fd00ff'
  	};

  	function animateHumbertoCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = humberto.get('icons');
      icons[0].offset = (count / 2) + '%';
      humberto.set('icons', icons);
  }, 20);
}