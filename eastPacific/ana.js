var ana;

	var anaCoordinates = [
		new google.maps.LatLng(12.80, -143.20),   
    new google.maps.LatLng(12.70, -142.30),  
    new google.maps.LatLng(13.00, -142.70),  
    new google.maps.LatLng(13.30, -143.10),  
    new google.maps.LatLng(13.80, -143.90),       
    new google.maps.LatLng(13.80, -144.80),      
    new google.maps.LatLng(13.90, -145.80),      
    new google.maps.LatLng(14.20, -146.10),      
    new google.maps.LatLng(14.30, -147.00),     
   new google.maps.LatLng(14.10, -148.00),     
   new google.maps.LatLng(14.00, -148.90),      
   new google.maps.LatLng(13.90, -149.80),        
   new google.maps.LatLng(14.10, -150.40),     
   new google.maps.LatLng(14.40, -151.40),     
   new google.maps.LatLng(14.90, -152.50),        
   new google.maps.LatLng(15.40, -153.70),  
   new google.maps.LatLng(16.40, -155.20),  
   new google.maps.LatLng(17.00, -156.60),   
   new google.maps.LatLng(17.80, -157.40),   
   new google.maps.LatLng(18.50, -158.10),   
   new google.maps.LatLng(19.30, -158.90),     
   new google.maps.LatLng(19.90, -159.20),    
   new google.maps.LatLng(20.30, -159.50),    
   new google.maps.LatLng(20.60, -159.70),       
   new google.maps.LatLng(20.70, -160.60),    
   new google.maps.LatLng(20.70, -160.90),  
   new google.maps.LatLng(20.70, -161.80),        
   new google.maps.LatLng(20.60, -162.80),        
   new google.maps.LatLng(20.70, -163.70),        
   new google.maps.LatLng(20.50, -164.00),      
   new google.maps.LatLng(20.80, -164.40),   
   new google.maps.LatLng(20.80, -164.40),      
   new google.maps.LatLng(21.60, -166.10),       
   new google.maps.LatLng(22.10, -166.80),       
   new google.maps.LatLng(22.40, -167.10),        
   new google.maps.LatLng(23.40, -167.30),        
   new google.maps.LatLng(24.40, -167.70),        
   new google.maps.LatLng(25.10, -168.20),     
   new google.maps.LatLng(26.20, -168.70),      
   new google.maps.LatLng(26.70, -169.50),        
   new google.maps.LatLng(27.00, -169.80),       
   new google.maps.LatLng(27.60, -170.30),   
   new google.maps.LatLng(28.20, -169.90),      
   new google.maps.LatLng(28.90, -169.60),        
   new google.maps.LatLng(31.00, -167.80),       
   new google.maps.LatLng(32.40, -165.80),       
   new google.maps.LatLng(34.30, -163.40),      
   new google.maps.LatLng(36.30, -160.90),       
   new google.maps.LatLng(37.00, -159.10),        
   new google.maps.LatLng(39.10, -154.90),       
   new google.maps.LatLng(41.20, -150.20)
	];

	// Define the symbol, using one of the predefined paths ('CIRCLE')
  	// supplied by the Google Maps JavaScript API.
  	var anaSymbol = {
    	path: google.maps.SymbolPath.CIRCLE,
    	scale: 8,
    	strokeColor: '#d6d6d6'
  	};

function animateAnaCircle() {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = ana.get('icons');
      icons[0].offset = (count / 2) + '%';
      ana.set('icons', icons);
  }, 20);
}