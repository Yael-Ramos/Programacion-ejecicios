function procesarFormulario() {

const form = document.getElementById("formularioCreacion");
const resultado = document.getElementById("resultado");

/*variables a obtener*/
const nombre = form.nombre.value.trim();
const correo = form.email.value.trim();

if (!nombre || !correo) {
    resultado.textContent = "Por favor rellenen los campos.";
    resultado.style.color = "red";
    resultado.style.display = "block";
    return;
}

/*Se muestran resultados dentro de la misma pagina*/
resultado.textContent = `Nombre: ${nombre} | Email: ${correo}`;
resultado.style.color = "#004a99";
resultado.style.display = 'block';


}