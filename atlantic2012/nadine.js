var nadine;

//TROPICAL STORM NADINE
  	var nadineCoordinates = [
	  	new google.maps.LatLng(16.30, -43.10),
      new google.maps.LatLng(17.50, -43.80),
      new google.maps.LatLng(17.80, -45.20),
      new google.maps.LatLng(18.60, -46.60),
      new google.maps.LatLng(19.10, -47.60),
      new google.maps.LatLng(20.00, -48.90),
      new google.maps.LatLng(20.70, -50.10),
      new google.maps.LatLng(21.50, -51.30),
      new google.maps.LatLng(22.60, -52.20),
      new google.maps.LatLng(24.00, -53.00),
      new google.maps.LatLng(26.30, -54.10),
      new google.maps.LatLng(28.00, -53.50),
      new google.maps.LatLng(28.80, -53.40),
      new google.maps.LatLng(30.00, -52.80),
      new google.maps.LatLng(30.70, -51.40),
      new google.maps.LatLng(30.90, -49.90),
      new google.maps.LatLng(30.80, -48.20),
      new google.maps.LatLng(30.60, -46.60),
      new google.maps.LatLng(30.50, -44.70),
      new google.maps.LatLng(30.50, -41.70),
      new google.maps.LatLng(30.80, -39.10),
      new google.maps.LatLng(31.40, -38.10),
      new google.maps.LatLng(32.00, -36.40),
      new google.maps.LatLng(32.90, -35.30),
      new google.maps.LatLng(33.50, -34.50),
      new google.maps.LatLng(33.90, -34.20),
      new google.maps.LatLng(34.30, -33.60),
      new google.maps.LatLng(34.40, -32.90),
      new google.maps.LatLng(35.20, -32.60),
      new google.maps.LatLng(35.80, -32.20),
      new google.maps.LatLng(36.40, -32.10),
      new google.maps.LatLng(37.20, -31.80),
      new google.maps.LatLng(37.10, -32.00),
      new google.maps.LatLng(37.10, -31.40),
      new google.maps.LatLng(36.80, -30.60),
      new google.maps.LatLng(36.20, -29.40),
      new google.maps.LatLng(36.10, -28.20),
      new google.maps.LatLng(35.40, -28.00),
      new google.maps.LatLng(35.10, -27.20),
      new google.maps.LatLng(34.10, -27.50),
      new google.maps.LatLng(33.00, -27.00),
      new google.maps.LatLng(31.90, -26.60),
      new google.maps.LatLng(30.60, -25.60),
      new google.maps.LatLng(31.00, -26.10),
      new google.maps.LatLng(31.00, -26.30),
      new google.maps.LatLng(31.40, -26.90),
      new google.maps.LatLng(31.70, -27.80),
      new google.maps.LatLng(31.70, -28.60),
      new google.maps.LatLng(32.20, -29.00),
      new google.maps.LatLng(32.10, -29.60),
      new google.maps.LatLng(31.90, -30.00),
      new google.maps.LatLng(31.70, -30.40),
      new google.maps.LatLng(31.20, -30.40),
      new google.maps.LatLng(30.90, -30.50),
      new google.maps.LatLng(30.60, -30.30),
      new google.maps.LatLng(30.20, -30.80),
      new google.maps.LatLng(29.50, -31.40),
      new google.maps.LatLng(28.90, -31.50),
      new google.maps.LatLng(28.70, -32.40),
      new google.maps.LatLng(28.60, -32.80),
      new google.maps.LatLng(28.80, -33.60),
      new google.maps.LatLng(29.00, -34.10),
      new google.maps.LatLng(29.60, -34.70),
      new google.maps.LatLng(30.10, -35.00),
      new google.maps.LatLng(31.00, -35.50),
      new google.maps.LatLng(31.90, -35.90),
      new google.maps.LatLng(33.30, -36.20),
      new google.maps.LatLng(34.40, -36.70),
      new google.maps.LatLng(35.60, -37.50),
      new google.maps.LatLng(36.60, -37.80),
      new google.maps.LatLng(37.10, -38.60),
      new google.maps.LatLng(37.20, -39.20),
      new google.maps.LatLng(36.70, -39.40),
      new google.maps.LatLng(36.30, -39.30),
      new google.maps.LatLng(35.80, -39.20),
      new google.maps.LatLng(35.40, -39.40),
      new google.maps.LatLng(34.70, -38.90),
      new google.maps.LatLng(34.50, -38.10),
      new google.maps.LatLng(34.20, -37.50),
      new google.maps.LatLng(34.40, -36.70),
      new google.maps.LatLng(34.40, -35.70),
      new google.maps.LatLng(34.90, -34.60),
      new google.maps.LatLng(35.10, -33.30),
      new google.maps.LatLng(36.10, -31.90),
      new google.maps.LatLng(37.40, -30.30),
      new google.maps.LatLng(38.40, -28.40)
  	];

  // Define the symbol, using one of the predefined paths ('CIRCLE')
  // supplied by the Google Maps JavaScript API.
  	var nadineSymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#00fff9'
  	};

  	function animateNadineCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = nadine.get('icons');
      icons[0].offset = (count / 2) + '%';
      nadine.set('icons', icons);
  }, 20);
}