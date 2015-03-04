var dylan;

//TROPICAL STORM dylan
  	var dylanCoordinates = [
	  	  new google.maps.LatLng(-15.70,  151.00),
        new google.maps.LatLng(-16.90,  150.10),
        new google.maps.LatLng(-17.60,  148.50),
        new google.maps.LatLng(-18.80,  148.20),
        new google.maps.LatLng(-21.30,  147.90)
  	];

  // Define the symbol, using one of the predefined paths ('CIRCLE')
  // supplied by the Google Maps JavaScript API.
  	var dylanSymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#d6d6d6'
  	};

function animateDylanCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = dylan.get('icons');
      icons[0].offset = (count / 2) + '%';
      dylan.set('icons', icons);
  }, 20);
}