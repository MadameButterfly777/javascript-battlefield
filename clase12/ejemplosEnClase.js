// // console.log("empiezo");

// // setTimeout(() => {
// //     console.log("termine de esperar 1 segundo");
// // }, 3000);

// // console.log("sigo con otras cosas");

// // const promesa = new Promise((resolve) => {
// //     setTimeout(() => {
// //         console.log("listo");
        
// //     }, 3000);
// // })

// // promesa.then((mensaje) => {
// //     console.log(mensaje);
    
// // }) 
// const Promise = fetch("https://jsonplaceholder.typicode.com/posts")
// .then(respuesta =>   {
//     return(respuesta).json()
    
// }).then(data =>{
//     console.log(data)
    
// }).catch(error => {
//     console.log("error");
    
// }).finally(()=>{
//     console.log("proceso finalizado");
    
// })
// //ejemplo de promesa
//  const promesa = new Promise ((resolve, reject) =>{
//     const exito = true;
//     if(exito){
//         resolve("todo salio bien");
//     }else {
//         reject("algo salio mal")
//     }
//  });
//  promesa.then((mensaje)=>{
//     console.log(mensaje);
//  }).catch((error) => {
//     console.log(error);
//  });

//  //ejemplo async/await:
// function esperar () {
//     return new Promise ((resolve) => {
//         setTimeout(()=> {
//             resolve("¡listo despues de 2 segundos!")
//         }, 2000);
//     });
// };
// async function main() {
//     console.log("inicio");
//     const resutado = await esperar ()
//     console.log(resutado);
    
// }
// // main()
// const spinner = document.createElement("div");
// spinner.textContent = "cargando posts...";
// spinner.style.border = "2px solid #8888";
// spinner.style.borderRadius = "8px";
// spinner.style.padding = "12px";
// spinner.style.width = "fit-content";
// spinner.style.fontWeight = "bold"; 
// spinner.style.backgroundColor = "red"
// document.body.appendChild(spinner);

// fetch("https://jsonplaceholder.typicode.com/posts").then(res => {
//     if(!res.ok) throw new Error("error http: " + res.status)
//         return res.json();

// }).then(data=>{
//    data.forEach(element => {
//     const div = document.createElement("div");
//     div.style.border = "2px solid #8888";
//     div.style.borderRadius = "8px";
//     div.style.padding = "12px";
//     div.innerHTML = `<strong>id: >/strong> <span>${element.id} </span><br><strong>Titulo: </strong> ${element.title} `;
//     document.body.appendChild(div)
//    });
//    spinner.remove()
//     }).catch(error =>{
//         const div = document.createElement("div");
//         div.style.border = "2px solid #8888";
//         div.style.borderRadius = "8px";
//         div.style.padding = "12px";
//         div.innerHTML = `${error.message}` 
//         document.body.appendChild(div)
//         spinner.remove()
//         })

async function mostrarPosts() {
    const spinner = document.createElement("div");
    spinner.textContent = "cargando posts...";
    spinner.style.border = "2px solid #8888";
    spinner.style.borderRadius = "8px";
    spinner.style.padding = "12px";
    spinner.style.width = "fit-content";
    spinner.style.fontWeight = "bold"; 
    spinner.style.backgroundColor = "red"
    document.body.appendChild(spinner);
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
            if (!res.ok) throw new Error("error HTTp: " + res.status);
            const posts = await res.json();
            posts.forEach(posts => {
                const div = document.createElement("div");
                div.style.border = "2px solid #8888";
                div.style.borderRadius = "8px";
                div.style.padding = "12px";
                div.innerHTML = `<strong>id: >/strong> <span>${post.id} </span><br><strong>Titulo: </strong> ${post.title} `;
                document.body.appendChild(div);
            });
        spinner.remove();
    } catch(err) {
        console.log("error al obtener posts: " , err.message);
        spinner.remove()
        
    }
}
