var nilofar;

	var nilofarCoordinates = [
		new google.maps.LatLng(13.40,   62.50), 
		new google.maps.LatLng(13.70,   63.00),
		new google.maps.LatLng(14.10,   63.00),
		new google.maps.LatLng(14.20,   62.90), 
		new google.maps.LatLng(14.30,   62.90),
		new google.maps.LatLng(14.40,   63.00),
		new google.maps.LatLng(14.80,   62.80), 
		new google.maps.LatLng(15.00,   62.40), 
		new google.maps.LatLng(15.00,   62.30), 
		new google.maps.LatLng(15.40,   62.10), 
		new google.maps.LatLng(15.70,   61.70),
		new google.maps.LatLng(15.90,   61.70),
		new google.maps.LatLng(16.80,   61.80),
		new google.maps.LatLng(17.80,   61.90), 
		new google.maps.LatLng(18.50,   62.00), 
		new google.maps.LatLng(18.70,   61.90), 
		new google.maps.LatLng(19.20,   62.20), 
		new google.maps.LatLng(19.10,   63.00), 
		new google.maps.LatLng(19.70,   63.90), 
		new google.maps.LatLng(20.00,   64.00), 
		new google.maps.LatLng(20.30,   64.50), 
		new google.maps.LatLng(20.50,   65.00)
	];

	// Define the symbol, using one of the predefined paths ('CIRCLE')
  	// supplied by the Google Maps JavaScript API.
  	var nilofarSymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#d6d6d6'
  	};

function animateNilofarCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = nilofar.get('icons');
      icons[0].offset = (count / 2) + '%';
      nilofar.set('icons', icons);
  }, 20);
}