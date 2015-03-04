var bertha;

	var berthaCoordinates = [
		new google.maps.LatLng(12.30,  -55.50), 
		new google.maps.LatLng(13.00,  -57.00),
		new google.maps.LatLng(14.00,  -58.90),
		new google.maps.LatLng(14.90,  -61.20),
		new google.maps.LatLng(15.70,  -63.00),
		new google.maps.LatLng(16.30,  -64.90),
		new google.maps.LatLng(17.20,  -66.70),
		new google.maps.LatLng(18.40,  -68.50),
		new google.maps.LatLng(19.50,  -69.70),
		new google.maps.LatLng(20.90,  -71.10),
		new google.maps.LatLng(22.20,  -72.60),
		new google.maps.LatLng(23.30,  -73.20),
		new google.maps.LatLng(24.90,  -73.20),
		new google.maps.LatLng(26.10,  -73.60),
		new google.maps.LatLng(27.60,  -73.60),
		new google.maps.LatLng(29.40,  -73.60),
		new google.maps.LatLng(31.30,  -73.10),
		new google.maps.LatLng(33.40,  -72.90),
		new google.maps.LatLng(34.80,  -71.90),
		new google.maps.LatLng(36.20,  -70.30),
		new google.maps.LatLng(37.50,  -68.10),
		new google.maps.LatLng(39.00,  -65.40) 
	];

	// Define the symbol, using one of the predefined paths ('CIRCLE')
  	// supplied by the Google Maps JavaScript API.
  	var berthaSymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#d6d6d6'
  	};

function animateBerthaCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = bertha.get('icons');
      icons[0].offset = (count / 2) + '%';
      bertha.set('icons', icons);
  }, 20); 
}