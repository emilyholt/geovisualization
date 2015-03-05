var andrea;

//TROPICAL STORM ANDREA
  	var andreaCoordinates = [
	  	new google.maps.LatLng(25.30,  -86.50),
      new google.maps.LatLng(26.00,  -86.30),
      new google.maps.LatLng(27.00,  -85.90),
      new google.maps.LatLng(28.20,  -84.30),
      new google.maps.LatLng(29.50,  -83.40),
      new google.maps.LatLng(30.30,  -82.40),
      new google.maps.LatLng(32.40,  -80.70),
      new google.maps.LatLng(34.40,  -79.50),
  	];

  // Define the symbol, using one of the predefined paths ('CIRCLE')
  // supplied by the Google Maps JavaScript API.
  	var andreaSymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#d6d6d6'
  	};

  	function animateAndreaCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = andrea.get('icons');
      icons[0].offset = (count / 2) + '%';
      andrea.set('icons', icons);
  }, 20);
}