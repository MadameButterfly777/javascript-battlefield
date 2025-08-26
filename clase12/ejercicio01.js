
// Actividad 1: Simulación de Event Loop con Temporizadores
// Objetivo: Entender cómo el Event Loop maneja tareas síncronas y asíncronas.
// Consigna:
// Crea una página HTML con un botón.
// Al hacer clic en el botón, programa:
// Un console.log("Inicio") (síncrono).
// Un setTimeout(() => console.log("Timeout"), 0) (asíncrono).
// Un console.log("Fin") (síncrono).
// Observa el orden de los mensajes en la consola y explica por qué ocurre así.

 let boton = document.getElementById( "button") ;
 boton.addEventListener( "click" , () => {
   console.log("inicio");
   setTimeout( () => {
    console.log("time out");
    
   }, 3000)
   console.log("fin");
   

 })
 