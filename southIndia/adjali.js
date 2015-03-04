var adjali;

//TROPICAL STORM adjali
  	var adjaliCoordinates = [
	  	  new google.maps.LatLng(-8.90,   66.70), 
        new google.maps.LatLng(-9.20,   67.30),
        new google.maps.LatLng(-9.60,   68.50),
        new google.maps.LatLng(-10.90,   69.80),
        new google.maps.LatLng(-11.60,   70.30),
        new google.maps.LatLng(-12.80,   70.50),
        new google.maps.LatLng(-13.30,   70.00)
  	];

  // Define the symbol, using one of the predefined paths ('CIRCLE')
  // supplied by the Google Maps JavaScript API.
  	var adjaliSymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#d6d6d6'
  	};

    

function animateAdjaliCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = adjali.get('icons');
      icons[0].offset = (count / 2) + '%';
      adjali.set('icons', icons);
  }, 20);
}