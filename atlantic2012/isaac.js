var isaac;

//TROPICAL STORM ISAAC
  	var isaacCoordinates = [
	  	new google.maps.LatLng(15.20, -51.20),
      new google.maps.LatLng(15.10, -52.80),
      new google.maps.LatLng(15.40, -53.90),
      new google.maps.LatLng(15.60, -55.60),
      new google.maps.LatLng(15.50, -57.30),
      new google.maps.LatLng(15.90, -59.30),
      new google.maps.LatLng(16.00, -61.20),
      new google.maps.LatLng(15.80, -63.00),
      new google.maps.LatLng(15.30, -64.00),
      new google.maps.LatLng(15.60, -65.40),
      new google.maps.LatLng(16.00, -67.10),
      new google.maps.LatLng(16.70, -68.70),
      new google.maps.LatLng(16.10, -70.00),
      new google.maps.LatLng(16.30, -70.80),
      new google.maps.LatLng(17.20, -71.90),
      new google.maps.LatLng(17.70, -72.50),
      new google.maps.LatLng(19.00, -73.30),
      new google.maps.LatLng(20.10, -74.60),
      new google.maps.LatLng(21.30, -76.00),
      new google.maps.LatLng(22.10, -77.20),
      new google.maps.LatLng(23.10, -79.00),
      new google.maps.LatLng(23.00, -80.80),
      new google.maps.LatLng(24.20, -82.30),
      new google.maps.LatLng(24.20, -82.90),
      new google.maps.LatLng(25.20, -84.20),
      new google.maps.LatLng(26.10, -85.30),
      new google.maps.LatLng(26.40, -86.20),
      new google.maps.LatLng(27.10, -87.00),
      new google.maps.LatLng(27.50, -88.10),
      new google.maps.LatLng(28.10, -88.50),
      new google.maps.LatLng(28.70, -89.20),
      new google.maps.LatLng(29.00, -89.70),
      new google.maps.LatLng(29.20, -90.50),
      new google.maps.LatLng(29.60, -90.70),
      new google.maps.LatLng(30.00, -91.10),
      new google.maps.LatLng(30.30, -91.20),
      new google.maps.LatLng(30.90, -91.60),
      new google.maps.LatLng(31.70, -92.10),
      new google.maps.LatLng(32.70, -92.60),
      new google.maps.LatLng(33.50, -93.00),
      new google.maps.LatLng(34.70, -93.90),
      new google.maps.LatLng(35.60, -94.10),
      new google.maps.LatLng(37.30, -93.80),
      new google.maps.LatLng(38.30, -93.50),
      new google.maps.LatLng(38.50, -93.00)
   	];  

  // Define the symbol, using one of the predefined paths ('CIRCLE')
  // supplied by the Google Maps JavaScript API.
  	var isaacSymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#d6d6d6'
  	};

  	function animateIsaacCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = isaac.get('icons');
      icons[0].offset = (count / 2) + '%';
      isaac.set('icons', icons);
  }, 20);
}