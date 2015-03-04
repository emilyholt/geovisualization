var hudhud;

	var hudhudCoordinates = [
		new google.maps.LatLng(12.50,   92.50), 
		new google.maps.LatLng(12.60,   91.80), 
		new google.maps.LatLng(13.00,   90.70), 
		new google.maps.LatLng(13.40,   89.60), 
		new google.maps.LatLng(13.60,   89.20), 
		new google.maps.LatLng(13.70,   88.70),
		new google.maps.LatLng(14.00,   88.20),
		new google.maps.LatLng(14.20,   87.80), 
		new google.maps.LatLng(14.40,   87.60), 
		new google.maps.LatLng(14.80,   87.10), 
		new google.maps.LatLng(15.40,   86.90),
		new google.maps.LatLng(15.90,   86.50),
		new google.maps.LatLng(16.00,   85.80), 
		new google.maps.LatLng(16.00,   85.20), 
		new google.maps.LatLng(16.30,   84.80),
		new google.maps.LatLng(16.60,   84.60),
		new google.maps.LatLng(17.20,   84.20), 
		new google.maps.LatLng(17.50,   83.50),
		new google.maps.LatLng(18.00,   82.90) 
	];

	// Define the symbol, using one of the predefined paths ('CIRCLE')
  	// supplied by the Google Maps JavaScript API.
  	var hudhudSymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#d6d6d6'
  	};

function animateHudhudCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = hudhud.get('icons');
      icons[0].offset = (count / 2) + '%';
      hudhud.set('icons', icons);
  }, 20);
}