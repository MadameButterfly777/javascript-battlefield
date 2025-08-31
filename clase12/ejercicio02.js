// Actividad 2: Carga de Datos con Fetch y Promesas
// Objetivo: Practicar el consumo de APIs y manejo de promesas.
// Consigna:
// Usa la API pública JSONPlaceholder para cargar una lista de posts.
// Muestra los títulos de los posts en una lista (<ul>) en el HTML.
// Agrega un mensaje de "Cargando..." mientras se espera la respuesta.
// Si hay un error (simula una URL incorrecta), muestra un mensaje de error en pantalla.
const spinner = document.createElement("div");
spinner.textContent = "cargando posts...";
spinner.style.border = "2px solid #8888";
spinner.style.borderRadius = "8px";
spinner.style.padding = "12px";
spinner.style.width = "fit-content";
spinner.style.fontWeight = "bold"; 
spinner.style.backgroundColor = "red"
document.body.appendChild(spinner);

const listaDeTareas = fetch("https://jsonplaceholder.typicode.com/posts")
.then(respuesta => respuesta.json()).then(posts => {
    const lista = document.getElementById("Lista-de-posts")
    posts.forEach(posts => {
        const li = document.createElement("li");
        li.textContent = posts.title;
        lista.appendChild(li)
        
    })
    spinner.remove()
}).catch((error) => {
    alert("esta todo mal, amigo");
    
})
