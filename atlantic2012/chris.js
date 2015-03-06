var chris;

//TROPICAL STORM CHRIS
  	var chrisCoordinates = [
	  	new google.maps.LatLng(39.30,  -57.70),
      new google.maps.LatLng(38.80,  -56.00),
      new google.maps.LatLng(38.20,  -53.50),
      new google.maps.LatLng(38.10,  -51.30),
      new google.maps.LatLng(38.50,  -49.00),
      new google.maps.LatLng(38.90,  -46.40),
      new google.maps.LatLng(39.90,  -44.80),
      new google.maps.LatLng(41.10,  -43.20),
      new google.maps.LatLng(42.40,  -42.90),
      new google.maps.LatLng(43.60,  -42.90),
      new google.maps.LatLng(44.80,  -44.50)
  	];

  // Define the symbol, using one of the predefined paths ('CIRCLE')
  // supplied by the Google Maps JavaScript API.
  	var chrisSymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#00fff9'
  	};

  	function animateChrisCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = chris.get('icons');
      icons[0].offset = (count / 2) + '%';
      chris.set('icons', icons);
  }, 20);
}