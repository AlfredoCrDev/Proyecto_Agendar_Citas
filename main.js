let ingreso = confirm("Bienvenido al sistema de agendar citas! ¿Desea agendar una hora?")

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

// if (ingreso == true){
//   let dia = prompt("Escriba el dia de la semana que desea agendar").toUpperCase();
//   switch (dia) {
//     case "LUNES":
//       let horario = prompt("Escriba que horario prefiere, am o pm").toUpperCase();
//       if(horario == AM){
//         let horaAm = parseInt(prompt("tenemos hora disponible desde las 9 hasta las 11"))
//       }
//       break;
//     case "MARTES":

//       break;
//     case "MIERCOLES":

//       break;
//     case "JUEVES":

//       break;
//     case "VIERNES":

//       break;
//     case "SABADO":

//       break;
//     case "DOMINGO":

//       break;
//     default:
//       break;
//   }
// }