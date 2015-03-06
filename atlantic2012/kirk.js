var kirk;

//TROPICAL STORM KIRK
  	var kirkCoordinates = [
	  	new google.maps.LatLng(23.80, -43.90),
      new google.maps.LatLng(23.90, -45.00),
      new google.maps.LatLng(24.30, -45.30),
      new google.maps.LatLng(24.70, -46.90),
      new google.maps.LatLng(25.30, -47.60),
      new google.maps.LatLng(25.90, -48.30),
      new google.maps.LatLng(26.50, -49.00),
      new google.maps.LatLng(27.20, -49.50),
      new google.maps.LatLng(28.20, -50.30),
      new google.maps.LatLng(29.00, -50.70),
      new google.maps.LatLng(30.10, -50.90),
      new google.maps.LatLng(31.20, -50.80),
      new google.maps.LatLng(32.20, -50.20),
      new google.maps.LatLng(33.90, -49.50),
      new google.maps.LatLng(35.30, -48.20),
      new google.maps.LatLng(37.40, -46.50),
      new google.maps.LatLng(39.50, -44.30),
      new google.maps.LatLng(41.20, -41.80),
      new google.maps.LatLng(43.50, -39.20),
      new google.maps.LatLng(46.20, -36.50)
  	];

  // Define the symbol, using one of the predefined paths ('CIRCLE')
  // supplied by the Google Maps JavaScript API.
  	var kirkSymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#00fff9'
  	};

  	function animateKirkCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = kirk.get('icons');
      icons[0].offset = (count / 2) + '%';
      kirk.set('icons', icons);
  }, 20);
}