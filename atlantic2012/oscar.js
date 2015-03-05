var oscar;

//TROPICAL STORM OSCAR
  	var oscarCoordinates = [
	  	new google.maps.LatLng(17.30,  -41.50),
      new google.maps.LatLng(18.60,  -42.00),
      new google.maps.LatLng(19.30,  -42.20),
      new google.maps.LatLng(20.00,  -42.50),
      new google.maps.LatLng(20.60,  -41.70),
      new google.maps.LatLng(21.30,  -41.00),
      new google.maps.LatLng(22.00,  -40.20),
      new google.maps.LatLng(23.00,  -38.90)
  	];

  // Define the symbol, using one of the predefined paths ('CIRCLE')
  // supplied by the Google Maps JavaScript API.
  	var oscarSymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#d6d6d6'
  	};

  	function animateOscarCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = oscar.get('icons');
      icons[0].offset = (count / 2) + '%';
      oscar.set('icons', icons);
  }, 20);
}