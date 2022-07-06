function validarFormulario() {
    let parametros = obtenerParametros()
    if (!largoValido(parametros["nombre"])) {
        alert("El Nombre es Obligatorio, recuerde que tiene que tener un largo Minimo de 3 caracteres")
    } else if (!rutValido(parametros["rut"])) {
        alert("el Rut no es valido, el rut debe ser entre 9 y 10 caracteres")


    } else if (!(emailValido(parametros["email"]) && largoValido(parametros["email"]))) {
        alert("El Email No Tiene el largo  Valido, Ademas debe contener @ y .")
    } else if (!telefonoValido(parametros["telefono"])) {

        alert("El Numero de Telefono no es Valido, debe comenzar con 9 y tener solo 9 caracteres")
    } else if (!largoValido(parametros["detalle"])) {
        alert("el largo del detalle no es valido")
    } else if (!parametros["terminosYCondiciones"]) {
        alert("Debe  Aceptar los Terminos y Condiciones")
    } else {
        MSG = "Todos los Datos Son Correctos !!!!! 💪🤩👍 \n \n";
        MSG += "Nombre:        " + parametros["nombre"] + "\n"
        MSG += "Rut:           " + parametros["rut"] + "\n"
        MSG += "Email:         " + parametros["email"] + "\n"
        MSG += "Telefono:      " + parametros["telefono"] + "\n"
        MSG += "Tipo Contacto: " + obtenerContacto(parametros) + "\n"
        MSG += "Pais:          " + parametros["pais"] + "\n"
        MSG += "Detalle:       " + parametros["detalle"] + "\n"

        alert(MSG)
    }

}
function obtenerContacto(pr) {
    let contacto1 = pr["contacto1"];
    let contacto2 = pr["contacto2"];
    let contacto3 = pr["contacto3"];
    if (contacto1) {
        return "Ventas";
    } else if (contacto2) {
        return " Servicio al cliente"
    } else if (contacto3) {
        return "Mejoras / reclamos"
    } else {
        return "sin informacion"
    }
}
function rutValido(rut) {
    if (rut.length == 0) {
        alert("El Rut es Obligatorio");
        return false
    }
    let largoMinimo = 9;
    let largoMaximo = 10;

    let largo = rut.length;
    let posicionGuion = 2// la posicion -2 desde el final del string
    let caracter = rut[largo - posicionGuion];
    let contieneGuion = caracter == '-';

    if (
        rut.length >= largoMinimo &&
        rut.length <= largoMaximo &&
        contieneGuion
    ) {
        return true;
    } else {
        return false;
    }
}
function emailValido(email) {
    if (email.includes("@") && email.includes(".")) {
        return true;
    } else {
        return false;
    }
}


function telefonoValido(telefono) {
    if (telefono.length == 0) {
        alert("El Campo Telefono es Obligatorio")
        return false;
    }
    let comienzaConNueve = telefono[0] = "9"
    let largoCorrecto = telefono.length == 9;
    if (
        comienzaConNueve &&
        largoCorrecto
    ) {
        return true;
    } else {
        return false;
    }
}



function largoValido(str) {
    let largoRequerido = 3;
    if (str.length >= largoRequerido) {
        return true;
    } else {
        return false;
    }
}

function obtenerParametros() {
    let nombre = document.formulario.nombre.value
    let rut = document.formulario.rut.value
    let email = document.formulario.email.value
    let telefono = document.formulario.telefono.value
    let contacto1 = document.formulario.contacto1.checked
    let contacto2 = document.formulario.contacto2.checked
    let contacto3 = document.formulario.contacto3.checked
    let pais = document.formulario.pais.value
    let detalle = document.formulario.detalle.value
    let terminosYCondiciones = document.formulario.terminos.checked
    let pr = {
        nombre,
        rut,
        email,
        telefono,
        contacto1,
        contacto2,
        contacto3,
        pais,
        detalle,
        terminosYCondiciones

    }
    return pr;
}
