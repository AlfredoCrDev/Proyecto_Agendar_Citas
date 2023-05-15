class Servicio{
  constructor(nombre, descripcion, precio){
    this.nombre = nombre,
    this.descripcion = descripcion,
    this.precio = precio
  }
}
let servicio1 = new Servicio ("PACK LIFTING + TINTE DE PESTAÑAS", "WOW🌟 la pareja perfecta es sinónimo de un look perfecto Lifting + Tinte. Servicio ideal para pestañas cortas, mediana y largas. ¡SÚPER PRECIO!", 40);
let servicio2 = new Servicio ("LIFTING DE PESTAÑAS", "¡Eleva tus pestañas al infinito hasta por 8 semanas! Servicio ideal para pestañas cortas, mediana y largas.", 37);
let servicio3 = new Servicio ("DEPILACIÓN DE CEJAS CON PINZAS", "Depilación de Cejas utilizando pinzas.", 12);
let servicio4 = new Servicio ("DEPILACION DE CEJAS CON HILO", "Depilación de Cejas utilizando la tecnica del hilo.", 17);
let servicio5 = new Servicio ("MICROBLADING", "Las cejas que siempre soñaste se hacen realidad gracias al Microblading, tecnica de hiperrealismo que simula los pelitos naturales de las cejas para conseguir unas cejas perfectas por mucho tiempo.", 159);
let servicio6 = new Servicio ("MANICURA RUSA COMPLETA PERMANENTE", "¡MAYOR LIMPIEZA Y DURABILIDAD ! con esta innovadora tecnica rusa tendras unas uñas mas limpias, fuertes y duraderas.( Limpieza profunda + nivelacion de uña + base rubber de microfibras y vitaminas + esmaltado).", 76);
let servicio7 = new Servicio ("PEDICURA COMPLETA RUSA SEMIPERMANENTE", "Pedicura completa rusa semipermanente.", 36);

const listaServicios = [servicio1, servicio2, servicio3, servicio4, servicio5, servicio6]
console.table(listaServicios)


function buscarServicio(){
  let buscar = prompt("Buscador de Servicio").toUpperCase();
  let buscador = listaServicios.filter(element => element.nombre.toUpperCase().includes(buscar))

  if (buscador.length > 0){
    alert(`Se consiguieron los siguientes resultados con ${buscar}`);
    console.table(buscador)
  }else{
    alert(`No existe coincidencia con ${buscar}`);
  }
}

function agregarServicio(){
  let nombreServicio = prompt("Ingrese el nombre del servicio").trim().toUpperCase();
  let descripcionServicio = prompt("Describa el servicio").trim();
  let precioServicio = parseFloat(prompt("Ingrese el precio del servicio"));

  if(isNaN(precioServicio) || nombreServicio === "" || descripcionServicio === ""){
    alert("Por favor ingrese datos válidos.")
    return;
  }
  
  let servicio = new Servicio(nombreServicio, descripcionServicio, precioServicio)

  if(listaServicios.some((e) => e.nombre === servicio.nombre)){
    alert("El servicio ingresado ya existe");
    return;
  }

  listaServicios.push(servicio);
}

function agendarCita(){
  let ingreso = confirm("Bienvenido al sistema de agendar citas! ¿Desea agendar una hora?");

let servicios = (servicio, dia, hora)=>{
  switch (servicio) {
    case 0:
      alert("Se agendo su cita para el dia "+dia+ " a las "+hora+ " para realizar el servicio de "+servicio1.nombre+ " ¡Gracias por confiar en nosotros!")
      break;
    case 1:
      alert("Se agendo su cita para el dia "+dia+ " a las "+hora+ " para realizar el servicio de "+servicio2.nombre+ " ¡Gracias por confiar en nosotros!")
      break;
    case 2:
      alert("Se agendo su cita para el dia "+dia+ " a las "+hora+ " para realizar el servicio de "+servicio3.nombre+ " ¡Gracias por confiar en nosotros!")
      break;
    case 3:
      alert("Se agendo su cita para el dia "+dia+ " a las "+hora+ " para realizar el servicio de "+servicio4.nombre+ " ¡Gracias por confiar en nosotros!")
      break;
    case 4:
      alert("Se agendo su cita para el dia "+dia+ " a las "+hora+ " para realizar el servicio de "+servicio5.nombre+ " ¡Gracias por confiar en nosotros!")
      break;
    case 5:
      alert("Se agendo su cita para el dia "+dia+ " a las "+hora+ " para realizar el servicio de "+servicio6.nombre+ " ¡Gracias por confiar en nosotros!")
      break;
    default:
      alert("Lo sentimos ingreso un dato no reconocido");
      break;
  }
}

let horario = (dia)=>{
  diaSemana = prompt("Escriba que horario prefiere, AM o PM").toUpperCase();
  if(diaSemana === "AM"){
    let hora = parseInt(prompt("Escriba su hora de preferencia 'solo el numero': 9 - 10 - 11 - 12"))
      if(hora >8 && hora <13){
        let servicio = parseInt(prompt("Escriba el numero de INDEX correspondiente al servicio: Ver servicios en consola"));
        servicios(servicio, dia, hora);
      } else {
      alert("El horario escojido no esta dentro del horario de atención");
    }
  } else if(diaSemana === "PM"){
    let hora = prompt("Escoja su hora: 14 - 15 - 16 - 17")
      if(hora >13 && hora <18){
        let servicio = parseInt(prompt("Escriba el numero de INDEX correspondiente al servicio: Ver servicios en consola"));
        servicios(servicio, dia, hora);
      } else {
        alert("El horario escojido no esta dentro del horario de atención");
      }
    } else {
      alert("Lo Siento ingresaste un valor no valido o fuera de nuestro horario de trabajo")
  }
}

while(ingreso == true){
  let dia = prompt("Escriba el dia de la semana que desea agendar").toUpperCase();
  switch (dia) {
    case "LUNES":
      horario(dia);
      break;
    case "MARTES":
      horario(dia);
      break;
    case "MIERCOLES":
      horario(dia);
      break;
    case "JUEVES":
      horario(dia);
      break;
    case "VIERNES":
      horario(dia);
      break;
    case "SABADO":
      horario(dia);
      break;
    case "DOMINGO":
      alert("Lo sentimos no trabajamos los Domingos");
      break;
    default:
      break;
  }
  break;
}

if(ingreso == false){
  alert("Gracias Por su Visita, regrese pronto :)")
}
}

