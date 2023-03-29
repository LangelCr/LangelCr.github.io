function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var mensaje = document.getElementById("mensaje").value;

    if (nombre === "" || correo === "" || mensaje === "") {
        alert("Todos los campos son obligatorios.");
        return false;
    } else {
        alert("El formulario ha sido enviado correctamente.");
        return true;
    }
}
