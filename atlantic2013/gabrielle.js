var gabrielle;

//TROPICAL STORM GABRIELLE
  	var gabrielleCoordinates = [
	  	new google.maps.LatLng(16.50,  -66.20),
      new google.maps.LatLng(17.00,  -66.60),
      new google.maps.LatLng(17.50,  -66.90),
      new google.maps.LatLng(17.50,  -68.10),
      new google.maps.LatLng(18.20,  -68.60),
      new google.maps.LatLng(29.60,  -65.00),
      new google.maps.LatLng(30.60,  -65.00),
      new google.maps.LatLng(30.90,  -64.80),
      new google.maps.LatLng(31.50,  -64.90),
      new google.maps.LatLng(32.00,  -65.00),
      new google.maps.LatLng(32.50,  -65.70),
      new google.maps.LatLng(32.50,  -65.90),
      new google.maps.LatLng(32.80,  -66.40),
      new google.maps.LatLng(33.00,  -67.00),
      new google.maps.LatLng(33.50,  -67.70),
      new google.maps.LatLng(33.90,  -67.70),
      new google.maps.LatLng(34.40,  -67.90),
      new google.maps.LatLng(35.10,  -67.70),
      new google.maps.LatLng(36.50,  -67.50),
      new google.maps.LatLng(39.10,  -66.50)
  	];

  // Define the symbol, using one of the predefined paths ('CIRCLE')
  // supplied by the Google Maps JavaScript API.
  	var gabrielleSymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#d6d6d6'
  	};

  	function animateGabrielleCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = gabrielle.get('icons');
      icons[0].offset = (count / 2) + '%';
      gabrielle.set('icons', icons);
  }, 20);
}