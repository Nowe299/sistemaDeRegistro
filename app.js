//Imprime un mensaje de bienvenida en la consola
console.log("Sistema de EBAC de Registro de Alumnos")

//Registro de todos los alumnos de esta institucion
var registro = [
    
    //Lista de los alumnos por meido de objetos
    {nombreAlumno: "Noe Martin" , edadAlumno: "21", zonaRecidencial: "CDMX", nombrePrograma: "desarrollador Front End de Cero a Pro", emailAlumno: "nowe277@gmail.com"},
    {nombreAlumno: "Eduardo Martin" , edadAlumno: "16", zonaRecidencial: "Edo Mex", nombrePrograma: "Desarrollador UX", emailAlumno: "eduardo.99@gmail.com"},
    {nombreAlumno: "Alma Agustina" , edadAlumno: "18", zonaRecidencial: "Tamaulipas", nombrePrograma: "Diseñador de Interiores", emailAlumno: "ghe69304@zbock.com"},
    {nombreAlumno: "Hipolito Domingo" , edadAlumno: "26", zonaRecidencial: "Taxco", nombrePrograma: "Social Media Management", emailAlumno: "jak41610@zslsz.com"},
    {nombreAlumno: "Hajar Egea" , edadAlumno: "23", zonaRecidencial: "Campeche", nombrePrograma: "Ilustración Profesional ", emailAlumno: "jak41610@zslsz.com"},
];

//Con esta funcion el usuario podra agregar nuevos alumnos
function agregarAlumno(){
    //Aqui se pondra toda la inforamcion del nuevo alumno para posteriormente ser agregada a la base de datos
    var nombreAlumno = prompt("Ingresa el nombre del nuevo alumno");
    var zonaRecidencial = prompt("Ingresa la residencia del alumno");
    var edadAlumno = prompt("Ingresa la edad del alumno");
    var nombrePrograma = prompt("Ingresa el porgrama que desea estudiar ");
    var emailAlumno = prompt("Ingresa el correo electrónico del alumno");

    var nuevoAlumno= {nombreAlumno: nombreAlumno, edadAlumno: edadAlumno, zonaRecidencial: zonaRecidencial, nombrePrograma: nombrePrograma, emailAlumno: emailAlumno};
    
    //Esta line de codigo introduce la informacion del nuevo alumno de manera temporal mientras no se cierre la pestaña o se recarge
    registro.push(nuevoAlumno);
}

//Con esta funcion el usuario podra consultar los Registros de los alumnos en la base de datos y alumnos agregados con la funcion agregarAlumnos
function consultarRegistros(){
    //Aqui se repetira el proceso de escribir la informacion de la consola hasta que el i (indice) lleegue a la cantidad de alumnos que hay, aunque sean a gregados mas
    for(var i = 0; i < registro.length; i++){

        //aqui se escribira en la consola toda la informacion en la base de datos en orden 
        console.log ("Nombre: " + registro [i].nombreAlumno)
        console.log ("Edad: " + registro [i].edadAlumno)
        console.log ("Zona Recidencial: " + registro [i].zonaRecidencial)
        console.log ("Nombre del programa: " + registro [i].nombrePrograma)
        console.log ("Correo del alumno: " + registro [i].emailAlumno)
    };
}

//Funcion par poder generar un arreglo que no contenga la informacion del alumno deseado
function eliminarAlumno (){
    //solicita al usuario el nombre del alumno que desea eliminar
    var nombreAEliminar = prompt("Ingresa el nombre del alumno que deseas eliminar");

    //Utiliza la funcion filter para poder hacer una alteracion del registro de alumnos para eliminar un alumno en concreto
    registro = registro.filter(alumno => alumno.nombreAlumno !== nombreAEliminar);
}

//permite repetir el menu las veces que sea necesario
do{
    //Alertas del menu para que se puedan alterar las listas de los alumnos.
var opcion = prompt("seleccione una opcion: \n1. agregar registro \n2.consultar resgistro de los nuevos alumnos \n3. Eliminar resgistro \n4.Salir");

if (opcion === "1") {
    alert("Agregar un nuevo alumno nuevo.");
    agregarAlumno();
} else if (opcion === "2") {
    alert("Consultar registros.");
    consultarRegistros();
} else if (opcion === "3") {
    alert("Eliminar resgistro de alumno.");
    eliminarAlumno();
} else if (opcion === "4") {
    alert("Salir del sistema.");
} else {
    alert("Elegiste una opción inválida, elige otra.");
}
//Pregunta si quiere repetir el ciclo para poder hacer otra acccion
var continuar = prompt ("¿Deseas hacer otra opcción? (s/n)")
} while(continuar === "s");