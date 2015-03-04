var amanda;

//TROPICAL STORM amanda
  	var amandaCoordinates = [
	  	  new google.maps.LatLng(10.20, -107.20),
        new google.maps.LatLng(10.70, -108.00),
        new google.maps.LatLng(10.80, -108.30),
        new google.maps.LatLng(10.90, -108.60),
        new google.maps.LatLng(11.10, -108.90),
        new google.maps.LatLng(11.30, -109.40),
        new google.maps.LatLng(11.40, -109.90),
        new google.maps.LatLng(11.40, -110.30),
       new google.maps.LatLng(11.60, -110.70),
       new google.maps.LatLng(11.70, -110.90),
       new google.maps.LatLng(11.80, -111.10),
       new google.maps.LatLng(12.30, -111.30),
       new google.maps.LatLng(12.60, -111.40),
       new google.maps.LatLng(13.10, -111.60),
       new google.maps.LatLng(13.20, -111.60),
       new google.maps.LatLng(13.40, -111.80),
       new google.maps.LatLng(13.70, -111.90),
       new google.maps.LatLng(14.20, -112.20),
       new google.maps.LatLng(14.70, -112.30),
       new google.maps.LatLng(15.00, -112.60),
       new google.maps.LatLng(14.60, -112.90),
       new google.maps.LatLng(14.50, -112.50),
       new google.maps.LatLng(14.90, -112.20),
       new google.maps.LatLng(15.70, -111.70),
       new google.maps.LatLng(16.10, -111.50),
       new google.maps.LatLng(16.80, -110.90),
       new google.maps.LatLng(16.20, -110.20),
       new google.maps.LatLng(16.20, -109.20)
  	];

  // Define the symbol, using one of the predefined paths ('CIRCLE')
  // supplied by the Google Maps JavaScript API.
  	var amandaSymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#d6d6d6'
  	};

    

function animateAmandaCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = amanda.get('icons');
      icons[0].offset = (count / 2) + '%';
      amanda.set('icons', icons);
  }, 20);
}