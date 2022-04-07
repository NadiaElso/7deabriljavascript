console.log("Hola mundo");
let botonsaludar = document.getElementById("saludar");
function saludarusuario() {
  console.log("Hola usuario");
}
botonsaludar.addEventListener("click", saludarusuario);
