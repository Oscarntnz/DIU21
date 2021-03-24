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
        $scope.Grupo_ID ="DIU2.CajerosRurales";
        $scope.Curso ="2020/21";
        $scope.Github_ID ="https://github.com/Oscarntnz/DIU21";
        
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
                
                
                /*************************************/
                /****       PRIMERA PERSONA       ****/
                /*************************************/
                
                
				Id: 0,
				Name: "Antonio Jesús",
				Photo: "ajp.jpg",
				Quote: "El tempus fugit",
				Age: 70,
				Occupation: "Jubilado",
				Family: "Casado por segunda vez y con 2 hijos",
				Location: "Albacete",
				Character: "A pesar de su avanzada edad, le gusta mucho recorrer España",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 1.5 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 3 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 4 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 4 }
				], 
				Goals: ["Hacer viajes alrededor de España con su actual mujer", "Motivar a sus hijos a que empiecen un plan de pensiones", "Ahorrar para dejar una buena herencia a sus hijos", "Hacer "],
				Frustrations: ["No le gusta la tecnología", "No le gusta andar", "No le gusta interactuar con personas lejanas a su circulo cercano, por lo que prefiere comunicarse lo mínimo", "No le gustan los sitios abarrotados"],
				Bio: "Nacido en Albacete, Antonio Jesús comenzó trabajando de albañil, hasta que pudo ahorrar lo suficiente y montó una empresa. Vivió de su empresa el resto de su vida laboral. Está casado por segunda vez y tiene un hijo con su mujer y otro con su exmujer. Ahora está jubilado y le gusta ir recorriendo el pais con su actual cónyuge.",
				Tech: [
					{ Name: "TIC/Internet", Value: 1 },
					{ Name: "Movil", Value: 2.5 },
					{ Name: "RRSS", Value: 0.5 },
					{ Name: "Software", Value: 2 }
					
				], 
                Contextos: "Ya que se va acercando el verano, Antonio Jesús planea hacer otro viaje con su mujer. Esta vez quiere ir a Granada, ya que nunca ha ido allí.",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 5 },
					{ Name: "Online & Social Media", Value: 1 },
					{ Name: "Recomendaciones & sugerencias", Value: 2.5 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 4 }
				]
			},
			{	
                
                /*************************************/
                /****       SEGUNDA PERSONA       ****/
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
