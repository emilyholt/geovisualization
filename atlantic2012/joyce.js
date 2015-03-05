var joyce;

//TROPICAL STORM JOYCE
  	var joyceCoordinates = [
	  	new google.maps.LatLng(12.40, -36.30),
      new google.maps.LatLng(13.10, -37.40),
      new google.maps.LatLng(13.80, -39.50),
      new google.maps.LatLng(14.50, -40.60),
      new google.maps.LatLng(15.20, -42.20),
      new google.maps.LatLng(15.90, -42.50),
      new google.maps.LatLng(16.30, -43.70),
      new google.maps.LatLng(16.90, -45.00)
  	];

  // Define the symbol, using one of the predefined paths ('CIRCLE')
  // supplied by the Google Maps JavaScript API.
  	var joyceSymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#d6d6d6'
  	};

  	function animateJoyceCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = joyce.get('icons');
      icons[0].offset = (count / 2) + '%';
      joyce.set('icons', icons);
  }, 20);
}