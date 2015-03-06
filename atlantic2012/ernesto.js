var ernesto;

//TROPICAL STORM ERNESTO
  	var ernestoCoordinates = [
	  	new google.maps.LatLng(12.20,  -49.00),
      new google.maps.LatLng(12.60,  -50.60),
      new google.maps.LatLng(12.80,  -52.60),
      new google.maps.LatLng(13.00,  -54.30),
      new google.maps.LatLng(12.80,  -56.60),
      new google.maps.LatLng(13.40,  -58.30),
      new google.maps.LatLng(13.50,  -60.70),
      new google.maps.LatLng(13.70,  -62.30),
      new google.maps.LatLng(13.90,  -64.10),
      new google.maps.LatLng(13.90,  -65.60),
      new google.maps.LatLng(14.10,  -67.20),
      new google.maps.LatLng(14.40,  -68.70),
      new google.maps.LatLng(14.80,  -70.10),
      new google.maps.LatLng(15.40,  -72.70),
      new google.maps.LatLng(15.10,  -74.80),
      new google.maps.LatLng(15.00,  -77.10),
      new google.maps.LatLng(15.30,  -78.60),
      new google.maps.LatLng(15.00,  -79.70),
      new google.maps.LatLng(15.10,  -80.50),
      new google.maps.LatLng(15.80,  -80.50),
      new google.maps.LatLng(16.20,  -81.60),
      new google.maps.LatLng(17.00,  -82.70),
      new google.maps.LatLng(17.50,  -83.90),
      new google.maps.LatLng(18.10,  -85.00),
      new google.maps.LatLng(18.50,  -85.50),
      new google.maps.LatLng(18.80,  -86.20),
      new google.maps.LatLng(18.70,  -87.70),
      new google.maps.LatLng(18.90,  -89.00),
      new google.maps.LatLng(18.70,  -90.40),
      new google.maps.LatLng(18.90,  -91.50),
      new google.maps.LatLng(18.80,  -91.80),
      new google.maps.LatLng(18.70,  -93.60),
      new google.maps.LatLng(18.20,  -94.30),
      new google.maps.LatLng(18.10,  -95.20),
      new google.maps.LatLng(18.10,  -96.70),
      new google.maps.LatLng(18.00,  -97.80),
  	];

  // Define the symbol, using one of the predefined paths ('CIRCLE')
  // supplied by the Google Maps JavaScript API.
  	var ernestoSymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#00fff9'
  	};

  	function animateErnestoCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = ernesto.get('icons');
      icons[0].offset = (count / 2) + '%';
      ernesto.set('icons', icons);
  }, 20);
}