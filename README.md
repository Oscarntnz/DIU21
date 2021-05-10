# DIU21
Prácticas Diseño Interfaces de Usuario 2020-21 (Tema: Turismo) 

Grupo: DIU2_CajerosRurales.  Curso: 2020/21 
Updated: 25/3/2021

Enlace a Github: https://github.com/Oscarntnz/DIU21

Proyecto: eatgr

Descripción: Aplicación web basada en el turismo culinaro en Granada, donde los usuarios podrán tanto acceder a la información sobre distintos bares granadinos, como planear una ruta o valorar dichos bares.

Logotipo: 
>>> Opcionalmente si diseña un logotipo para su producto en la práctica 3 pongalo aqui

Miembros
 * :bust_in_silhouette:  Óscar Antúnez Martinaitis :octocat:     
 * :bust_in_silhouette:  Miguel Carracedo Rodríguez :octocat:

----- 


# Proceso de Diseño 

## Paso 1. UX Desk Research & Analisis 

![Método UX](img/Competitive.png) 1.a Competitive Analysis
-----

|  Nombre   |Web/App |                               Inconvenientes                                      |Ámbito |
|:---------:|:------:|:---------------------------------------------------------------------------------:|:-----:|
|Granadatur |Web     | Web algo antigua e información un poco escasa en ciertas partes.                  |Turismo|
|EsMadrid   |Web     |Interfaz algo abarrotada.                                                          |Turismo|
|Turismo.gal|Web     |Omisión de información al cambiar de idioma                                        |Turismo|
|Google Maps|Ambas   |Poca explicación sobre como manejarlo                                              |General|
|TurGranada |Ambas   |No hay información sobre preguntas comunes de los usuarios o indicaciones generales|Turismo|


De entre todas las posibles aplicaciones de turismo web , hemos escogido TourGranada debido a que está centrada en turismo en Granada, y posee una versión App, a diferencia de las otras.

![Método UX](img/Persona.png) 1.b Persona
-----

![Antonio Jesus](P1/photos/antoniojesus.png)

![Victoria](P1/photos/victoria.png)

Consideramos que esos dos personas (con poca experiencia con la tecnología y que no habla el idioma de la aplicación) nos podían presentar escenarios donde podriamos comprobar si la aplicación tuviera una interfaz lo suficientemente clara como para ser entendible para esos usuarios.

![Método UX](img/JourneyMap.png) 1.c User Journey Map
----

Para Antonio Jesús, decidí que hiciera un viaje a Granada, ya que sería capaz de probar todas o la mayoría de funcionalidades de la aplicación, cosa que le podría causar problemas con la interfaz. Respecto a la segunda persona hemos decidido poner la barrera del idioma como inconveniente ya que creemos que es algo muy presente en la actualidad y tanto el anterior como este puede ayudarnos a diseñar una interfaz más enfocada a la facilidad de comprensión y uso por parte del usuario.

![Método UX](img/usabilityReview.png) 1.d Usability Review
----
- Enlace al documento: https://github.com/Oscarntnz/DIU21/tree/master/P1/Usability-review.xlsx <br>
- Valoración final: 67<br>
- Comentario sobre la valoración: Si bien es una aplicación concreta para el turismo en Granada, notamos que era escueta en ciertas funcionalidades, y mejorable en algunos aspectos. Sin embargo es perfectamente usable por usuarios con poca experiencia o con alguna dificultad.


## Paso 2. UX Design  


![Método UX](img/feedback-capture-grid.png) 2.a Feedback Capture Grid / EMpathy map / POV
----

![fb_cap_grid](P2/fb_capture_grid.jpg)

De la apliación TurGranada nos hemos fijado principalmente en que es una aplicación bastante báscia en comparación con sus competidores. Está bastante desactualizada, y lo recogimos todo en la malla.<br>
    
Nosotros proponemos una aplicacion que esté basada en el turismo gastronomico en Granada, que se pueda usar facilmente tanto por turistas como propietarios de bares. Gracias al análisis anterior a TurGranada, queremos que esta aplicación permita crear cuentas para los usuarios, donde pueda guardar preferencias y rutas; Implemente mejoras de calidad de vida, como un modo oscuro, o que la interfaz esté inspirada en otras de aplicaciones altamente populares; E incentivar el turismo culinario en Granada, sobretodo para gente inexperta.

![Método UX](img/ScopeCanvas.png) 2.b ScopeCanvas
----
![scp_cnv](P2/scope_canvas.png)

![Método UX](img/Sitemap.png) 2.b Tasks analysis 
-----

