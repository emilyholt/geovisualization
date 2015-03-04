var fobane;

//TROPICAL STORM fobane
  	var fobaneCoordinates = [
	  	  new google.maps.LatLng(-18.30,   40.30),
        new google.maps.LatLng(-19.40,   39.90),
        new google.maps.LatLng(-21.00,   39.70),
        new google.maps.LatLng(-21.90,   39.30),
        new google.maps.LatLng(-24.60,   38.60),
        new google.maps.LatLng(-27.40,   38.30),
        new google.maps.LatLng(-29.90,   38.80),
        new google.maps.LatLng(-31.80,   40.00),
        new google.maps.LatLng(-32.90,   41.30)
  	];

  // Define the symbol, using one of the predefined paths ('CIRCLE')
  // supplied by the Google Maps JavaScript API.
  	var fobaneSymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#d6d6d6'
  	};

function animateFobaneCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = fobane.get('icons');
      icons[0].offset = (count / 2) + '%';
      fobane.set('icons', icons);
  }, 20);
}