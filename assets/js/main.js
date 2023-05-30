
window.addEventListener("DOMContentLoaded", () => {
  mostrarServicios();
  mostrarCarrito();
});

class Servicio{
  constructor(nombre, descripcion, precio, img="../assets/img/pestanas.jpg"){
    this.nombre = nombre,
    this.descripcion = descripcion,
    this.precio = precio,
    this.img = img
  }
}
let servicio1 = new Servicio ("PACK LIFTING + TINTE DE PESTAÑAS", "WOW🌟 la pareja perfecta es sinónimo de un look perfecto Lifting + Tinte. Servicio ideal para pestañas cortas, mediana y largas. ¡SÚPER PRECIO!", 40);
let servicio2 = new Servicio ("LIFTING DE PESTAÑAS", "¡Eleva tus pestañas al infinito hasta por 8 semanas! Servicio ideal para pestañas cortas, mediana y largas.", 37);
let servicio3 = new Servicio ("DEPILACIÓN DE CEJAS CON PINZAS", "Depilación de Cejas utilizando pinzas.", 12);
let servicio4 = new Servicio ("DEPILACION DE CEJAS CON HILO", "Depilación de Cejas utilizando la tecnica del hilo.", 17);
let servicio5 = new Servicio ("MICROBLADING", "Las cejas que siempre soñaste se hacen realidad gracias al Microblading, tecnica de hiperrealismo que simula los pelitos naturales de las cejas para conseguir unas cejas perfectas por mucho tiempo.", 159);
let servicio6 = new Servicio ("MANICURA RUSA COMPLETA PERMANENTE", "¡MAYOR LIMPIEZA Y DURABILIDAD ! con esta innovadora tecnica rusa tendras unas uñas mas limpias, fuertes y duraderas.( Limpieza profunda + nivelacion de uña + base rubber de microfibras y vitaminas + esmaltado).", 76);
let servicio7 = new Servicio ("PEDICURA COMPLETA RUSA SEMIPERMANENTE", "Pedicura completa rusa semipermanente.", 36);

const listaServicios = [servicio1, servicio2, servicio3, servicio4, servicio5, servicio6, servicio7];

function mostrarServicios() {
  let contenedor = document.getElementById("contenedor");

  contenedor.innerHTML = "";

  for (const service of listaServicios) {
    let servicioHTML = `
      <div class="card" style="width: 18rem;">
        <img src="${service.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${service.nombre}</h5>
          <p class="card-text">${service.descripcion}</p>
          <p class="card-text">Precio: ${service.precio}</p>
          <button onclick="agregarAlCarrito(${listaServicios.indexOf(
            service
          )})" class="btn btn-primary">Agregar al carrito</button>
        </div>
      </div>
    `;

    contenedor.innerHTML += servicioHTML;
  }
}

function agregarAlCarrito(servicioIndex) {
  let servicioSeleccionado = listaServicios[servicioIndex];

  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  carrito.push(servicioSeleccionado);

  localStorage.setItem("carrito", JSON.stringify(carrito));

  mostrarCarrito();
}

function mostrarCarrito() {
  let carritoHTML = document.getElementById("carrito");
  let totalHTML = document.getElementById("total");

  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  carritoHTML.innerHTML = "";

  let total = 0;

  for (const servicio of carrito) {
    let servicioHTML = `
    <div class="table-responsive">
    <table class="table table-dark table-hover">
      <thead>
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Precio</th>
          <th scope="col">Boton</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">${servicio.nombre}</th>
          <td>${servicio.precio}</td>
          <td><button onclick="eliminarDelCarrito(${carrito.indexOf(
            servicio
            )})" class="btn btn-danger">Eliminar</button></td>
        </tr>
      </tbody>
      </table>
      </div>
    `;

    carritoHTML.innerHTML += servicioHTML;
    total += servicio.precio;
  }

  totalHTML.textContent = `Total: ${total}`;
}

function eliminarDelCarrito(servicioIndex) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  carrito.splice(servicioIndex, 1);

  localStorage.setItem("carrito", JSON.stringify(carrito));

  mostrarCarrito();
}

function abrirFormularioAgendamiento() {
  let modal = document.getElementById("formularioModal");
  let calendar = document.getElementById("calendario");

  modal.style.display = "block";
  calendar.style.display = "none";
}

function cerrarFormularioAgendamiento() {
  let modal = document.getElementById("formularioModal");
  let calendar = document.getElementById("calendario");

  modal.style.display = "none";
  calendar.style.display = "block";
}

function guardarAgendamiento() {
  let fecha = document.getElementById("fecha").value;
  let hora = document.getElementById("hora").value;

  document.getElementById("fechaAgendada").textContent = "Fecha agendada: " + fecha;
  document.getElementById("horaAgendada").textContent = "Hora agendada: " + hora;

  cerrarFormularioAgendamiento();
}

//ADMINISTRACION DE SERVICIOS
//SUARIO Y CONTRASEÑA admin

function verifyCredentials(event) {
  event.preventDefault();

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (username === "admin" && password === "admin") {
    document.getElementById("dataForm").style.display = "block";
    mostrarServicios();
  } else {
    alert("Credenciales incorrectas. Inténtalo de nuevo.");
  }
}

function sendData(event) {
  event.preventDefault();

  let input1 = document.getElementById("nombreServicio").value;
  let input2 = document.getElementById("descServicio").value;
  let input3 = document.getElementById("precioServicio").value;

  let servicio = new Servicio (input1, input2, input3);
  
  listaServicios.push(servicio);
  mostrarServicios(listaServicios);

  document.getElementById("nombreServicio").value = "";
  document.getElementById("descServicio").value = "";
  document.getElementById("precioServicio").value = "";

  console.log(listaServicios);
}

document.getElementById("loginForm").addEventListener("submit", verifyCredentials);
document.getElementById("sendButton").addEventListener("click", sendData);
