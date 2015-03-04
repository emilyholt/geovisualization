var rachel;

	var rachelCoordinates = [
		new google.maps.LatLng(15.00, -105.50),
    new google.maps.LatLng(15.10, -106.80),   
    new google.maps.LatLng(15.10, -106.90),      
    new google.maps.LatLng(15.70, -108.10),    
    new google.maps.LatLng(16.10, -109.10),   
    new google.maps.LatLng(16.70, -110.30),     
    new google.maps.LatLng(17.40, -111.40),   
    new google.maps.LatLng(17.80, -112.50),       
    new google.maps.LatLng(18.10, -113.70),     
    new google.maps.LatLng(17.90, -114.70),        
    new google.maps.LatLng(18.10, -115.10),      
    new google.maps.LatLng(18.80, -115.60),     
    new google.maps.LatLng(19.30, -116.10),       
    new google.maps.LatLng(20.30, -116.50),   
    new google.maps.LatLng(20.70, -116.60),   
    new google.maps.LatLng(21.10, -117.00),  
    new google.maps.LatLng(21.50, -117.20),  
    new google.maps.LatLng(21.70, -117.40),   
    new google.maps.LatLng(22.50, -117.60),   
    new google.maps.LatLng(22.80, -117.50),   
    new google.maps.LatLng(22.50, -117.50),     
    new google.maps.LatLng(22.80, -117.50),       
    new google.maps.LatLng(23.20, -117.50),    
    new google.maps.LatLng(23.20, -117.50),    
    new google.maps.LatLng(23.20, -117.50),    
    new google.maps.LatLng(23.00, -117.50)   
    
	];

	// Define the symbol, using one of the predefined paths ('CIRCLE')
  	// supplied by the Google Maps JavaScript API.
  	var rachelSymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#d6d6d6'
  	};

function animateRachelCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = rachel.get('icons');
      icons[0].offset = (count / 2) + '%';
      rachel.set('icons', icons);
  }, 20);
}