function initialize() {
	var mapOptions = {
    	center: new google.maps.LatLng(27, -70),
    	zoom: 6,
    	//use satelite imagery
    	mapTypeId: google.maps.MapTypeId.HYBRID
  	};

  	var map = new google.maps.Map(document.getElementById('map-canvas'),
      	mapOptions);
  	

  	
//STORM ARTHUR
	arthur = new google.maps.Polyline({
		path: arthurCoordinates,
		strokeColor: '#bce8ee',
		strokeOpacity: 0.4,
    	icons: [{
      		icon: arthurSymbol,
      		offset: '100%'
    	}],
    	map: map
  	});

	animateArthurCircle();

//-----------------------------------------------------------------------------------
//TROPICAL STORM TWO
	two = new google.maps.Polyline({
		path: twoCoordinates,
		strokeColor: '#bce8ee',
		strokeOpacity: 0.4,
    	icons: [{
      		icon: twoSymbol,
      		offset: '100%'
    	}],
    	map: map
  	});

	animateTwoCircle();

//-----------------------------------------------------------------------------------
//TROPICAL STORM BERTHA

	

	// Create the polysean and add the symbol to it via the 'icons' property.
	bertha = new google.maps.Polyline({
		path: berthaCoordinates,
		strokeColor: '#bce8ee',
		strokeOpacity: 0.4,
    	icons: [{
      		icon: berthaSymbol,
      		offset: '100%'
    	}],
    	map: map
  	});

	animateBerthaCircle();

//-----------------------------------------------------------------------------------
//TROPICAL STORM CRISTOBAL

	// Create the polysean and add the symbol to it via the 'icons' property.
	cristobal = new google.maps.Polyline({
		path: cristobalCoordinates,
		strokeColor: '#bce8ee',
		strokeOpacity: 0.4,
    	icons: [{
      		icon: cristobalSymbol,
      		offset: '100%'
    	}],
    	map: map
  	});

	animateCristobalCircle();

//-----------------------------------------------------------------------------------
//TROPICAL STORM DOLLY

	

	// Create the polysean and add the symbol to it via the 'icons' property.
	dolly = new google.maps.Polyline({
		path: dollyCoordinates,
		strokeColor: '#bce8ee',
		strokeOpacity: 0.4,
    	icons: [{
      		icon: dollySymbol,
      		offset: '100%'
    	}],
    	map: map
  	});

	animateDollyCircle();	

//-----------------------------------------------------------------------------------
//TROPICAL STORM EDOUARD

	// Create the polysean and add the symbol to it via the 'icons' property.
	edouard = new google.maps.Polyline({
		path: edouardCoordinates,
		strokeColor: '#bce8ee',
		strokeOpacity: 0.4,
    	icons: [{
      		icon: edouardSymbol,
      		offset: '100%'
    	}],
    	map: map
  	});

	animateEdouardCircle();

//-----------------------------------------------------------------------------------
//TROPICAL STORM FAY

	

	// Create the polysean and add the symbol to it via the 'icons' property.
	fay = new google.maps.Polyline({
		path: fayCoordinates,
		strokeColor: '#bce8ee',
		strokeOpacity: 0.4,
    	icons: [{
      		icon: faySymbol,
      		offset: '100%'
    	}],
    	map: map
  	});

	animateFayCircle();	

//-----------------------------------------------------------------------------------
	//TROPICAL STORM GONZALO
	// Create the polysean and add the symbol to it via the 'icons' property.
	gonzalo = new google.maps.Polyline({
		path: gonzaloCoordinates,
		strokeColor: '#bce8ee',
		strokeOpacity: 0.4,
    	icons: [{
      		icon: gonzaloSymbol,
      		offset: '100%'
    	}],
    	map: map
  	});

	animateGonzaloCircle();	

//-----------------------------------------------------------------------------------
//TROPICAL STORM HANNA
	hanna = new google.maps.Polyline({
		path: hannaCoordinates,
		strokeColor: '#bce8ee',
		strokeOpacity: 0.4,
    	icons: [{
      		icon: hannaSymbol,
      		offset: '100%'
    	}],
    	map: map
  	});

	animateHannaCircle();

//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------

//NORTH INDIAN REGION
//TROPICAL STORM ONE
	one = new google.maps.Polyline({
		path: oneCoordinates,
		strokeColor: '#bce8ee',
		strokeOpacity: 0.4,
    	icons: [{
      		icon: hannaSymbol,
      		offset: '100%'
    	}],
    	map: map
  	});

	animateOneCircle();	

//-----------------------------------------------------------------------------------
//TROPICAL STORM NANAUK
	nanauk = new google.maps.Polyline({
		path: nanaukCoordinates,
		strokeColor: '#bce8ee',
		strokeOpacity: 0.4,
    	icons: [{
      		icon: nanaukSymbol,
      		offset: '100%'
    	}],
    	map: map
  	});

	animateNanaukCircle();

//-----------------------------------------------------------------------------------
//TROPICAL STORM HUDHUD
	hudhud = new google.maps.Polyline({
		path: hudhudCoordinates,
		strokeColor: '#bce8ee',
		strokeOpacity: 0.4,
    	icons: [{
      		icon: hudhudSymbol,
      		offset: '100%'
    	}],
    	map: map
  	});

	animateHudhudCircle();	

//-----------------------------------------------------------------------------------
//TROPICAL STORM NILOFAR
	nilofar = new google.maps.Polyline({
		path: nilofarCoordinates,
		strokeColor: '#bce8ee',
		strokeOpacity: 0.4,
    	icons: [{
      		icon: nilofarSymbol,
      		offset: '100%'
    	}],
    	map: map
  	});

  	animateNilofarCircle();

//-----------------------------------------------------------------------------------
//TROPICAL STORM FIVE
	five = new google.maps.Polyline({
		path: fiveCoordinates,
		strokeColor: '#bce8ee',
		strokeOpacity: 0.4,
    	icons: [{
      		icon: fiveSymbol,
      		offset: '100%'
    	}],
    	map: map
  	});
	animateFiveCircle();	


//-----------------------------------------------------------------------------------
//SOUTHERN INDIA
//-----------------------------------------------------------------------------------
//TROPICAL STORM BEJISA
	bejisa = new google.maps.Polyline({
		path: bejisaCoordinates,
		strokeColor: '#bce8ee',
		strokeOpacity: 0.4,
    	icons: [{
      		icon: bejisaSymbol,
      		offset: '100%'
    	}],
    	map: map
  	});
	animateBejisaCircle();

//-----------------------------------------------------------------------------------
//TROPICAL STORM COLIN
	colin = new google.maps.Polyline({
		path: colinCoordinates,
		strokeColor: '#bce8ee',
		strokeOpacity: 0.4,
    	icons: [{
      		icon: colinSymbol,
      		offset: '100%'
    	}],
    	map: map
  	});
	animateColinCircle();

//-----------------------------------------------------------------------------------
//TROPICAL STORM DELIWE
	deliwe = new google.maps.Polyline({
		path: deliweCoordinates,
		strokeColor: '#bce8ee',
		strokeOpacity: 0.4,
    	icons: [{
      		icon: deliweSymbol,
      		offset: '100%'
    	}],
    	map: map
  	});
	animateDeliweCircle();	

//-----------------------------------------------------------------------------------
//TROPICAL STORM EDILSON
	edilson = new google.maps.Polyline({
		path: edilsonCoordinates,
		strokeColor: '#bce8ee',
		strokeOpacity: 0.4,
		icons: [{
	  		icon: edilsonSymbol,
	  		offset: '100%'
		}],
		map: map
	});
	animateEdilsonCircle();	

//-----------------------------------------------------------------------------------
//TROPICAL STORM FOBANE
	fobane = new google.maps.Polyline({
		path: fobaneCoordinates,
		strokeColor: '#bce8ee',
		strokeOpacity: 0.4,
		icons: [{
	  		icon: fobaneSymbol,
	  		offset: '100%'
		}],
		map: map
	});
	animateFobaneCircle();	

//-----------------------------------------------------------------------------------
//TROPICAL STORM GUITO
	guito = new google.maps.Polyline({
		path: guitoCoordinates,
		strokeColor: '#bce8ee',
		strokeOpacity: 0.4,
		icons: [{
	  		icon: guitoSymbol,
	  		offset: '100%'
		}],
		map: map
	});
	animateGuitoCircle();	

//-----------------------------------------------------------------------------------
//TROPICAL STORM GILLIAN
	gillian = new google.maps.Polyline({
		path: gillianCoordinates,
		strokeColor: '#bce8ee',
		strokeOpacity: 0.4,
		icons: [{
	  		icon: gillianSymbol,
	  		offset: '100%'
		}],
		map: map
	});

	animateGillianCircle();

//-----------------------------------------------------------------------------------
//TROPICAL STORM HELLEN
	hellen = new google.maps.Polyline({
		path: hellenCoordinates,
		strokeColor: '#bce8ee',
		strokeOpacity: 0.4,
    	icons: [{
      		icon: hellenSymbol,
      		offset: '100%'
    	}],
    	map: map
  	});
	animateHellenCircle();	

//-----------------------------------------------------------------------------------
//TROPICAL STORM IVANHOE
	ivanhoe = new google.maps.Polyline({
		path: ivanhoeCoordinates,
		strokeColor: '#bce8ee',
		strokeOpacity: 0.4,
    	icons: [{
      		icon: ivanhoeSymbol,
      		offset: '100%'
    	}],
    	map: map
  	});
	animateIvanhoeCircle();	

//-----------------------------------------------------------------------------------
//TROPICAL STORM adjali
	adjali = new google.maps.Polyline({
		path: adjaliCoordinates,
		strokeColor: '#bce8ee',
		strokeOpacity: 0.4,
    	icons: [{
      		icon: adjaliSymbol,
      		offset: '100%'
    	}],
    	map: map
  	});
	animateAdjaliCircle();	

//-----------------------------------------------------------------------------------
//TROPICAL STORM BAKUNG
	bakung = new google.maps.Polyline({
		path: bakungCoordinates,
		strokeColor: '#bce8ee',
		strokeOpacity: 0.4,
    	icons: [{
      		icon: bakungSymbol,
      		offset: '100%'
    	}],
    	map: map
  	});
	animateBakungCircle();

//-----------------------------------------------------------------------------------
//EAST PACIFIC
//-----------------------------------------------------------------------------------

//TROPICAL STORM AMANDA
	amanda = new google.maps.Polyline({
		path: amandaCoordinates,
		strokeColor: '#bce8ee',
		strokeOpacity: 0.4,
		icons: [{
	  		icon: amandaSymbol,
	  		offset: '100%'
		}],
		map: map
	});
	
	animateAmandaCircle();	

//-----------------------------------------------------------------------------------
//SOUTH PACIFIC
//-----------------------------------------------------------------------------------

//TROPICAL STORM IAN
	ian = new google.maps.Polyline({
		path: ianCoordinates,
		strokeColor: '#bce8ee',
		strokeOpacity: 0.4,
		icons: [{
	  		icon: ianSymbol,
	  		offset: '100%'
		}],
		map: map
	});
	
	animateIanCircle();	

//-----------------------------------------------------------------------------------

//TROPICAL STORM JUNE
	june = new google.maps.Polyline({
		path: juneCoordinates,
		strokeColor: '#bce8ee',
		strokeOpacity: 0.4,
		icons: [{
	  		icon: juneSymbol,
	  		offset: '100%'
		}],
		map: map
	});
	
	animateJuneCircle();	

//-----------------------------------------------------------------------------------

//TROPICAL STORM DYLAN
	dylan = new google.maps.Polyline({
		path: dylanCoordinates,
		strokeColor: '#bce8ee',
		strokeOpacity: 0.4,
		icons: [{
	  		icon: dylanSymbol,
	  		offset: '100%'
		}],
		map: map
	});
	
	animateDylanCircle();	

//-----------------------------------------------------------------------------------

//TROPICAL STORM EDNA
	edna = new google.maps.Polyline({
		path: ednaCoordinates,
		strokeColor: '#bce8ee',
		strokeOpacity: 0.4,
		icons: [{
	  		icon: ednaSymbol,
	  		offset: '100%'
		}],
		map: map
	});
	
	animateEdnaCircle();

//-----------------------------------------------------------------------------------
//TROPICAL STORM KOFI
	kofi = new google.maps.Polyline({
		path: kofiCoordinates,
		strokeColor: '#bce8ee',
		strokeOpacity: 0.4,
		icons: [{
	  		icon: kofiSymbol,
	  		offset: '100%'
		}],
		map: map
	});
	
	animateKofiCircle();

//-----------------------------------------------------------------------------------
//TROPICAL STORM GILLIAN
	gillian = new google.maps.Polyline({
		path: gillianCoordinates,
		strokeColor: '#bce8ee',
		strokeOpacity: 0.4,
		icons: [{
	  		icon: gillianSymbol,
	  		offset: '100%'
		}],
		map: map
	});
	
	animateGillianCircle();

//-----------------------------------------------------------------------------------
//TROPICAL STORM ITA
	ita = new google.maps.Polyline({
		path: itaCoordinates,
		strokeColor: '#bce8ee',
		strokeOpacity: 0.4,
		icons: [{
	  		icon: itaSymbol,
	  		offset: '100%'
		}],
		map: map
	});
	
	animateItaCircle();

}


google.maps.event.addDomListener(window, 'load', initialize);