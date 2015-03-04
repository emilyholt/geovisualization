var gillian;

//TROPICAL STORM gillian
  	var gillianCoordinates = [
	  	  new google.maps.LatLng(-11.30,  140.00),
        new google.maps.LatLng(-12.80,  140.30),
        new google.maps.LatLng(-12.80,  140.80),
        new google.maps.LatLng(-13.50,  141.60),
        new google.maps.LatLng(-14.40,  141.00)
  	];

  // Define the symbol, using one of the predefined paths ('CIRCLE')
  // supplied by the Google Maps JavaScript API.
  	var gillianSymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#d6d6d6'
  	};

function animateGillianCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = gillian.get('icons');
      icons[0].offset = (count / 2) + '%';
      gillian.set('icons', icons);
  }, 20);
}