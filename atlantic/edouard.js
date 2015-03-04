var edouard;

	var edouardCoordinates = [
		new google.maps.LatLng(16.20,  -37.10), 
		new google.maps.LatLng(17.00,  -38.20),
		new google.maps.LatLng(17.30,  -39.40),
		new google.maps.LatLng(17.60,  -41.70), 
		new google.maps.LatLng(18.50,  -43.00), 
		new google.maps.LatLng(19.50,  -44.10),
		new google.maps.LatLng(19.50,  -45.20), 
		new google.maps.LatLng(20.70,  -46.20), 
		new google.maps.LatLng(21.70,  -46.90),
		new google.maps.LatLng(22.50,  -47.50), 
		new google.maps.LatLng(23.40,  -48.50), 
		new google.maps.LatLng(24.00,  -49.70), 
		new google.maps.LatLng(24.70,  -50.70), 
		new google.maps.LatLng(25.40,  -52.10),
		new google.maps.LatLng(26.20,  -53.30), 
		new google.maps.LatLng(26.90,  -54.50),
		new google.maps.LatLng(27.30,  -55.50),
		new google.maps.LatLng(28.00,  -56.50),
		new google.maps.LatLng(29.00,  -56.90), 
		new google.maps.LatLng(30.20,  -57.30), 
		new google.maps.LatLng(31.10, -57.80),
		new google.maps.LatLng(32.30,  -57.50),
		new google.maps.LatLng(33.50,  -56.40),
		new google.maps.LatLng(35.10,  -55.40),
		new google.maps.LatLng(36.40,  -53.30),
		new google.maps.LatLng(37.80,  -51.20), 
		new google.maps.LatLng(38.70,  -48.20), 
		new google.maps.LatLng(39.60,  -45.30), 
		new google.maps.LatLng(39.90,  -42.70),
		new google.maps.LatLng(39.90,  -39.20), 
		new google.maps.LatLng(39.80,  -38.50),
		new google.maps.LatLng(39.50,  -38.30) 
	];

	// Define the symbol, using one of the predefined paths ('CIRCLE')
  	// supplied by the Google Maps JavaScript API.
  	var edouardSymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#d6d6d6'
  	};


function animateEdouardCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = edouard.get('icons');
      icons[0].offset = (count / 2) + '%';
      edouard.set('icons', icons);
  }, 20);
}