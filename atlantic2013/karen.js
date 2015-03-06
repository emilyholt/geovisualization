var karen;

//TROPICAL STORM KAREN
  	var karenCoordinates = [
	  	new google.maps.LatLng(22.00,  -87.60),
      new google.maps.LatLng(22.20,  -87.90),
      new google.maps.LatLng(23.30,  -88.50),
      new google.maps.LatLng(24.20,  -89.00),
      new google.maps.LatLng(24.90,  -89.80),
      new google.maps.LatLng(25.60,  -90.20),
      new google.maps.LatLng(25.90,  -90.30),
      new google.maps.LatLng(26.40,  -90.50),
      new google.maps.LatLng(27.10,  -91.30),
      new google.maps.LatLng(27.90,  -91.70),
      new google.maps.LatLng(28.10,  -91.70),
      new google.maps.LatLng(28.10,  -91.90),
      new google.maps.LatLng(28.30,  -91.70)
  	];

  // Define the symbol, using one of the predefined paths ('CIRCLE')
  // supplied by the Google Maps JavaScript API.
  	var karenSymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#fd00ff'
  	};

  	function animateKarenCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = karen.get('icons');
      icons[0].offset = (count / 2) + '%';
      karen.set('icons', icons);
  }, 20);
}