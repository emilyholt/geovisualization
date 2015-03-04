var ian;

//TROPICAL STORM ian
  	var ianCoordinates = [
	  	new google.maps.LatLng(-18.90, -175.50), 
      new google.maps.LatLng(-19.00, -175.50),
      new google.maps.LatLng(-18.90, -176.00),
      new google.maps.LatLng(-17.80, -176.10),
      new google.maps.LatLng(-17.00, -176.70),
      new google.maps.LatLng(-16.80, -177.00),
      new google.maps.LatLng(-16.70, -176.80),
      new google.maps.LatLng(-16.80, -176.50),
      new google.maps.LatLng(-17.10, -175.80),
      new google.maps.LatLng(-18.00, -175.10),
      new google.maps.LatLng(-18.90, -174.80),
      new google.maps.LatLng(-20.50, -173.80),
      new google.maps.LatLng(-22.40, -173.20),
      new google.maps.LatLng(-24.50, -172.20),
      new google.maps.LatLng(-26.60, -171.30),
      new google.maps.LatLng(-29.00, -170.30),
      new google.maps.LatLng(-30.50, -168.80)
  	];

  // Define the symbol, using one of the predefined paths ('CIRCLE')
  // supplied by the Google Maps JavaScript API.
  	var ianSymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#d6d6d6'
  	};

function animateIanCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = ian.get('icons');
      icons[0].offset = (count / 2) + '%';
      ian.set('icons', icons);
  }, 20);
}