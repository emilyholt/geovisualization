var gillian;

//TROPICAL STORM gillian
  	var gillianCoordinates = [
	  	  new google.maps.LatLng(-9.60,  108.20),
        new google.maps.LatLng(-10.00,  106.10),
        new google.maps.LatLng(-10.30,  105.00),
        new google.maps.LatLng(-12.30,  104.40),
        new google.maps.LatLng(-13.70,  103.60),
        new google.maps.LatLng(-15.40,  103.50),
        new google.maps.LatLng(-17.20,  103.50),
        new google.maps.LatLng(-18.70,  103.80),
        new google.maps.LatLng(-19.60,  103.90)
  	];

  // Define the symbol, using one of the predefined paths ('CIRCLE')
  // supplied by the Google Maps JavaScript API.
  	var gillianSymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#ff0000'
  	};

    

function animateGillianCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = gillian.get('icons');
      icons[0].offset = (count / 2) + '%';
      gillian.set('icons', icons);
  }, 20);
}