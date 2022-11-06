/*Para practicar la encapsulación:
Crear clase Persona.
Crear variables las privadas edad, nombre y telefono de la clase Persona.
Crear gets y sets de cada propiedad.
Crear un objeto persona en el main.
Utiliza los gets y sets para darle valores a las propiedades edad, nombre y telefono, por último muéstralas por consola.
*/

/*
**

const objeto = {
    atributo1: 8,
    metodo1: () => {
        console.log("HolaMundo");
    },
};

*/ 
 // Encapsulamiento en Javascript: tarabajar una funcion construcatora para despues
 // crear instancias u objeto y tener unas porpiedades publicas que se puedan ver 
 // desde el exterior y privadas que no se puedan ver. 

var Persona = function (nombre, edad, telefono) {
    var n = nombre;
    var p = telefono;
    var e = edad;

    this.obtenerNombreCompleto = function () {
        return n + " " + p;
    };
    this.obtenerEdad = function () {
        return e;
    }
    this.cambiarEdad = function (nuevoEdad) {
        e = nuevaEdad;
    }
    this.obtenerTelefono = function() {
        return p;
    }
};


/*
var persona = function() {
    //Declaracion privada
    var edad = '33 annos';
    var nombre = 'Alan Matt';
    var telefono = '057 314 xxx xxxx'

    return {
        //Declaraciones Publicas
        mostrarDatos: function() {
            console.log('Su edad, nombre y telefono es:' + mostrarDatosPersona);
        }
    };
};

var secuencia = persona();


secuencia.mostrarDatosPersona();

secuencia.datos = '10';

secuencia.mostrarDatos();
*/