var lorenzo;

//TROPICAL STORM LORENZO
  	var lorenzoCoordinates = [
	  	new google.maps.LatLng(28.00,  -55.10),
      new google.maps.LatLng(28.90,  -54.90),
      new google.maps.LatLng(29.30,  -53.80),
      new google.maps.LatLng(29.50,  -53.00),
      new google.maps.LatLng(29.50,  -52.00),
      new google.maps.LatLng(29.40,  -51.20),
      new google.maps.LatLng(29.60,  -50.00),
      new google.maps.LatLng(29.60,  -49.20),
      new google.maps.LatLng(29.50,  -49.00),
      new google.maps.LatLng(29.30,  -48.70),
      new google.maps.LatLng(29.50,  -48.20),
      new google.maps.LatLng(29.80,  -47.80)
  	];

  // Define the symbol, using one of the predefined paths ('CIRCLE')
  // supplied by the Google Maps JavaScript API.
  	var lorenzoSymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#d6d6d6'
  	};

  	function animateLorenzoCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = lorenzo.get('icons');
      icons[0].offset = (count / 2) + '%';
      lorenzo.set('icons', icons);
  }, 20);
}