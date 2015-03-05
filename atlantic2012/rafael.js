var rafael;

//TROPICAL STORM RAFAEL
  	var rafaelCoordinates = [
	  	new google.maps.LatLng(15.00,  -63.10),
      new google.maps.LatLng(15.40,  -63.40),
      new google.maps.LatLng(15.70,  -64.20),
      new google.maps.LatLng(15.90,  -64.10),
      new google.maps.LatLng(17.30,  -63.30),
      new google.maps.LatLng(18.40,  -63.60),
      new google.maps.LatLng(19.40,  -63.80),
      new google.maps.LatLng(20.00,  -64.10),
      new google.maps.LatLng(20.70,  -64.70),
      new google.maps.LatLng(21.60,  -64.80),
      new google.maps.LatLng(22.50,  -65.30),
      new google.maps.LatLng(23.00,  -65.70),
      new google.maps.LatLng(24.10,  -65.80),
      new google.maps.LatLng(25.10,  -65.50),
      new google.maps.LatLng(26.60,  -65.00),
      new google.maps.LatLng(28.60,  -64.50),
      new google.maps.LatLng(30.60,  -63.80),
      new google.maps.LatLng(32.40,  -62.50),
      new google.maps.LatLng(35.20,  -60.70),
      new google.maps.LatLng(37.50,  -59.10)
  	];

  // Define the symbol, using one of the predefined paths ('CIRCLE')
  // supplied by the Google Maps JavaScript API.
  	var rafaelSymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#d6d6d6'
  	};

  	function animateRafaelCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = rafael.get('icons');
      icons[0].offset = (count / 2) + '%';
      rafael.set('icons', icons);
  }, 20);
}