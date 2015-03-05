var barry;

//TROPICAL STORM BARRY
  	var barryCoordinates = [
	  	new google.maps.LatLng(16.20,  -87.60),
      new google.maps.LatLng(16.40,  -88.40),
      new google.maps.LatLng(16.70,  -88.90),
      new google.maps.LatLng(17.00,  -89.40),
      new google.maps.LatLng(17.90,  -90.00),
      new google.maps.LatLng(18.30,  -91.90),
      new google.maps.LatLng(18.90,  -92.70),
      new google.maps.LatLng(19.30,  -93.30),
      new google.maps.LatLng(19.60,  -94.50),
      new google.maps.LatLng(19.60,  -95.20),
      new google.maps.LatLng(19.60,  -95.80),
      new google.maps.LatLng(19.60,  -96.20),
      new google.maps.LatLng(19.60,  -96.60),
      new google.maps.LatLng(19.60,  -97.70)
  	];

  // Define the symbol, using one of the predefined paths ('CIRCLE')
  // supplied by the Google Maps JavaScript API.
  	var barrySymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#d6d6d6'
  	};

  	function animateBarryCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = barry.get('icons');
      icons[0].offset = (count / 2) + '%';
      barry.set('icons', icons);
  }, 20);
}