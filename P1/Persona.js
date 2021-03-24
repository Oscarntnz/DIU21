/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */   
/*          [DIU] UX Toolkit v1.0 2019    */                        
/*          ver 1.1 26/Feb/2020            */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para las Personas      */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
        $scope.Grupo_ID ="DIU1.ABCDEF";
        $scope.Curso ="2020/21";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
                
                
                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 0,
				Name: "Pedro",
				Photo: "man.png",
				Quote: "Carpe Diem",
				Age: 32,
				Occupation: "Comercial en empresa de automocion",
				Family: "Con pareja desde hace 1 año",
				Location: "Granada (Huetor Vega)",
				Character: "Le gusta disfrutar del tiempo",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 4 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 1 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 3 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 5 }
				], 
				Goals: ["Disfrutar del tiempo libre, viajar", "Cambiar a un trabajo más estable"],
				Frustrations: ["le gusta la tecnología, pero siempre 'llama a un amigo' para resolver problemas", "Le gustaría tener más tiempo libre y leer más"],
				Bio: "Es de Modril y vino a Granada para estudiar administración de empresas, pero no ha tenido grandes oportunidades de trabajo. LLeva 2 años contratado en la empresa actual. Aqui ha hecho buenos amigo en el trabajo y normalmente ser reunen para fiestas y a veces organizan viajes",
				Tech: [
					{ Name: "TIC/Internet", Value: 2 },
					{ Name: "Movil", Value: 2 },
					{ Name: "RRSS", Value: 3 },
					{ Name: "Software", Value: 2 }
					
				], 
                Contextos: "LLeva un tiempo preocupado y quiere desconectar Le gustaría dar una sorpresa a sus amigos para las vacaciones",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 5 },
					{ Name: "Online & Social Media", Value: 3 },
					{ Name: "Recomendaciones & sugerencias", Value: 2 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 1 }
				]
			},
			{	
                
                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 1,
				Name: "Victoria Andersson",
				Photo: "woman.jpg",
				Quote: "Muy mía, muy a lo mio",
				Age: 27,
				Occupation: " Estudia educación infantil",
				Family: "Vive sola pero tiene un hermano pequeño que sigue viviendo con sus padres.",
				Location: "Suecia, Uppsala",
				Character: "Le gusta mucho viajar y moverse por nuevos sitios, utiliza mucho las redes sociales",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 4 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 3 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 3 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 2 }
				], 
				Goals: ["Espera poder conseguir muchas fotos de los sitios que visita y hacer recuerdos bonitos.", "Disfruta pudiendo probar nuevas comidas típicas del lugar que visita.", "Quiere  visitar muchos sitios de todos los lugares del mundo", "Aprender la cultura de las zonas que visita."],
				Frustrations: ["Intentar no pagar una cantidad de dinero excesiva al alquilar un hotel.", "Desea residir en hoteles situados en el centro de la ciudad.", "Distintas rutas turísticas segun los intereses de un usuario."],
				Bio: "Victoria Andersson(27 años) está estudiando educación infantil en la Universidad de Lund (Suecia). Vive sola en un piso situado en el centro de la ciudad, tiene un hermano pequeño de 16 años que vive con sus padres. Una vez termine sus estudios Victoria tiene pensado irse de vuelta a su ciudad natal para trabajar como profesora.",
				Tech: [
					{ Name: "TIC/Internet", Value: 3 },
					{ Name: "Mobile", Value: 4 },
					{ Name: "RRSS", Value: 5 },
					{ Name: "Software", Value: 2 }
					
				], 
                Contextos:   "Desea hacer un viaje al Sur de España. Busca lugares exóticos en los que poder sacarse fotos que pueda subir a las redes sociales. Interesada en la gastronomía y cultura de los lugares que visita. Visitar todos los puntos turísticos de la ciudad." ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 2 },
					{ Name: "Online & Social Media", Value: 5 },
					{ Name: "Recomendaciones & sugerencias", Value: 4 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 4 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])