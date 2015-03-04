var kofi;

//TROPICAL STORM kofi
  	var kofiCoordinates = [
	  	  new google.maps.LatLng(-20.20, -176.70),
        new google.maps.LatLng(-22.30, -175.30),
        new google.maps.LatLng(-23.60, -174.50),
        new google.maps.LatLng(-25.40, -172.70),
        new google.maps.LatLng(-27.60, -169.10),
        new google.maps.LatLng(-30.50, -164.30)
  	];

  // Define the symbol, using one of the predefined paths ('CIRCLE')
  // supplied by the Google Maps JavaScript API.
  	var kofiSymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#d6d6d6'
  	};

function animateKofiCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = kofi.get('icons');
      icons[0].offset = (count / 2) + '%';
      kofi.set('icons', icons);
  }, 20);
}