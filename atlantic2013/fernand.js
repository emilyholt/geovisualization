var fernand;

//TROPICAL STORM FERNAND
  	var fernandCoordinates = [
	  	new google.maps.LatLng(19.50,  -95.50),
      new google.maps.LatLng(19.20,  -95.80),
      new google.maps.LatLng(19.30,  -96.20),
      new google.maps.LatLng(19.80,  -96.90),
      new google.maps.LatLng(20.30,  -97.70)
  	];

  // Define the symbol, using one of the predefined paths ('CIRCLE')
  // supplied by the Google Maps JavaScript API.
  	var fernandSymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#fd00ff'
  	};

  	function animateFernandCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = fernand.get('icons');
      icons[0].offset = (count / 2) + '%';
      fernand.set('icons', icons);
  }, 20);
}