var florence;

//TROPICAL STORM FLORENCE
  	var florenceCoordinates = [
	  	new google.maps.LatLng(13.80, -27.80),
      new google.maps.LatLng(14.20, -29.10),
      new google.maps.LatLng(14.80, -30.60),
      new google.maps.LatLng(15.30, -31.70),
      new google.maps.LatLng(16.10, -33.00),
      new google.maps.LatLng(16.60, -34.20),
      new google.maps.LatLng(16.50, -35.60),
      new google.maps.LatLng(16.30, -36.70),
      new google.maps.LatLng(16.20, -37.90),
      new google.maps.LatLng(16.20, -38.80),
  	];

  // Define the symbol, using one of the predefined paths ('CIRCLE')
  // supplied by the Google Maps JavaScript API.
  	var florenceSymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#00fff9'
  	};

  	function animateFlorenceCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = florence.get('icons');
      icons[0].offset = (count / 2) + '%';
      florence.set('icons', icons);
  }, 20);
}