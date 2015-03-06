var patty;

//TROPICAL STORM PATTY
  	var pattyCoordinates = [
	  	new google.maps.LatLng(25.40,  -72.60),
      new google.maps.LatLng(25.80,  -72.50),
      new google.maps.LatLng(25.90,  -72.50),
      new google.maps.LatLng(25.10,  -72.50),
      new google.maps.LatLng(25.50,  -72.00),
      new google.maps.LatLng(25.50,  -72.10),
      new google.maps.LatLng(25.40,  -72.10),
      new google.maps.LatLng(25.50,  -71.90)
  	];

  // Define the symbol, using one of the predefined paths ('CIRCLE')
  // supplied by the Google Maps JavaScript API.
  	var pattySymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#fd00ff'
  	};

  	function animatePattyCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = patty.get('icons');
      icons[0].offset = (count / 2) + '%';
      patty.set('icons', icons);
  }, 20);
}