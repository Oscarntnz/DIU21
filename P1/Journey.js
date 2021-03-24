/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.1 26/Feb/2020            */
/*******************************************/
    
/****  README:       */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		$scope.Grupo_ID ="DIU2.CajerosRurales";
        $scope.Curso ="2020/21";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
                /*************************************/
                /****   PRIMER USER JOURNEY MAP   ****/
                /*************************************/
                
				Id: 0,
				Name: "Antonio Jesús",
                Photo: "ajp.jpg",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere planear un viaje en verano a Granada.",
                touch1: "Agenda",
                feel1: "3",
                con1: "Encartar una fecha buena para que le venga bien a su mujer, y sus hijos no requieran su presencia.",
                ima1: "cartoon-planning.png",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "Busca alojamiento en un hotel, usa una aplicación en el movil que le recomendó su hijo.",
                touch2: "Móvil (TurGranada) y Teléfono",
                feel2: "1",
                con2: "Cuando accede a la sección de \"Alojamientos\" le aparecen por cercanía, y no es posible filtrarlos por municipios, lo cual provoca que haga algunas llamadas a hoteles de distintos municipios.",
                ima2: "cartoon-phoning.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Va hacia el hotel donde ha hecho la reserva",
                touch3: "Móvil",
                feel3: "2",
                con3: "Para que muestre el mapa se tiene que pulsar en una zona sin icono, ni ninguna indicación. No lo ve, y tiene que hacerlo a la antigua usanza",
                ima3: "cartoon-phone.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Pregunta a algunos amigos alguna recomendación para hacer turismo en Granada. Le proponen 2 alternativas: Google Maps, o la misma aplicación que antes.",
                touch4: "Móvil (WhatsApp)",
                feel4: "3",
                con4: "Tiene pocas opciones, y ninguna es de su agrado, ya que el esperaba una opción más tradicional.",
                ima4: "cartoon-phone-sitting.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Antonio Jesús decide seguir usando TurGranada, ya que está dedicada concretamente al turismo en la ciudad que está viajando",
                touch5: "Móvil",
                feel5: "2",
                con5: "No tuvo una muy buena impresión con la primera vez que la usó, y le tiene que preguntar alguna vez que otra a su hijo sobre cómo se usa la aplicación",
                ima5: "cartoon-phone.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Una vez de haberla usado para ir a varios sitios, finalmente se acostumbra a su interfaz y logra ir a varios sitios de interes turísitco",
                touch6: "ordenador",
                feel6: "4",
                con6: "A pesar de tener éxito, nota que podría haber usado la aplicación sin tener que invertir tanto tiempo",
                ima6: "cartoon-resting.png",
                
			},
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/
                
				Id: 1,
				Name: "Victoria Andersson",
                Photo: "woman.jpg",
                
				 /*** PASO #1: INSPIRACION ***/ 
                goal1: "Desea estar dos semanas en Granada por su cuenta, quiere conseguir muchas fotografías de los sitios que visita",
                touch1: "Móvil",
                feel1: "5",
                con1: "Quiere visitar sitios de atracción turística pero a la vez poder visitar distintos restaurantes para probar la comida",
                ima1: "cartoon-going.png",
                
                /*** PASO #2: DECICION ***/ 
                goal2: "Encuentra una aplicación en la AppStore la cual utiliza para buscar si hay rutas turisticas organizadas con ese fin. ",
                touch2: "Móvil (aplicación)",
                feel2: "3",
                con2: "Devido ha que se encuentra en Suecia las recomendacios que le aparecen no son muy acordes con lo que busca. La aplicación se encuentra solamente en español.",
                ima2: "cartoon-PCSurprised.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Encuentra dos rutas individuales para visitar los puntos turísticos más importantes y la otra para comer y cenar en una serie de bares o restaurantes populares",
                touch3: "Móvil (correo)",
                feel3: "4",
                con3: "Cree que podrá compaginar las dos actividades",
                ima3: "cartoon-looking.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Compara hoteles cerca del centro de granada donde se encuentran la mayoría de los bares que desea visitar.",
                touch4: "Móvil (GoogleMaps)",
                feel4: "2",
                con4: "La interfaz no le permite filtrar por ciudad o ver el precio de los hoteles, por lo que tiene que visitar la página web del hotel.",
                ima4: "cartoon-PCcrying.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Consiguie reservar en un hotel  en el centro",
                touch5: "Móvil (webapp)",
                feel5: "3",
                con5: "Al no haber podido comparar muchos hoteles tuvo que escoger uno con un precio elevado.",
                ima5: "cartoon-phone-sitting.png",

                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Logra cumplir su objetivo a pesar de que debido al cambio de idioma le haya costado más de lo esperado.",
                touch6: "Ordenador (reserva OK)",
                feel6: "4",
                con6: "Tendrá que buscar más información de como llegar al lugar y si hay algún evento llevandose a cabo",
                ima6: "cartoon-happy.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



