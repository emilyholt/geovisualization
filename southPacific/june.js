var june;

//TROPICAL STORM june
  	var juneCoordinates = [
	  	new google.maps.LatLng(-18.30,  162.80),
      new google.maps.LatLng(-20.00,  163.70),
      new google.maps.LatLng(-23.00,  165.00),
      new google.maps.LatLng(-26.30,  165.50),
      new google.maps.LatLng(-27.90,  165.70)
  	];

  // Define the symbol, using one of the predefined paths ('CIRCLE')
  // supplied by the Google Maps JavaScript API.
  	var juneSymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#d6d6d6'
  	};

function animateJuneCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = june.get('icons');
      icons[0].offset = (count / 2) + '%';
      june.set('icons', icons);
  }, 20);
}