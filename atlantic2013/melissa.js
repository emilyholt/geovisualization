var melissa;

//TROPICAL STORM MELISSA
  	var melissaCoordinates = [
	  	new google.maps.LatLng(29.30,  -53.60),
      new google.maps.LatLng(29.80,  -54.20),
      new google.maps.LatLng(30.30,  -54.70),
      new google.maps.LatLng(31.20,  -54.60),
      new google.maps.LatLng(33.00,  -53.70),
      new google.maps.LatLng(33.60,  -52.40),
      new google.maps.LatLng(34.80,  -50.20),
      new google.maps.LatLng(35.60,  -47.70),
      new google.maps.LatLng(37.20,  -44.90),
      new google.maps.LatLng(38.10,  -42.10),
      new google.maps.LatLng(39.10,  -38.50),
      new google.maps.LatLng(40.00,  -34.80),
      new google.maps.LatLng(40.90,  -32.10)
  	];

  // Define the symbol, using one of the predefined paths ('CIRCLE')
  // supplied by the Google Maps JavaScript API.
  	var melissaSymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#d6d6d6'
  	};

  	function animateMelissaCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = melissa.get('icons');
      icons[0].offset = (count / 2) + '%';
      melissa.set('icons', icons);
  }, 20);
}