var jerry;

//TROPICAL STORM JERRY
  	var jerryCoordinates = [
	  	new google.maps.LatLng(25.20,  -50.20),
      new google.maps.LatLng(25.60,  -49.70),
      new google.maps.LatLng(26.00,  -48.60),
      new google.maps.LatLng(27.20,  -47.60),
      new google.maps.LatLng(27.00,  -47.00),
      new google.maps.LatLng(26.90,  -46.70),
      new google.maps.LatLng(27.00,  -45.70),
      new google.maps.LatLng(27.30,  -44.90),
      new google.maps.LatLng(27.40,  -43.80),
      new google.maps.LatLng(27.20,  -43.70),
      new google.maps.LatLng(28.10,  -43.50),
      new google.maps.LatLng(28.10,  -43.50),
      new google.maps.LatLng(28.10,  -43.70),
      new google.maps.LatLng(28.10,  -44.00),
      new google.maps.LatLng(28.20,  -43.90),
      new google.maps.LatLng(29.30,  -42.60),
      new google.maps.LatLng(29.70,  -42.00),
      new google.maps.LatLng(30.20,  -41.40),
      new google.maps.LatLng(31.00,  -40.20)
  	];

  // Define the symbol, using one of the predefined paths ('CIRCLE')
  // supplied by the Google Maps JavaScript API.
  	var jerrySymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#d6d6d6'
  	};

  	function animateJerryCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = jerry.get('icons');
      icons[0].offset = (count / 2) + '%';
      jerry.set('icons', icons);
  }, 20);
}