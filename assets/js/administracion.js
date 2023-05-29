// Array para almacenar los objetos de datos
let dataArray = [];

// Función para verificar las credenciales y mostrar el formulario de datos
function verifyCredentials(event) {
  event.preventDefault();

  // Obtener los valores de usuario y contraseña ingresados
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  // Verificar las credenciales
  if (username === "admin" && password === "admin") {
    // Mostrar el formulario de datos
    document.getElementById("dataForm").style.display = "block";
  } else {
    alert("Credenciales incorrectas. Inténtalo de nuevo.");
  }
}

// Función para enviar los datos al array
function sendData(event) {
  event.preventDefault();

  // Obtener los valores de los inputs
  let input1 = document.getElementById("input1").value;
  let input2 = document.getElementById("input2").value;
  let input3 = document.getElementById("input3").value;

  // Crear un objeto con los datos ingresados
  let dataObject = {
    dato1: input1,
    dato2: input2,
    dato3: input3
  };

  // Agregar el objeto al array
  dataArray.push(dataObject);

  // Limpiar los inputs
  document.getElementById("input1").value = "";
  document.getElementById("input2").value = "";
  document.getElementById("input3").value = "";

  // Mostrar el array en la consola (para verificar)
  console.log(dataArray);
}

// Agregar eventos a los elementos del formulario
document.getElementById("loginForm").addEventListener("submit", verifyCredentials);
document.getElementById("sendButton").addEventListener("click", sendData);