![usr_tsk_mtrx](P2/user_task_matrix.png)

![Método UX](img/labelling.png) 2.c IA: Sitemap + Labelling 
----

![sitemap](P2/sitemap.png)

| Label                     | Descripción                                                                                       |            Icono             |
| ------------------------- | ------------------------------------------------------------------------------------------------- | ---------------------------- |
| Página de inicio          | Pagina prinicipal de la aplicación                                                                |![](P2/iconos/home.png)       |
| Inicio de Sesión/Registro | Iniciar sesion como usuario o crearse una cuenta en caso de no poseer una                         |![](P2/iconos/account.png)    |
| Búsqueda                  | Busqueda de rutas culinarias o bares en granada                                                   |![](P2/iconos/search.png)     |
| Ayuda                     | Tutorial, preguntas frecuentes, atención al cliente                                               |![](P2/iconos/ayuda.png)      |
| Perfil                    | Perfil de los usuarios registrados en la aplicación (correo electrónico, númerio de teléfono, ..) |![](P2/iconos/perfil.png)     |
| Editar Perfil             | Ajustar los datos personales de los usuarios                                                      |![](P2/iconos/editaccount.png)|
| Ruta                      | Rutas gastronómicas mas buscadas y populares                                                      |![](P2/iconos/ruta.png)       |
| Bar                       | Bares recomendados por otros usuarios                                                             |![](P2/iconos/bar.png)        |
| Borrar Ruta               | Eliminar una ruta guardada por un usuario                                                         |![](P2/iconos/garbage.png)    |
| Añadir Ruta               | Añadir una ruta en la lista de rutas de un usuario                                                |![](P2/iconos/add.png)        |
| Cerrar Sesión             | Cerrar sesión como usuario de la aplicación                                                       |![](P2/iconos/logout.png)     |
| Sobre Nosotros            | Correo electónico, teléfono de atención al cliente                                                |![](P2/iconos/aboutus.png)    |
| Tutorial                  | Tutorial con los pasos iniciales para los usuarios mas recientes                                  |![](P2/iconos/tutorial.png)   |
| Email                     | Email de un comercio, bar, o persona                                                              |![](P2/iconos/mail.png)       |
| Teléfono                  | Telefono de contacto                                                                              |![](P2/iconos/telf.png)       |
| Contacta con nosotros     | Correo electrónico, numero de telefono de la empresa para hacer un reporte                        |![](P2/iconos/report.png)     |
| Menu desplegable          | Menu que se despliega                                                                             |![](P2/iconos/menu.png)       |
| Contraseña                | Contraseña del usuario                                                                            |![](P2/iconos/password.png)   |
| Puntuacion                | Puntuación de un bar                                                                              |![](P2/iconos/vote.png)       |
| Editar                    | Editar la reseña de un bar                                                                        |![](P2/iconos/pencil.png)     |


![Método UX](img/Wireframes.png) 2.d Wireframes
-----

![](P2/layout/Account.png)
![](P2/layout/Ayuda.png)
![](P2/layout/Bar.png)
![](P2/layout/Bar2.png)
![](P2/layout/Busqueda.png)
![](P2/layout/Config.png)
![](P2/layout/Home.png)
![](P2/layout/LogIn.png)
![](P2/layout/Ruta.png)
![](P2/layout/RutasFavoritas.png)
![](P2/layout/SignUp.png)
![](P2/layout/Start.png)


## Paso 3. Mi UX-Case Study (diseño)


![Método UX](img/moodboard.png) 3.a Moodboard
-----


>>> Plantear Diseño visual con una guía de estilos visual (moodboard) 
>>> Incluir Logotipo
>>> Si diseña un logotipo, explique la herramienta utilizada y la resolución empleada. ¿Puede usar esta imagen como cabecera de Twitter, por ejemplo, o necesita otra?


![Método UX](img/landing-page.png)  3.b Landing Page
----


>>> Plantear Landing Page 

![Método UX](img/guidelines.png) 3.c Guidelines
----

Para la guía de diseño, nos hemos basado en la simplicidad, la poca saturación, y consistencia. Hemos escogido colores cálidos para los elementos, y el blanco y el negro para las letras. Esto para relacionar nuestra aplicación con un estilo monocromático, fácil de asociar, y cálido para recordar al verano, ya que es la mayor época turistica del año. Unas fuentes comunes y minimalistas como son Ralleway y Roboto, ya que es algo familiar internacionalmente. Y lo mismo aplicado a la iconografía, un estilo lineal y fácilmente reconocible.

