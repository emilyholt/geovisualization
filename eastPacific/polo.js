var polo;

	var poloCoordinates = [
		new google.maps.LatLng(11.60, -98.20),   
    new google.maps.LatLng(12.50, -99.00),  
    new google.maps.LatLng(12.90, -100.00),   
    new google.maps.LatLng(13.50, -100.90),  
    new google.maps.LatLng(14.40, -101.50),  
    new google.maps.LatLng(15.40, -102.10),    
    new google.maps.LatLng(16.10, -103.30),   
    new google.maps.LatLng(16.40, -104.60),   
    new google.maps.LatLng(16.70, -105.00),   
    new google.maps.LatLng(17.30, -105.70),   
    new google.maps.LatLng(17.50, -105.60),  
    new google.maps.LatLng(18.10, -106.20),  
    new google.maps.LatLng(18.70, -106.80),  
    new google.maps.LatLng(19.00, -107.10),   
    new google.maps.LatLng(19.30, -107.80),   
    new google.maps.LatLng(19.80, -107.90),   
    new google.maps.LatLng(20.30, -108.30),   
    new google.maps.LatLng(20.70, -108.70),   
    new google.maps.LatLng(20.90, -109.20),  
    new google.maps.LatLng(21.40, -109.60),  
    new google.maps.LatLng(21.50, -110.20),   
    new google.maps.LatLng(21.70, -110.80),   
    new google.maps.LatLng(22.20, -111.70),  
    new google.maps.LatLng(22.80, -112.90),   
    new google.maps.LatLng(22.60, -113.50),  
    new google.maps.LatLng(22.30, -114.10)   
	];

	// Define the symbol, using one of the predefined paths ('CIRCLE')
  	// supplied by the Google Maps JavaScript API.
  	var poloSymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#d6d6d6'
  	};

function animatePoloCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = polo.get('icons');
      icons[0].offset = (count / 2) + '%';
      polo.set('icons', icons);
  }, 20);
}