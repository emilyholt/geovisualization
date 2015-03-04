var bejisa;

	var bejisaCoordinates = [
		new google.maps.LatLng(-17.10,   53.30), 
		new google.maps.LatLng(-18.90,   53.60), 
		new google.maps.LatLng(-20.40,   54.30), 
		new google.maps.LatLng(-21.90,   55.20), 
		new google.maps.LatLng(-23.10,   55.90), 
		new google.maps.LatLng(-25.10,   54.10), 
		new google.maps.LatLng(-26.50,   52.10),
		new google.maps.LatLng(-28.90,   49.20), 
		new google.maps.LatLng(-32.30,   45.30)
	];

	// Define the symbol, using one of the predefined paths ('CIRCLE')
  	// supplied by the Google Maps JavaScript API.
  	var bejisaSymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#d6d6d6'
  	};

function animateBejisaCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = bejisa.get('icons');
      icons[0].offset = (count / 2) + '%';
      bejisa.set('icons', icons);
  }, 20);
}
