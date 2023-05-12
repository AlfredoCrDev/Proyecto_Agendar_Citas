class Servicio{
  constructor(id, nombre, descripcion, precio){
    this.id = id,
    this.nombre = nombre,
    this.descripcion = descripcion,
    this.precio = precio
  }
}
let servicio1 = new Servicio (1, "PACK LIFTING + TINTE DE PESTAÑAS", "WOW🌟 la pareja perfecta es sinónimo de un look perfecto Lifting + Tinte. Servicio ideal para pestañas cortas, mediana y largas. ¡SÚPER PRECIO!", 40);
let servicio2 = new Servicio (2, "Lifting de pestañas", "¡Eleva tus pestañas al infinito hasta por 8 semanas! Servicio ideal para pestañas cortas, mediana y largas.", 37);
let servicio3 = new Servicio (3, "Depilación de Cejas con pinzas", "Depilación de Cejas utilizando pinzas.", 12);
let servicio4 = new Servicio (4, "Depilación de Cejas con hilo", "Depilación de Cejas utilizando la tecnica del hilo.", 17);
let servicio5 = new Servicio (5, "Microblading", "Las cejas que siempre soñaste se hacen realidad gracias al Microblading, tecnica de hiperrealismo que simula los pelitos naturales de las cejas para conseguir unas cejas perfectas por mucho tiempo.", 159);
let servicio6 = new Servicio (6, "Manicura rusa Completa Permanente", "¡MAYOR LIMPIEZA Y DURABILIDAD ! con esta innovadora tecnica rusa tendras unas uñas mas limpias, fuertes y duraderas.( Limpieza profunda + nivelacion de uña + base rubber de microfibras y vitaminas + esmaltado).", 76);
let servicio7 = new Servicio (7, "Pedicura completa rusa semipermanente", "Pedicura completa rusa semipermanente.", 36);

const listaServicios = [servicio1, servicio2, servicio3, servicio4, servicio5, servicio6]
console.table(listaServicios)




// let ingreso = confirm("Bienvenido al sistema de agendar citas! ¿Desea agendar una hora?")

let servicios = (servicio, dia, hora)=>{
  switch (servicio) {
    case 1:
      let cejas = "SACAR CEJAS"
      alert("Se agendo su cita para el dia "+dia+ " a las "+hora+ " para realizar el servicio de "+cejas+ " ¡Gracias por confiar en nosotros!")
      break;
    case 2:
      let pestanas = "COLOCAR PESTAÑAS"
      alert("Se agendo su cita para el dia "+dia+ " a las "+hora+ " para realizar el servicio de "+pestanas+ " ¡Gracias por confiar en nosotros!")
      break;
    case 3:
      let Lifting = "LIFTING DE PESTAÑAS"
      alert("Se agendo su cita para el dia "+dia+ " a las "+hora+ " para realizar el servicio de "+Lifting+ " ¡Gracias por confiar en nosotros!")
      break;
    default:
      alert("Lo sentimos ingreso un dato no reconocido");
      break;
  }
}

let horario = (dia)=>{
  diaSemana = prompt("Escriba que horario prefiere, am o pm").toUpperCase();
  if(diaSemana === "AM"){
    let hora = parseInt(prompt("Escriba su hora de preferencia 'solo el numero': 9 - 10 - 11 - 12"))
      if(hora >8 && hora <13){
        let servicio = parseInt(prompt("Escriba el numero correspondiente al servicio: 1-Sacar cejas, 2-Colocar Pestañas, 3-Lifting"));
        servicios(servicio, dia, hora);
      } else {
      alert("El horario escojido no esta dentro del horario de atención");
    }
  } else if(diaSemana === "PM"){
    let hora = prompt("Escoja su hora: 14 - 15 - 16 - 17")
      if(hora >13 && hora <18){
        let servicio = parseInt(prompt("Escriba el numero correspondiente al servicio: 1-Sacar cejas, 2-Colocar Pestañas, 3-Lifting"));
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