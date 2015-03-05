var michael;

//TROPICAL STORM MICHAEL
  	var michaelCoordinates = [
	  	new google.maps.LatLng(25.60, -42.20),
      new google.maps.LatLng(25.90, -42.80),
      new google.maps.LatLng(26.50, -43.30),
      new google.maps.LatLng(27.00, -43.50),
      new google.maps.LatLng(27.50, -43.70),
      new google.maps.LatLng(27.40, -43.70),
      new google.maps.LatLng(28.10, -43.90),
      new google.maps.LatLng(28.30, -43.30),
      new google.maps.LatLng(28.50, -42.90),
      new google.maps.LatLng(28.80, -42.70),
      new google.maps.LatLng(29.30, -42.20),
      new google.maps.LatLng(29.40, -42.00),
      new google.maps.LatLng(29.60, -41.70),
      new google.maps.LatLng(30.10, -41.30),
      new google.maps.LatLng(30.60, -41.00),
      new google.maps.LatLng(30.80, -40.80),
      new google.maps.LatLng(31.00, -40.80),
      new google.maps.LatLng(31.20, -41.10),
      new google.maps.LatLng(31.40, -41.30),
      new google.maps.LatLng(31.80, -41.80),
      new google.maps.LatLng(32.20, -41.80),
      new google.maps.LatLng(32.60, -42.10),
      new google.maps.LatLng(33.10, -42.30),
      new google.maps.LatLng(33.40, -42.40),
      new google.maps.LatLng(33.80, -42.70),
      new google.maps.LatLng(33.70, -43.20),
      new google.maps.LatLng(33.60, -43.80),
      new google.maps.LatLng(33.60, -44.40),
      new google.maps.LatLng(33.50, -45.20),
      new google.maps.LatLng(33.60, -46.30),
      new google.maps.LatLng(34.40, -47.60),
      new google.maps.LatLng(35.30, -48.00),
      new google.maps.LatLng(37.10, -47.70),
      new google.maps.LatLng(39.20, -47.20)
  	];

  // Define the symbol, using one of the predefined paths ('CIRCLE')
  // supplied by the Google Maps JavaScript API.
  	var michaelSymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#d6d6d6'
  	};

  	function animateMichaelCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = michael.get('icons');
      icons[0].offset = (count / 2) + '%';
      michael.set('icons', icons);
  }, 20);
}