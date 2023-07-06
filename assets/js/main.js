
window.addEventListener("DOMContentLoaded", () => {
  obtenerServicios();
  cargarServiciosDesdeLocalStorage();
});

class Servicio{
  constructor(nombre, descripcion, precio, img="../assets/img/pestanas.jpg"){
    this.nombre = nombre,
    this.descripcion = descripcion,
    this.precio = precio,
    this.img = img
  }
}

function agregarNuevoServicio() {
  Swal.fire({
    title: "Agregar Nuevo Servicio",
    html:
      '<input id="nombre" class="swal2-input" placeholder="Nombre">' +
      '<input id="descripcion" class="swal2-input" placeholder="Descripción">' +
      '<input id="precio" type="number" class="swal2-input" placeholder="Precio $">',
    focusConfirm: false,
    preConfirm: () => {
      const nombre = Swal.getPopup().querySelector("#nombre").value;
      const descripcion = Swal.getPopup().querySelector("#descripcion").value;
      const precio = Swal.getPopup().querySelector("#precio").value;

      if (!nombre || !precio) {
        Swal.showValidationMessage("El campo Nombre y Precio es obligatorio");
        return;
      }
      const nuevoServicio = new Servicio(nombre, descripcion, precio);
      agregarServicio(nuevoServicio);
      mostrarServicios(servicios);
      Swal.fire(
        'Tenemos Nuevo Servicio!',
        `Tu servicio de ${nombre} fue agregado con exito`,
        'success'
      )
    },
  });
}

document.getElementById("btnNuevo").addEventListener("click", function(event) {
  event.preventDefault
  agregarNuevoServicio();
})

// Agregar un servicio al array de servicios
function agregarServicio(service) {
  servicios.push(service);
}

const contenedor = document.getElementById("contenedor");

// Constante para la ruta relativa del arcivo JSON que funcionará como API
const ServiceApi = "../assets/bdd/servicios.json"

let servicios = []; // Variable global para almacenar todos los servicios
let serviciosFiltrados = []; // Variable global para almacenar los servicios filtrados
let serviciosAgregados = []; // Variable global para los servicios agregados al carrito


// Obtener los servicios de la API y mostrarlos en la página
function obtenerServicios() {
  fetch(ServiceApi)
    .then(respuesta => respuesta.json())
    .then(datos => {
      servicios = datos;
      serviciosFiltrados = datos;
      mostrarServicios(serviciosFiltrados);
    })
    .catch(error => console.log("Error fetch: ", error));
}

// Mostrar los servicios en la página
function mostrarServicios(servicios) {
  contenedor.innerHTML = '';

  servicios.forEach(service => {
    contenedor.innerHTML += `
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col" class="col-2">Imagen</th>
            <th scope="col" class="col-3">Nombre</th>
            <th scope="col" class="col-4">Descripción</th>
            <th scope="col" class="col-2">Precio</th>
            <th scope="col" class="col-1">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="col-2"><img src="${service.img}" class="card-img-top" alt="..."></td>
            <td class="col-3">${service.nombre}</td>
            <td class="col-4">${service.descripcion}</td>
            <td class="col-2">Precio: $ ${service.precio}</td>
            <td class="col-1">
              <button onclick="agregarAlCarrito('${service.nombre}', ${service.precio})" class="btn btn-primary">+</button>
            </td>
          </tr>
        </tbody>
      </table>
    `;
  });
}

// <button onclick="agregarAlCarrito(${JSON.stringify(service)})" class="btn btn-primary">Agregar al carrito</button>

// Evento para que funciones enter en el input de buscar
document.getElementById("inputBuscar").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    filtrarServicios();
  }
});

// Evento para boton de buscar servicio
document.getElementById("btnBuscar").addEventListener("click", function(event) {
  event.preventDefault
  filtrarServicios();
})

// Filtrar los servicios según el texto de búsqueda
function filtrarServicios() {
  const inputBuscar = document.getElementById('inputBuscar');
  const textoBuscar = inputBuscar.value.toLowerCase();

  serviciosFiltrados = servicios.filter(service => {
    const nombreServicio = service.nombre.toLowerCase();
    return nombreServicio.includes(textoBuscar);
  });

  mostrarServicios(serviciosFiltrados);
}

// Agregar un servicio al carrito
function agregarAlCarrito(nombre, precio) {
  // Agregar el servicio al array de servicios agregados
  serviciosAgregados.push({ nombre, precio });

  // Actualizar la lista de servicios agregados
  mostrarServiciosAgregados();

  // Calcular y mostrar el total del carrito
  calcularTotal();

  // Guardar los servicios agregados en el localStorage
  guardarServiciosEnLocalStorage();
}

// Guardar los servicios agregados en el localStorage
function guardarServiciosEnLocalStorage() {
  localStorage.setItem('serviciosAgregados', JSON.stringify(serviciosAgregados));
}

// Cargar los servicios agregados desde el localStorage al cargar la página
function cargarServiciosDesdeLocalStorage() {
  const serviciosAgregadosGuardados = JSON.parse(localStorage.getItem('serviciosAgregados'));

  if (serviciosAgregadosGuardados) {
    serviciosAgregados = serviciosAgregadosGuardados;
  }

  // Actualizar la lista de servicios agregados y el total del carrito
  mostrarServiciosAgregados();
  calcularTotal();
}

function procesarPago() {
  const total = calcularTotal();

  Swal.fire({
    title: '¿Estas segura que quieres estos servicios?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Si',
    denyButtonText: `No`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire(`Agendado el monto a pagar es: $${total}`, '', 'success')
      serviciosAgregados = [];
      mostrarServiciosAgregados();
      calcularTotal();
      guardarServiciosEnLocalStorage();
    } else if (result.isDenied) {
      Swal.fire('Regresando', '', 'info')
    }
  })
}

// Mostrar la lista de servicios agregados
function mostrarServiciosAgregados() {
  const listaCarrito = document.getElementById('listaCarrito');
  listaCarrito.innerHTML = '';

  serviciosAgregados.forEach((service, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${service.nombre} - Precio: $${service.precio}`;

    // Crear el botón para quitar el servicio de la lista
    const botonQuitar = document.createElement('button');
    botonQuitar.textContent = 'Quitar';
    botonQuitar.classList.add('btn', 'btn-danger');
    botonQuitar.addEventListener('click', () => {
      quitarServicio(index);
    });

    // Agregar el botón al elemento de la lista
    listItem.appendChild(botonQuitar);

    listaCarrito.appendChild(listItem);
  });

  // Obtener el botón de Pagar
  const botonPagar = document.getElementById('botonPagar');

  if (serviciosAgregados.length === 0) {
    botonPagar.disabled = true;
  } else {
    botonPagar.disabled = false;
  }
}

function quitarServicio(index) {
  serviciosAgregados.splice(index, 1);
  mostrarServiciosAgregados();
  calcularTotal();
  guardarServiciosEnLocalStorage();
}
// Calcular el total del carrito
function calcularTotal() {
  const totalCarrito = document.getElementById('totalCarrito');

  const total = serviciosAgregados.reduce((accumulatedTotal, service) => {
    return accumulatedTotal + service.precio;
  }, 0);

  totalCarrito.textContent = total;

  return total;
}

const botonPagar = document.createElement('button');
botonPagar.textContent = 'Pagar';
botonPagar.classList.add('btn', 'btn-primary');
botonPagar.addEventListener('click', procesarPago);
botonPagar.id = 'botonPagar';
document.getElementById('carrito').appendChild(botonPagar);