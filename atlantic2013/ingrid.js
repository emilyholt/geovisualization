var ingrid;

//TROPICAL STORM INGRID
  	var ingridCoordinates = [
	  	new google.maps.LatLng(19.70,  -93.60),
      new google.maps.LatLng(19.70,  -94.00),
      new google.maps.LatLng(19.70,  -94.50),
      new google.maps.LatLng(19.40,  -95.30),
      new google.maps.LatLng(19.20,  -95.40),
      new google.maps.LatLng(19.20,  -95.30),
      new google.maps.LatLng(19.30,  -95.20),
      new google.maps.LatLng(19.80,  -95.00),
      new google.maps.LatLng(20.60,  -94.50),
      new google.maps.LatLng(21.30,  -94.40),
      new google.maps.LatLng(22.00,  -95.00),
      new google.maps.LatLng(22.40,  -95.40),
      new google.maps.LatLng(22.50,  -95.80),
      new google.maps.LatLng(22.70,  -96.30),
      new google.maps.LatLng(23.10,  -96.50),
      new google.maps.LatLng(23.40,  -97.10),
      new google.maps.LatLng(23.80,  -98.20),
      new google.maps.LatLng(23.70,  -99.00),
      new google.maps.LatLng(23.70,  -99.40)
  	];

  // Define the symbol, using one of the predefined paths ('CIRCLE')
  // supplied by the Google Maps JavaScript API.
  	var ingridSymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#fd00ff'
  	};

  	function animateIngridCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = ingrid.get('icons');
      icons[0].offset = (count / 2) + '%';
      ingrid.set('icons', icons);
  }, 20);
}