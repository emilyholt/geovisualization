var karina;

	var karinaCoordinates = [
		new google.maps.LatLng(16.30, -107.80),
    new google.maps.LatLng(16.90, -109.20),
    new google.maps.LatLng(17.10, -110.40),
    new google.maps.LatLng(17.10, -112.00),
    new google.maps.LatLng(17.30, -113.50),
    new google.maps.LatLng(17.40, -114.60),
    new google.maps.LatLng(17.20, -115.40),
    new google.maps.LatLng(17.10, -117.60),
    new google.maps.LatLng(17.10, -118.30),
   new google.maps.LatLng(17.10, -118.60),
   new google.maps.LatLng(17.30, -119.70),
   new google.maps.LatLng(17.50, -120.70),
   new google.maps.LatLng(17.70, -121.50),
   new google.maps.LatLng(18.00, -122.40),
   new google.maps.LatLng(18.30, -123.60),
   new google.maps.LatLng(18.00, -124.50),
   new google.maps.LatLng(17.80, -125.60),
   new google.maps.LatLng(17.90, -126.50),
   new google.maps.LatLng(18.00, -127.70),
   new google.maps.LatLng(17.80, -129.00),
   new google.maps.LatLng(17.60, -130.00),
   new google.maps.LatLng(17.20, -131.10),
   new google.maps.LatLng(16.90, -132.00),
   new google.maps.LatLng(16.20, -132.70),
   new google.maps.LatLng(16.00, -133.20),
   new google.maps.LatLng(15.70, -133.70),
   new google.maps.LatLng(15.70, -134.20),
   new google.maps.LatLng(15.70, -134.60),
   new google.maps.LatLng(15.80, -135.10),
   new google.maps.LatLng(15.90, -135.80),
   new google.maps.LatLng(15.90, -136.50),
   new google.maps.LatLng(15.80, -136.60),
   new google.maps.LatLng(16.00, -136.40),
   new google.maps.LatLng(15.70, -136.30),
   new google.maps.LatLng(15.10, -136.90),
   new google.maps.LatLng(14.80, -136.80),
   new google.maps.LatLng(14.80, -136.60),
   new google.maps.LatLng(14.70, -135.90),
   new google.maps.LatLng(14.90, -135.70),
   new google.maps.LatLng(15.50, -135.20),
   new google.maps.LatLng(16.20, -134.90),
   new google.maps.LatLng(16.70, -134.40),
   new google.maps.LatLng(17.20, -134.10),
   new google.maps.LatLng(17.30, -133.50),
   new google.maps.LatLng(17.80, -132.80),
   new google.maps.LatLng(17.80, -132.60),
   new google.maps.LatLng(18.00, -131.80),
   new google.maps.LatLng(17.80, -130.80),
   new google.maps.LatLng(17.60, -129.70),
   new google.maps.LatLng(17.30, -128.80),
   new google.maps.LatLng(17.20, -128.20),
   new google.maps.LatLng(17.30, -127.80),
   new google.maps.LatLng(17.30, -127.50),
   new google.maps.LatLng(17.10, -127.20),
   new google.maps.LatLng(16.80, -127.30),
   new google.maps.LatLng(16.40, -127.30),
   new google.maps.LatLng(16.00, -126.90)
	];

	// Define the symbol, using one of the predefined paths ('CIRCLE')
  	// supplied by the Google Maps JavaScript API.
  	var karinaSymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#d6d6d6'
  	};

function animateKarinaCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = karina.get('icons');
      icons[0].offset = (count / 2) + '%';
      karina.set('icons', icons);
  }, 20);
}