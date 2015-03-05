var dorian;

//TROPICAL STORM DORIAN
  	var dorianCoordinates = [
	  	new google.maps.LatLng(13.90,  -28.10),
      new google.maps.LatLng(14.30,  -29.90),
      new google.maps.LatLng(14.60,  -31.40),
      new google.maps.LatLng(15.10,  -33.20),
      new google.maps.LatLng(15.60,  -34.50),
      new google.maps.LatLng(16.50,  -37.80),
      new google.maps.LatLng(16.60,  -39.60),
      new google.maps.LatLng(17.10,  -41.50),
      new google.maps.LatLng(17.70,  -43.40),
      new google.maps.LatLng(17.80,  -45.80),
      new google.maps.LatLng(17.90,  -48.10),
      new google.maps.LatLng(18.20,  -50.00),
      new google.maps.LatLng(18.50,  -52.10),
      new google.maps.LatLng(28.70,  -79.20),
      new google.maps.LatLng(30.60,  -78.40)
  	];

  // Define the symbol, using one of the predefined paths ('CIRCLE')
  // supplied by the Google Maps JavaScript API.
  	var dorianSymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#d6d6d6'
  	};

  	function animateDorianCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = dorian.get('icons');
      icons[0].offset = (count / 2) + '%';
      dorian.set('icons', icons);
  }, 20);
}