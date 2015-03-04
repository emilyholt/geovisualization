var odile;

	var odileCoordinates = [
		new google.maps.LatLng(14.30, -102.40),   
    new google.maps.LatLng(14.80, -102.80),   
    new google.maps.LatLng(15.20, -103.10),   
    new google.maps.LatLng(15.50, -103.40),  
    new google.maps.LatLng(15.50, -103.90),        
    new google.maps.LatLng(15.50, -104.10),   
    new google.maps.LatLng(15.20, -104.40),     
    new google.maps.LatLng(15.50, -104.60),    
    new google.maps.LatLng(15.40, -104.80),       
    new google.maps.LatLng(15.50, -104.90),   
    new google.maps.LatLng(15.60, -104.80),   
    new google.maps.LatLng(16.10, -105.10),  
    new google.maps.LatLng(16.20, -105.40),    
    new google.maps.LatLng(16.60, -106.00),  
    new google.maps.LatLng(17.00, -106.20), 
    new google.maps.LatLng(17.90, -106.50),   
    new google.maps.LatLng(19.10, -107.30),  
    new google.maps.LatLng(20.00, -108.20),  
    new google.maps.LatLng(21.10, -108.90),   
    new google.maps.LatLng(22.60, -109.60),  
    new google.maps.LatLng(23.70, -110.40),  
    new google.maps.LatLng(24.70, -111.30),  
    new google.maps.LatLng(25.50, -111.80),  
    new google.maps.LatLng(26.20, -111.90),       
    new google.maps.LatLng(27.00, -112.50),    
    new google.maps.LatLng(28.00, -113.00),     
    new google.maps.LatLng(28.80, -113.50),      
    new google.maps.LatLng(29.40, -113.60),  
    new google.maps.LatLng(29.90, -113.60),       
    new google.maps.LatLng(30.40, -113.40),     
    new google.maps.LatLng(30.90, -112.90)     
	];

	// Define the symbol, using one of the predefined paths ('CIRCLE')
  	// supplied by the Google Maps JavaScript API.
  	var odileSymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#d6d6d6'
  	};

function animateOdileCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = odile.get('icons');
      icons[0].offset = (count / 2) + '%';
      odile.set('icons', icons);
  }, 20);
}