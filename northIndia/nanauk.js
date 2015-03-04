var nanauk;

	var nanaukCoordinates = [
		new google.maps.LatLng(15.10,   68.80), 
		new google.maps.LatLng(15.70,   68.60), 
		new google.maps.LatLng(16.40,   68.20), 
		new google.maps.LatLng(16.50,   67.80),
		new google.maps.LatLng(16.90,   67.10), 
		new google.maps.LatLng(16.90,   66.70), 
		new google.maps.LatLng(17.40,   66.10), 
		new google.maps.LatLng(17.50,   65.90),
		new google.maps.LatLng(18.00,   65.00), 
		new google.maps.LatLng(18.20,   64.70),
		new google.maps.LatLng(18.20,   63.60), 
		new google.maps.LatLng(18.50,   63.30),
		new google.maps.LatLng(18.60,   62.80) 
	];

	// Define the symbol, using one of the predefined paths ('CIRCLE')
  	// supplied by the Google Maps JavaScript API.
  	var nanaukSymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#d6d6d6'
  	};

function animateNanaukCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = nanauk.get('icons');
      icons[0].offset = (count / 2) + '%';
      nanauk.set('icons', icons);
  }, 20);
}