#### Patrones

###### FAQ
Para la sección de ayuda, pensamos en incluir una subsección con preguntas frecuentes. Ahí haríamos uso del patrón FAQ.
>>Use when users typically has the same concerns and questions about a service.
>>Use to collect answers to common questions from your support department or other type of feedback mechanism.

###### Slideshow
Útil para la sección de imágenes de un bar.
>>Use when you need to capture attention using multiple stories and minimize screen real estate.

###### Autocomplete
Es conveniente cuando los usuarios buscan un bar concreto.
>>Use to assist with ambiguity-issues, when an item can be entered in multiple ways

###### Search Filter
Una mejora con forme a la aplicación estudiada en la P1, y útil para términos de búsqueda amplios o ambiguos.
>>Use when the search results for a query are very numerous and reviewing them would be very time consuming.
>>Use when search results can be categorized into filters: the search must be contextual.

###### Testimonials
Para las reseñas de los bares.

###### Lazy Registration/Account Registration
Usado por usuarios nuevos que quieran usar la aplicación con o sin cuenta.

###### Module Tabs
Usado para filtrar simplemente las busquedas, o los locales/rutas en la página de inicio.

###### Home Link
Tenemos un home link en la barra desplazable de la izquierda.

![Método UX](img/mockup.png)  3.d Mockup
----

>>> Layout: Mockup / prototipo HTML  (que permita simular tareas con estilo de IU seleccionado)


![Método UX](img/caseStudy.png) 3.e ¿My UX-Case Study?
-----


>>> Publicar my Case Study en Github..
>>> Documente y resuma el diseño de su producto en forma de video de 90 segundos aprox


## Paso 4. Evaluación 


![Método UX](img/ABtesting.png) 4.a Caso asignado
----


>>> Breve descripción del caso asignado con enlace a  su repositorio Github


![Método UX](img/usability-testing.png) 4.b User Testing
----

>>> Seleccione 4 personas ficticias. Exprese las ideas de posibles situaciones conflictivas de esa persona en las propuestas evaluadas. Asigne dos a Caso A y 2 al caso B
 

| Usuarios | Sexo/Edad     | Ocupación   |  Exp.TIC    | Personalidad | Plataforma | TestA/B
| ------------- | -------- | ----------- | ----------- | -----------  | ---------- | ----
| User1's name  | H / 18   | Estudiante  | Media       | Introvertido | Web.       | A 
| User2's name  | H / 18   | Estudiante  | Media       | Timido       | Web        | A 
| User3's name  | M / 35   | Abogado     | Baja        | Emocional    | móvil      | B 
| User4's name  | H / 18   | Estudiante  | Media       | Racional     | Web        | B 


![Método UX](img/Survey.png). 4.c Cuestionario SUS
----

>>> Usaremos el **Cuestionario SUS** para valorar la satisfacción de cada usuario con el diseño (A/B) realizado. Para ello usamos la [hoja de cálculo](https://github.com/mgea/DIU19/blob/master/Cuestionario%20SUS%20DIU.xlsx) para calcular resultados sigiendo las pautas para usar la escala SUS e interpretar los resultados
http://usabilitygeek.com/how-to-use-the-system-usability-scale-sus-to-evaluate-the-usability-of-your-website/)
Para más información, consultar aquí sobre la [metodología SUS](https://cui.unige.ch/isi/icle-wiki/_media/ipm:test-suschapt.pdf)

>>> Adjuntar captura de imagen con los resultados + Valoración personal 


![Método UX](img/usability-report.png) 4.d Usability Report
----

>> Añadir report de usabilidad para práctica B (la de los compañeros)



>>> Valoración personal 


## Paso 5. Evaluación de Accesibilidad  


![Método UX](img/Accesibility.png)  5.a Accesibility evaluation Report 
----

>>> Indica qué pretendes evaluar (de accesibilidad) sobre qué APP y qué resultados has obtenido 

>>> 5.a) Evaluación de la Accesibilidad (con simuladores o verificación de WACG) 
>>> 5.b) Uso de simuladores de accesibilidad 

>>> (uso de tabla de datos, indicar herramientas usadas) 

>>> 5.c Breve resumen del estudio de accesibilidad (de práctica 1) y puntos fuertes y de mejora de los criterios de accesibilidad de tu diseño propuesto en Práctica 4.



## Conclusión final / Valoración de las prácticas


>>> (90-150 palabras) Opinión del proceso de desarrollo de diseño siguiendo metodología UX y valoración (positiva /negativa) de los resultados obtenidos  













