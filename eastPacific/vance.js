var vance;

	var vanceCoordinates = [
		new google.maps.LatLng(11.00, -100.20),  
    new google.maps.LatLng(11.50, -100.90),  
    new google.maps.LatLng(11.50, -100.70),   
    new google.maps.LatLng(11.10, -100.80),       
    new google.maps.LatLng(10.90, -101.10),       
    new google.maps.LatLng(10.60, -100.60),     
    new google.maps.LatLng(10.20, -100.50),    
    new google.maps.LatLng(9.70, -101.20),     
    new google.maps.LatLng(9.50, -101.50),  
    new google.maps.LatLng(9.30, -102.30),        
    new google.maps.LatLng(9.50, -102.70),    
    new google.maps.LatLng(9.80, -103.80),    
    new google.maps.LatLng(10.00, -104.90),  
    new google.maps.LatLng(10.60, -105.90),  
    new google.maps.LatLng(11.90, -107.50),   
    new google.maps.LatLng(12.80, -108.60),  
    new google.maps.LatLng(13.70, -109.60),  
    new google.maps.LatLng(14.50, -110.30),  
    new google.maps.LatLng(15.30, -110.60),  
    new google.maps.LatLng(16.40, -110.80),   
    new google.maps.LatLng(17.40, -110.60),   
    new google.maps.LatLng(18.40, -110.00),   
    new google.maps.LatLng(19.30, -109.60),   
    new google.maps.LatLng(19.90, -108.90),  
    new google.maps.LatLng(20.90, -108.30),  
    new google.maps.LatLng(21.50, -107.40),    
    new google.maps.LatLng(22.10, -106.30),       
    new google.maps.LatLng(23.20, -106.10)
	];

	// Define the symbol, using one of the predefined paths ('CIRCLE')
  	// supplied by the Google Maps JavaScript API.
  	var vanceSymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#d6d6d6'
  	};

function animateVanceCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = vance.get('icons');
      icons[0].offset = (count / 2) + '%';
      vance.set('icons', icons);
  }, 20);
}