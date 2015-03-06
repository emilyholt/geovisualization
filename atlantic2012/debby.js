var debby;

//TROPICAL STORM DEBBY
  	var debbyCoordinates = [
	  	new google.maps.LatLng(26.20,  -87.60),
      new google.maps.LatLng(26.30,  -87.50),
      new google.maps.LatLng(27.30,  -87.30),
      new google.maps.LatLng(27.50,  -87.00),
      new google.maps.LatLng(28.00,  -86.20),
      new google.maps.LatLng(28.40,  -85.80),
      new google.maps.LatLng(28.30,  -85.90),
      new google.maps.LatLng(28.60,  -85.80),
      new google.maps.LatLng(28.60,  -85.20),
      new google.maps.LatLng(29.30,  -85.10),
      new google.maps.LatLng(29.20,  -85.10),
      new google.maps.LatLng(29.00,  -84.50),
      new google.maps.LatLng(28.90,  -84.20),
      new google.maps.LatLng(29.50,  -83.40),
      new google.maps.LatLng(29.00,  -82.80),
      new google.maps.LatLng(29.60,  -81.00),
      new google.maps.LatLng(29.70,  -79.80)
  	];

  // Define the symbol, using one of the predefined paths ('CIRCLE')
  // supplied by the Google Maps JavaScript API.
  	var debbySymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#00fff9'
  	};

  	function animateDebbyCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = debby.get('icons');
      icons[0].offset = (count / 2) + '%';
      debby.set('icons', icons);
  }, 20);
}