API_URL = "https://68b700a673b3ec66cec374d2.mockapi.io/list";

async function obtenerUsuarios() {
  try {
    const response = await fetch(`${API_URL}`);
    if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
    const datos = await response.json();
    mostrarUsuariosEnDOM(datos);
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
  }
}

const usuariosContainer = document.getElementById("tabla-estudiantes");
function mostrarUsuariosEnDOM(datos) {
  if (datos.length === 0) {
    usuariosContainer.innerHTML = "<p>No hay datos para mostrar.</p>";
    return;
  }
  usuariosContainer.innerHTML = "";
  datos.forEach(({ job, country, name, avatar, id }) => {
    // const {job, country, name, avatar, id} = dato

    const userCard = document.createElement("div");
    userCard.className = "box is-flex is-align-items-center mb-3";
    userCard.innerHTML = `
      <figure class="image is-64x64 mr-4">
        <img src="${
          avatar || "https://via.placeholder.com/150"
        }" thisonerror=null"this.src='https://via.placeholder.com/150'">
      </figure>
      <div class="mr-auto">
        <h3 class="title is-5 mb-1">${name}</h3>
        <p>${country} • ${job}</p>
        <small>ID: ${id}</small>
      </div>
      <div class="buttons">
        <button class="button is-warning" id="botonEditar" onclick="editUser('${id}')">Editar</button>
        <button class="button is-danger" onclick="deletea('${id}')">Eliminar</button>
      </div>
    `;
    usuariosContainer.appendChild(userCard);
  });
}

//  DELETE
window.deletea =
 async function (id) {
  if (confirm(`¿Estás seguro de eliminar el estudiante con ID ${id}?`)) {
    try {
      const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
      alert("Estudiante eliminado correctamente");
      obtenerUsuarios();z
    } catch (error) {
      alert(`Error al eliminar estudiante: ${error.message}`);
      console.error("Error al eliminar estudiante:", error);
    }
  }
};

// POST CREAR USUARIO
const form = document.querySelector("#form-estudiante");
// addEventListener('clck', () => {
//     form.classList.remove('is-hiden')
// })

// form.addEventListener("submit", async (e) => {
//   e.preventDefault();
//   const id = document.getElementById("id").value;
//   const name = document.getElementById("nombre").value;
//   const country = document.getElementById("pais").value;
//   const avatar = document.getElementById("avatar").value;

//   const response = await fetch(`${API_URL}`, { //id
//     method: "POST", //put
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       name,
//       avatar,
//       country,
//     }),
//   });
//   if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
//   alert("Estudiante creado correctamente"); //actualizado
//   obtenerUsuarios();
// });


//aca logramos hacer aparecer el formulario
usuariosContainer.addEventListener('click', ()=> { 
     
    form.classList.remove('is-hidden')
} )
   

form.addEventListener('submit', ()=>editUser() )

async function editUser (id) {
     
  const name = document.getElementById("nombre").value;
  const country = document.getElementById("pais").value;
  const avatar = document.getElementById("avatar").value;
try {
     const response = await fetch(`${API_URL}/${id}`, { 
    method: "PUT", 
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name,
      avatar,
      country,
    }),
  });
  if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
  alert("Estudiante actualizado correctamente"); 
  obtenerUsuarios();
} catch (error) {
    
}
}
obtenerUsuarios();