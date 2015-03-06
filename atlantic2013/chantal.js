var chantal;

//TROPICAL STORM CHANTAL
  	var chantalCoordinates = [
	  	new google.maps.LatLng(9.80,  -47.20),
      new google.maps.LatLng(10.40,  -49.50),
      new google.maps.LatLng(10.90,  -51.70),
      new google.maps.LatLng(11.80,  -53.90),
      new google.maps.LatLng(12.40,  -56.10),
      new google.maps.LatLng(13.30,  -58.40),
      new google.maps.LatLng(14.40,  -61.50),
      new google.maps.LatLng(15.20,  -63.70),
      new google.maps.LatLng(15.30,  -66.20),
      new google.maps.LatLng(16.50,  -69.50),
      new google.maps.LatLng(16.50,  -72.00)
  	];

  // Define the symbol, using one of the predefined paths ('CIRCLE')
  // supplied by the Google Maps JavaScript API.
  	var chantalSymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#fd00ff'
  	};

  	function animateChantalCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = chantal.get('icons');
      icons[0].offset = (count / 2) + '%';
      chantal.set('icons', icons);
  }, 20);
}