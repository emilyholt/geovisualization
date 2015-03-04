var cristobal;

	var cristobalCoordinates = [
		new google.maps.LatLng(21.80,  -72.30),
		new google.maps.LatLng(22.30,  -72.60),
		new google.maps.LatLng(22.90,  -73.30),
		new google.maps.LatLng(23.60,  -73.10),
		new google.maps.LatLng(24.50,  -73.00), 
		new google.maps.LatLng(24.80,  -73.10),
		new google.maps.LatLng(24.50,  -72.80),
		new google.maps.LatLng(24.60,  -72.70), 
		new google.maps.LatLng(25.30,  -72.50),
		new google.maps.LatLng(25.10,  -71.90),
		new google.maps.LatLng(26.00,  -71.90),
		new google.maps.LatLng(27.20,  -71.70),
		new google.maps.LatLng(28.80,  -71.40),
		new google.maps.LatLng(30.40,  -71.50),
		new google.maps.LatLng(30.90,  -71.90),
		new google.maps.LatLng(31.80,  -72.20),
		new google.maps.LatLng(32.70,  -71.40),
		new google.maps.LatLng(34.10,  -69.90), 
		new google.maps.LatLng(35.60,  -67.80),
		new google.maps.LatLng(36.90,  -65.90), 
		new google.maps.LatLng(38.50,  -61.50),
		new google.maps.LatLng(40.20,  -56.60),
		new google.maps.LatLng(42.10,  -51.70)
	];

	// Define the symbol, using one of the predefined paths ('CIRCLE')
  	// supplied by the Google Maps JavaScript API.
  	var cristobalSymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#d6d6d6'
  	};



function animateCristobalCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = cristobal.get('icons');
      icons[0].offset = (count / 2) + '%';
      cristobal.set('icons', icons);
  }, 20);
}