var leslie;

//TROPICAL STORM LESLIE
  	var leslieCoordinates = [
	  	new google.maps.LatLng(14.10, -43.40),
      new google.maps.LatLng(14.40, -45.30),
      new google.maps.LatLng(14.70, -46.80),
      new google.maps.LatLng(15.20, -47.80),
      new google.maps.LatLng(16.20, -49.10),
      new google.maps.LatLng(16.70, -51.00),
      new google.maps.LatLng(17.40, -52.80),
      new google.maps.LatLng(17.80, -53.50),
      new google.maps.LatLng(18.30, -55.70),
      new google.maps.LatLng(19.20, -57.30),
      new google.maps.LatLng(20.20, -58.40),
      new google.maps.LatLng(20.80, -59.50),
      new google.maps.LatLng(21.30, -61.10),
      new google.maps.LatLng(22.40, -61.30),
      new google.maps.LatLng(23.40, -61.70),
      new google.maps.LatLng(23.80, -62.10),
      new google.maps.LatLng(24.40, -63.10),
      new google.maps.LatLng(24.00, -63.10),
      new google.maps.LatLng(24.00, -63.10),
      new google.maps.LatLng(24.70, -62.50),
      new google.maps.LatLng(25.00, -62.50),
      new google.maps.LatLng(25.30, -62.60),
      new google.maps.LatLng(25.20, -62.80),
      new google.maps.LatLng(25.40, -62.90),
      new google.maps.LatLng(25.70, -62.80),
      new google.maps.LatLng(25.90, -62.70),
      new google.maps.LatLng(26.20, -62.50),
      new google.maps.LatLng(26.30, -62.40),
      new google.maps.LatLng(26.40, -62.40),
      new google.maps.LatLng(26.50, -62.20),
      new google.maps.LatLng(26.50, -62.20),
      new google.maps.LatLng(26.70, -62.20),
      new google.maps.LatLng(26.80, -62.20),
      new google.maps.LatLng(27.40, -62.20),
      new google.maps.LatLng(27.60, -62.30),
      new google.maps.LatLng(28.10, -62.30),
      new google.maps.LatLng(28.60, -62.50),
      new google.maps.LatLng(29.40, -62.50),
      new google.maps.LatLng(30.10, -62.60),
      new google.maps.LatLng(30.80, -62.50),
      new google.maps.LatLng(32.00, -62.40),
      new google.maps.LatLng(33.40, -62.10),
      new google.maps.LatLng(34.40, -61.80),
      new google.maps.LatLng(35.70, -61.20),
      new google.maps.LatLng(37.00, -60.20),
      new google.maps.LatLng(40.00, -59.10),
      new google.maps.LatLng(42.70, -57.50),
      new google.maps.LatLng(45.70, -56.40),
  	];

  // Define the symbol, using one of the predefined paths ('CIRCLE')
  // supplied by the Google Maps JavaScript API.
  	var leslieSymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#d6d6d6'
  	};

  	function animateLeslieCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = leslie.get('icons');
      icons[0].offset = (count / 2) + '%';
      leslie.set('icons', icons);
  }, 20);
}