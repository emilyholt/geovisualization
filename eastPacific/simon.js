var simon;

	var simonCoordinates = [
		new google.maps.LatLng(17.10, -104.00),     
    new google.maps.LatLng(17.60, -105.00),   
    new google.maps.LatLng(18.10, -106.10),    
    new google.maps.LatLng(18.30, -106.70),       
    new google.maps.LatLng(18.40, -107.60),     
    new google.maps.LatLng(18.10, -107.90),      
    new google.maps.LatLng(18.20, -108.40),      
    new google.maps.LatLng(18.40, -109.30),       
    new google.maps.LatLng(18.60, -110.10),     
    new google.maps.LatLng(19.20, -111.60),  
    new google.maps.LatLng(19.50, -112.70),  
    new google.maps.LatLng(20.20, -113.80),  
    new google.maps.LatLng(20.60, -115.00),   
    new google.maps.LatLng(21.40, -115.90),  
    new google.maps.LatLng(22.10, -116.70),  
    new google.maps.LatLng(22.90, -117.10),  
    new google.maps.LatLng(23.40, -117.50),  
    new google.maps.LatLng(23.50, -117.60),  
    new google.maps.LatLng(24.10, -117.60),       
    new google.maps.LatLng(24.80, -117.50),    
    new google.maps.LatLng(25.50, -117.40),        
    new google.maps.LatLng(26.20, -117.20),       
    new google.maps.LatLng(27.10, -116.90),    
    new google.maps.LatLng(27.30, -116.90),     
    new google.maps.LatLng(27.60, -116.40),      
    new google.maps.LatLng(27.80, -116.10)
	];

	// Define the symbol, using one of the predefined paths ('CIRCLE')
  	// supplied by the Google Maps JavaScript API.
  	var simonSymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#d6d6d6'
  	};

function animateSimonCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = simon.get('icons');
      icons[0].offset = (count / 2) + '%';
      simon.set('icons', icons);
  }, 20);
}