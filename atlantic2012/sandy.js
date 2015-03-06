var sandy;

//TROPICAL STORM SANDY
  	var sandyCoordinates = [
	  	new google.maps.LatLng(13.50, -78.00),
      new google.maps.LatLng(12.50, -78.50),
      new google.maps.LatLng(12.70, -78.60),
      new google.maps.LatLng(13.30, -78.60),
      new google.maps.LatLng(13.80, -77.80),
      new google.maps.LatLng(14.30, -77.60),
      new google.maps.LatLng(15.20, -77.20),
      new google.maps.LatLng(16.30, -77.00),
      new google.maps.LatLng(17.10, -76.70),
      new google.maps.LatLng(18.30, -76.60),
      new google.maps.LatLng(19.40, -76.30),
      new google.maps.LatLng(20.90, -75.80),
      new google.maps.LatLng(22.40, -75.50),
      new google.maps.LatLng(24.50, -75.60),
      new google.maps.LatLng(25.30, -76.10),
      new google.maps.LatLng(26.30, -76.90),
      new google.maps.LatLng(26.70, -76.90),
      new google.maps.LatLng(27.30, -77.10),
      new google.maps.LatLng(27.70, -77.10),
      new google.maps.LatLng(28.60, -76.70),
      new google.maps.LatLng(29.00, -76.00),
      new google.maps.LatLng(30.20, -75.20),
      new google.maps.LatLng(30.90, -74.30),
      new google.maps.LatLng(31.90, -73.30),
      new google.maps.LatLng(32.50, -72.60),
      new google.maps.LatLng(33.40, -71.30),
      new google.maps.LatLng(34.50, -70.50),
      new google.maps.LatLng(35.90, -70.50),
      new google.maps.LatLng(37.50, -71.50),
      new google.maps.LatLng(38.80, -74.40)
  	];

  // Define the symbol, using one of the predefined paths ('CIRCLE')
  // supplied by the Google Maps JavaScript API.
  	var sandySymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#00fff9'
  	};

  	function animateSandyCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = sandy.get('icons');
      icons[0].offset = (count / 2) + '%';
      sandy.set('icons', icons);
  }, 20);
}