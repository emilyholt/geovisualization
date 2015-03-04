var edna;

//TROPICAL STORM edna
  	var ednaCoordinates = [
	  	  new google.maps.LatLng(-17.20,  161.50),
        new google.maps.LatLng(-20.40,  163.40),
        new google.maps.LatLng(-22.10,  164.50),
        new google.maps.LatLng(-26.50,  165.90) 
  	];

  // Define the symbol, using one of the predefined paths ('CIRCLE')
  // supplied by the Google Maps JavaScript API.
  	var ednaSymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#d6d6d6'
  	};

function animateEdnaCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = edna.get('icons');
      icons[0].offset = (count / 2) + '%';
      edna.set('icons', icons);
  }, 20);
}