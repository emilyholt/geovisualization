var arthur;

//TROPICAL STORM ARTHUR
  	var arthurCoordinates = [
	  	new google.maps.LatLng(27.60,  -79.10),
	  	new google.maps.LatLng(27.60,  -79.30), 
	  	new google.maps.LatLng(27.80,  -79.40), 
	  	new google.maps.LatLng(27.90,  -79.20),
	  	new google.maps.LatLng(28.40,  -79.10), 
		  new google.maps.LatLng(29.10,  -79.10),
		  new google.maps.LatLng(29.70,  -79.10),
		  new google.maps.LatLng(31.30,  -79.10),
		  new google.maps.LatLng(32.40,  -78.50),
  		new google.maps.LatLng(33.40,  -77.90),
  		new google.maps.LatLng(34.60,  -76.60),
  		new google.maps.LatLng(36.00,  -75.30),
  		new google.maps.LatLng(37.70,  -73.40),
  		new google.maps.LatLng(39.40,  -71.10),
  		new google.maps.LatLng(41.20,  -68.70),
  		new google.maps.LatLng(43.10,  -66.90), 
  	];

  // Define the symbol, using one of the predefined paths ('CIRCLE')
  // supplied by the Google Maps JavaScript API.
  	var arthurSymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#d6d6d6'
  	};

  	function animateArthurCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = arthur.get('icons');
      icons[0].offset = (count / 2) + '%';
      arthur.set('icons', icons);
  }, 20);
}