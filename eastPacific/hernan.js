var hernan;

	var hernanCoordinates = [
		new google.maps.LatLng(13.00, -105.80),
    new google.maps.LatLng(14.00, -106.80),
    new google.maps.LatLng(14.90, -107.70),
    new google.maps.LatLng(15.80, -108.30),
    new google.maps.LatLng(16.50, -109.50),
    new google.maps.LatLng(17.40, -110.50),
    new google.maps.LatLng(18.60, -112.20),
    new google.maps.LatLng(19.30, -113.10),
    new google.maps.LatLng(19.50, -113.90),
    new google.maps.LatLng(20.20, -115.20),
    new google.maps.LatLng(21.00, -116.70),
    new google.maps.LatLng(21.80, -118.00),
    new google.maps.LatLng(22.50, -119.30),
    new google.maps.LatLng(23.20, -120.50)
	];

	// Define the symbol, using one of the predefined paths ('CIRCLE')
  	// supplied by the Google Maps JavaScript API.
  	var hernanSymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#d6d6d6'
  	};

function animateHernanCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = hernan.get('icons');
      icons[0].offset = (count / 2) + '%';
      hernan.set('icons', icons);
  }, 20);
}