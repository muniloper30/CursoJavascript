const boton = document.getElementById("btn")

boton.addEventListener("click", () => {
    alert("Click en el botón")
})

$("#btn2").click(function() {
    console.log("Hola, estoy utilizando jQuery con el botón 2");
  });