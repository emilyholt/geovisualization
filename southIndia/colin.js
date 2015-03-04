var colin;

	var colinCoordinates = [
		new google.maps.LatLng(-11.90,   86.30), 
		new google.maps.LatLng(-12.50,   83.70), 
		new google.maps.LatLng(-14.00,   82.00),
		new google.maps.LatLng(-16.30,   80.40), 
		new google.maps.LatLng(-17.10,   79.20),
		new google.maps.LatLng(-18.20,   78.20), 
		new google.maps.LatLng(-20.10,   76.80),
		new google.maps.LatLng(-22.50,   75.30), 
		new google.maps.LatLng(-24.90,   73.60), 
		new google.maps.LatLng(-26.70,   73.30), 
		new google.maps.LatLng(-28.80,   73.50), 
		new google.maps.LatLng(-30.50,   75.50),
		new google.maps.LatLng(-31.80,   77.70) 
	];

	// Define the symbol, using one of the predefined paths ('CIRCLE')
  	// supplied by the Google Maps JavaScript API.
  	var colinSymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#d6d6d6'
  	};

function animateColinCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = colin.get('icons');
      icons[0].offset = (count / 2) + '%';
      colin.set('icons', icons);
  }, 20);
}