var erin;

//TROPICAL STORM ERIN
  	var erinCoordinates = [
	  	new google.maps.LatLng(14.00,  -23.50),
      new google.maps.LatLng(14.40,  -25.20),
      new google.maps.LatLng(14.40,  -26.50),
      new google.maps.LatLng(15.00,  -27.50),
      new google.maps.LatLng(15.50,  -29.10),
      new google.maps.LatLng(16.30,  -30.50),
      new google.maps.LatLng(16.90,  -32.10),
      new google.maps.LatLng(17.70,  -33.30),
      new google.maps.LatLng(18.50,  -34.50),
      new google.maps.LatLng(18.90,  -35.60),
      new google.maps.LatLng(19.80,  -35.70),
      new google.maps.LatLng(21.00,  -37.00),
      new google.maps.LatLng(20.70,  -37.70),
      new google.maps.LatLng(20.70,  -38.40),
      new google.maps.LatLng(20.50,  -39.30)
  	];

  // Define the symbol, using one of the predefined paths ('CIRCLE')
  // supplied by the Google Maps JavaScript API.
  	var erinSymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#fd00ff'
  	};

  	function animateErinCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = erin.get('icons');
      icons[0].offset = (count / 2) + '%';
      erin.set('icons', icons);
  }, 20);
}