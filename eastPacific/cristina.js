var cristina;

	var cristinaCoordinates = [
		new google.maps.LatLng(15.40, -102.00),
    new google.maps.LatLng(15.50, -101.90),
    new google.maps.LatLng(15.60, -102.20),
    new google.maps.LatLng(15.50, -102.60),
    new google.maps.LatLng(15.50, -103.00),
    new google.maps.LatLng(15.30, -103.50),
    new google.maps.LatLng(15.20, -104.10),
    new google.maps.LatLng(15.40, -104.80),
    new google.maps.LatLng(15.60, -105.20),
    new google.maps.LatLng(16.00, -105.80),
    new google.maps.LatLng(16.20, -106.50),
    new google.maps.LatLng(16.40, -106.90),
    new google.maps.LatLng(16.70, -107.50),
    new google.maps.LatLng(16.90, -107.80),
    new google.maps.LatLng(17.30, -108.30),
    new google.maps.LatLng(17.70, -109.10),
    new google.maps.LatLng(18.00, -109.60),
    new google.maps.LatLng(18.50, -110.20),
    new google.maps.LatLng(18.90, -110.70),
    new google.maps.LatLng(19.30, -111.20),
    new google.maps.LatLng(19.30, -111.20),
    new google.maps.LatLng(19.60, -111.60),
    new google.maps.LatLng(19.70, -112.10),
    new google.maps.LatLng(19.80, -112.50),
    new google.maps.LatLng(20.00, -113.00),
    new google.maps.LatLng(20.30, -113.60)
	];

	// Define the symbol, using one of the predefined paths ('CIRCLE')
  	// supplied by the Google Maps JavaScript API.
  	var cristinaSymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#d6d6d6'
  	};

function animateCristinaCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = cristina.get('icons');
      icons[0].offset = (count / 2) + '%';
      cristina.set('icons', icons);
  }, 20);
}