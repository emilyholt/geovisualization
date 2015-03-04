var marie;

	var marieCoordinates = [
		new google.maps.LatLng(12.40, -99.00),
    new google.maps.LatLng(12.40, -99.00),
    new google.maps.LatLng(12.60, -100.30),
    new google.maps.LatLng(12.90, -101.80),
    new google.maps.LatLng(13.20, -103.00),
    new google.maps.LatLng(13.50, -104.20),
    new google.maps.LatLng(14.00, -105.70),
    new google.maps.LatLng(14.60, -106.30),
    new google.maps.LatLng(15.10, -107.60),
    new google.maps.LatLng(15.70, -108.70),
   new google.maps.LatLng(16.10, -109.90),
   new google.maps.LatLng(16.00, -111.40),
   new google.maps.LatLng(16.00, -112.20),
   new google.maps.LatLng(16.60, -112.80),
   new google.maps.LatLng(17.30, -113.90),
   new google.maps.LatLng(17.90, -114.80),
   new google.maps.LatLng(18.40, -115.80),
   new google.maps.LatLng(19.20, -116.70),
   new google.maps.LatLng(19.90, -117.80),
   new google.maps.LatLng(20.70, -119.00),
   new google.maps.LatLng(21.10, -120.30),
   new google.maps.LatLng(21.60, -121.40),
   new google.maps.LatLng(21.70, -122.50),
   new google.maps.LatLng(22.30, -123.70),
   new google.maps.LatLng(22.70, -124.30),
   new google.maps.LatLng(23.40, -125.70),
   new google.maps.LatLng(24.00, -127.20),
   new google.maps.LatLng(24.90, -128.30),
   new google.maps.LatLng(25.70, -129.80),
   new google.maps.LatLng(26.60, -131.00),
   new google.maps.LatLng(27.20, -132.10)
	];

	// Define the symbol, using one of the predefined paths ('CIRCLE')
  	// supplied by the Google Maps JavaScript API.
  	var marieSymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#d6d6d6'
  	};

function animateMarieCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = marie.get('icons');
      icons[0].offset = (count / 2) + '%';
      marie.set('icons', icons);
  }, 20);
}