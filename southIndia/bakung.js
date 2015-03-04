var bakung;

//TROPICAL STORM bakung
  	var bakungCoordinates = [
	  	  new google.maps.LatLng(-9.10,   94.20),
        new google.maps.LatLng(-9.60,   92.80),
        new google.maps.LatLng(-10.20,   91.40),
        new google.maps.LatLng(-9.10,   89.60)
  	];

  // Define the symbol, using one of the predefined paths ('CIRCLE')
  // supplied by the Google Maps JavaScript API.
  	var bakungSymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#d6d6d6'
  	};

    

function animateBakungCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = bakung.get('icons');
      icons[0].offset = (count / 2) + '%';
      bakung.set('icons', icons);
  }, 20);
}