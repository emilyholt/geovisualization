var lowell;

	var lowellCoordinates = [
		new google.maps.LatLng(16.10, -116.60),
    new google.maps.LatLng(16.00, -117.50),
    new google.maps.LatLng(16.70, -117.70),
    new google.maps.LatLng(16.60, -117.90),
    new google.maps.LatLng(16.80, -118.30),
    new google.maps.LatLng(17.10, -118.80),
    new google.maps.LatLng(17.50, -119.50),
    new google.maps.LatLng(18.10, -120.10),
    new google.maps.LatLng(18.50, -120.50),
   new google.maps.LatLng(18.60, -120.90),  
   new google.maps.LatLng(19.00, -121.10),
   new google.maps.LatLng(19.30, -121.40),
   new google.maps.LatLng(19.40, -121.50),
   new google.maps.LatLng(19.50, -121.80),
   new google.maps.LatLng(20.00, -122.10),   
   new google.maps.LatLng(20.30, -122.30),
   new google.maps.LatLng(20.70, -122.60),
   new google.maps.LatLng(21.20, -123.10),
   new google.maps.LatLng(21.80, -123.90), 
   new google.maps.LatLng(22.10, -124.40),  
   new google.maps.LatLng(22.60, -125.00), 
   new google.maps.LatLng(23.20, -125.70),  
   new google.maps.LatLng(23.50, -126.20),   
   new google.maps.LatLng(23.80, -126.70), 
   new google.maps.LatLng(24.60, -127.10)  
	];

	// Define the symbol, using one of the predefined paths ('CIRCLE')
  	// supplied by the Google Maps JavaScript API.
  	var lowellSymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#d6d6d6'
  	};

function animateLowellCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = lowell.get('icons');
      icons[0].offset = (count / 2) + '%';
      lowell.set('icons', icons);
  }, 20);
}