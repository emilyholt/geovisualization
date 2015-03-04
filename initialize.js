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
//TROPICAL STORM BORIS
	boris = new google.maps.Polyline({
		path: borisCoordinates,
		strokeColor: '#bce8ee',
		strokeOpacity: 0.4,
		icons: [{
	  		icon: borisSymbol,
	  		offset: '100%'
		}],
		map: map
	});
	
	animateBorisCircle();	

//-----------------------------------------------------------------------------------
//TROPICAL STORM CRISTINA
	cristina = new google.maps.Polyline({
		path: cristinaCoordinates,
		strokeColor: '#bce8ee',
		strokeOpacity: 0.4,
		icons: [{
	  		icon: cristinaSymbol,
	  		offset: '100%'
		}],
		map: map
	});
	
	animateCristinaCircle();	

//-----------------------------------------------------------------------------------
//TROPICAL STORM DOUGLAS
	douglas = new google.maps.Polyline({
		path: douglasCoordinates,
		strokeColor: '#bce8ee',
		strokeOpacity: 0.4,
		icons: [{
	  		icon: douglasSymbol,
	  		offset: '100%'
		}],
		map: map
	});
	
	animateDouglasCircle();	

//-----------------------------------------------------------------------------------
//TROPICAL STORM ELIDA
	elida = new google.maps.Polyline({
		path: elidaCoordinates,
		strokeColor: '#bce8ee',
		strokeOpacity: 0.4,
		icons: [{
	  		icon: elidaSymbol,
	  		offset: '100%'
		}],
		map: map
	});
	
	animateElidaCircle();	

//-----------------------------------------------------------------------------------
//TROPICAL STORM FAUSTO
	fausto = new google.maps.Polyline({
		path: faustoCoordinates,
		strokeColor: '#bce8ee',
		strokeOpacity: 0.4,
		icons: [{
	  		icon: faustoSymbol,
	  		offset: '100%'
		}],
		map: map
	});
	
	animateFaustoCircle();	

//-----------------------------------------------------------------------------------
//TROPICAL STORM WALI
	wali = new google.maps.Polyline({
		path: waliCoordinates,
		strokeColor: '#bce8ee',
		strokeOpacity: 0.4,
		icons: [{
	  		icon: waliSymbol,
	  		offset: '100%'
		}],
		map: map
	});
	
	animateWaliCircle();	

//-----------------------------------------------------------------------------------
//TROPICAL STORM GENEVIEVE
	genevieve = new google.maps.Polyline({
		path: genevieveCoordinates,
		strokeColor: '#bce8ee',
		strokeOpacity: 0.4,
		icons: [{
	  		icon: genevieveSymbol,
	  		offset: '100%'
		}],
		map: map
	});
	
	animateGenevieveCircle();	

//-----------------------------------------------------------------------------------
//TROPICAL STORM HERNAN
	hernan = new google.maps.Polyline({
		path: hernanCoordinates,
		strokeColor: '#bce8ee',
		strokeOpacity: 0.4,
		icons: [{
	  		icon: hernanSymbol,
	  		offset: '100%'
		}],
		map: map
	});
	
	animateHernanCircle();	

//-----------------------------------------------------------------------------------
//TROPICAL STORM ISELLE
	iselle = new google.maps.Polyline({
		path: iselleCoordinates,
		strokeColor: '#bce8ee',
		strokeOpacity: 0.4,
		icons: [{
	  		icon: iselleSymbol,
	  		offset: '100%'
		}],
		map: map
	});
	
	animateIselleCircle();	

//-----------------------------------------------------------------------------------
//TROPICAL STORM JULIO
	julio = new google.maps.Polyline({
		path: julioCoordinates,
		strokeColor: '#bce8ee',
		strokeOpacity: 0.4,
		icons: [{
	  		icon: julioSymbol,
	  		offset: '100%'
		}],
		map: map
	});
	
	animateJulioCircle();	

