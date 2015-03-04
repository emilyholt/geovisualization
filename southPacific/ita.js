var ita;

//TROPICAL STORM ita
  	var itaCoordinates = [
	  	  new google.maps.LatLng(-11.30,  156.10),
        new google.maps.LatLng(-11.80,  155.70),
        new google.maps.LatLng(-12.20,  154.90),
        new google.maps.LatLng(-12.10,  153.90),
        new google.maps.LatLng(-12.30,  153.50),
        new google.maps.LatLng(-11.70,  153.20),
        new google.maps.LatLng(-11.50,  152.50),
        new google.maps.LatLng(-11.40,  152.00),
        new google.maps.LatLng(-11.50,  150.20),
        new google.maps.LatLng(-11.70,  148.70),
        new google.maps.LatLng(-12.50,  147.10),
        new google.maps.LatLng(-13.30,  146.00),
        new google.maps.LatLng(-14.50,  145.40),
        new google.maps.LatLng(-15.50,  145.00),
        new google.maps.LatLng(-16.70,  145.30),
        new google.maps.LatLng(-17.80,  146.00),
        new google.maps.LatLng(-20.10,  148.30),
        new google.maps.LatLng(-22.20,  151.70),
        new google.maps.LatLng(-23.70,  155.10),
  	];

  // Define the symbol, using one of the predefined paths ('CIRCLE')
  // supplied by the Google Maps JavaScript API.
  	var itaSymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#d6d6d6'
  	};

function animateItaCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = ita.get('icons');
      icons[0].offset = (count / 2) + '%';
      ita.set('icons', icons);
  }, 20);
}