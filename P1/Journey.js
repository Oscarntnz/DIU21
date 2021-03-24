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
		$scope.Grupo_ID ="DIU1.ABCDEF";
        $scope.Curso ="2020/21";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
				Id: 0,
				Name: "Pedro",
                Photo: "man.png",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "quiere preparar un viaje con sus amigos en Semana Santa",
                touch1: "agenda",
                feel1: "4",
                con1: "ver cuantos días puede tener libres para organizar lugar de viaje ",
                ima1: "cartoon-planning.png",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "Busca en internet ofertas para esas fechas",
                touch2: "Movil",
                feel2: "2",
                con2: "hay demasiada información y pierde mucho tiempo, no hay precios 'baratos'",
                ima2: "cartoon-PCangry.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Decide buscar un alojamiento rural  en plasencia, donde hay procesiones y parece que hará buen tiempo",
                touch3: "móvil (el tiempo)",
                feel3: "3",
                con3: "Está preocupado por el tiempo y el desplazamiento (coche y aparcamiento)",
                ima3: "cartoon-phone.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Los amigos le recomiendan una página para escoger alojamientos",
                touch4: "ordenador",
                feel4: "4",
                con4: "Buscar opciones en el lugar que había seleccionado, viendo precios y distancias, tiene que ver si hay aparcamiento fácil",
                ima4: "cartoon-PCtyping.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Se encuentra 3 opciones que encajan en sus preferencias",
                touch5: "móvil (whatsapp)",
                feel5: "2",
                con5: "Llama a sus amigos (whatsapp no responen) para ver cual es su preferencia, tienen que reservar rápido por los precios",
                ima5: "cartoon-phoning.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Consigue reservar, otro año se encarga otro!",
                touch6: "ordenador",
                feel6: "3",
                con6: "algunos amigos no confirmaron por lo que tuvo que seleccionar reserva con posibilidad de cancelación",
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