//-----------------------------------------------------------------------------------
//TROPICAL STORM KARINA
	karina = new google.maps.Polyline({
		path: karinaCoordinates,
		strokeColor: '#bce8ee',
		strokeOpacity: 0.4,
		icons: [{
	  		icon: karinaSymbol,
	  		offset: '100%'
		}],
		map: map
	});
	
	animateKarinaCircle();	

//-----------------------------------------------------------------------------------
//TROPICAL STORM KARINA
	lowell = new google.maps.Polyline({
		path: lowellCoordinates,
		strokeColor: '#bce8ee',
		strokeOpacity: 0.4,
		icons: [{
	  		icon: lowellSymbol,
	  		offset: '100%'
		}],
		map: map
	});
	
	animateLowellCircle();

//-----------------------------------------------------------------------------------
//TROPICAL STORM MARIE
	marie = new google.maps.Polyline({
		path: marieCoordinates,
		strokeColor: '#bce8ee',
		strokeOpacity: 0.4,
		icons: [{
	  		icon: marieSymbol,
	  		offset: '100%'
		}],
		map: map
	});
	
	animateMarieCircle();

//-----------------------------------------------------------------------------------
//TROPICAL STORM NORBERT
	norbert = new google.maps.Polyline({
		path: norbertCoordinates,
		strokeColor: '#bce8ee',
		strokeOpacity: 0.4,
		icons: [{
	  		icon: norbertSymbol,
	  		offset: '100%'
		}],
		map: map
	});
	
	animateNorbertCircle();

//-----------------------------------------------------------------------------------
//TROPICAL STORM ODILE
	odile = new google.maps.Polyline({
		path: odileCoordinates,
		strokeColor: '#bce8ee',
		strokeOpacity: 0.4,
		icons: [{
	  		icon: odileSymbol,
	  		offset: '100%'
		}],
		map: map
	});
	
	animateOdileCircle();

//-----------------------------------------------------------------------------------
//TROPICAL STORM POLO
	polo = new google.maps.Polyline({
		path: poloCoordinates,
		strokeColor: '#bce8ee',
		strokeOpacity: 0.4,
		icons: [{
	  		icon: poloSymbol,
	  		offset: '100%'
		}],
		map: map
	});
	
	animatePoloCircle();

//-----------------------------------------------------------------------------------
//TROPICAL STORM RACHEL
	rachel = new google.maps.Polyline({
		path: rachelCoordinates,
		strokeColor: '#bce8ee',
		strokeOpacity: 0.4,
		icons: [{
	  		icon: rachelSymbol,
	  		offset: '100%'
		}],
		map: map
	});
	
	animateRachelCircle();

//-----------------------------------------------------------------------------------
//TROPICAL STORM SIMON
	simon = new google.maps.Polyline({
		path: simonCoordinates,
		strokeColor: '#bce8ee',
		strokeOpacity: 0.4,
		icons: [{
	  		icon: simonSymbol,
	  		offset: '100%'
		}],
		map: map
	});
	
	animateSimonCircle();


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

	/*
	var oceanCurrentsLayer = new google.maps.KmlLayer({
    	url: 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0CB4QFjAA&url=http%3A%2F%2Fsos.noaa.gov%2Fkml%2Fkml%2Focean_currents.kml&ei=xIP2VNLVC6PHsQTwpYHIBA&usg=AFQjCNFbPpknEHeiowkQuGbr9jh1XoUZzQ&sig2=CwKylxmR0lTK-OraDUpAXg'
  	});
  	oceanCurrentsLayer.setMap(map);
	*/

  	//ocean temp
  	/*
  	var oceanTempLayer = new google.maps.KmlLayer({
    	url: 'http://kml.wxtiles.com/wxtiles.sst.kml'
  	});
  	oceanTempLayer.setMap(map);*/

	
}


google.maps.event.addDomListener(window, 'load', initialize);