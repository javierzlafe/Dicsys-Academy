//ADDEVENLISTENER()

elemento.addEventListener(evento, funcion);



//MOUSEOVER: Este evento se activa cuando el mouse entra en un elemento.

// Seleccionar un elemento HTML por su ID
var elemento = document.getElementById("miElemento");


// Agregar un evento de mouseover al elemento utilizando addEventListener
elemento.addEventListener("mouseover", function() {
  console.log("El mouse ha entrado en el elemento!");
})







           // MOUSEOUT: Este evento se activa cuando el mouse sale de un elemento.

// Seleccionar un elemento HTML por su ID
var elemento = document.getElementById("miElemento");

// Agregar un evento de mouseout al elemento utilizando addEventListener
elemento.addEventListener("mouseout", function() {
  console.log("El mouse ha salido del elemento!");
});






        //MOUSEMOVE: Este evento se activa cuando el mouse se mueve dentro de un elemento.


// Seleccionar un elemento HTML por su ID
var elemento = document.getElementById("miElemento");

// Agregar un evento de mousemove al elemento utilizando addEventListener
elemento.addEventListener("mousemove", function(event) {
  console.log("El mouse estaen la posición x: " + event.clientX + " y en la posición y: " + event.clientY);
});


     
                              
                              
                                                          //EVENTOS DE TECLADO
                              
                              
                              
                              
                                                          //INPUT
                              
                              /* input: Este evento se activa cuando se cambia el valor de un elemento de entrada, si?
                              como un campo de texto o un área de texto, peude ser una entrada de teclado o una acción del mouse. 
                              Pero normalmente se usa con el teclado
                              El evento input se dispara inmediatamente después de que el valor cambia.
                              Código de ejemplo:
                              
                              
                              
                              
                              let inputField = document.getElementById('miCampoDeTexto');
                              inputField.addEventListener('input', function(event) {
                                console.log('Valor del campo de texto cambiado:', event.target.value);
                              });
                              
                              
                              input: es útil cuando necesitas realizar alguna acción mientras el usuario está ingresando información 
                              en un campo de texto o área de texto. 
                              Por ejemplo, podemos usarlo para mostrar una vista previa en tiempo real de lo que el usuario está escribiendo, 
                              para validar el contenido de un campo de texto a medida que el usuario lo escribe.
                              
                              
                              
                              
                                                          //CHANGE
                              
                              
                              change: Este evento también se activa cuando se cambia el valor de un elemento de entrada, 
                              pero a diferencia del evento input, el evento change se dispara después de que el usuario termino
                              de interactuar con el texto, por ejemplo, haciendo clic fuera del campo de texto.
                              Código de ejemplo:
                              
                              
                              let inputField = document.getElementById('miCampoDeTexto');
                              inputField.addEventListener('change', function(event) {
                                console.log('Valor del campo de texto cambiado:', event.target.value);
                              });
                              
                              
                              change: Este evento es útil cuando necesitas realizar alguna acción después de que el usuario haya terminado 
                              de ingresar información en un campo de texto o área de texto. 
                              Por ejemplo, puedes utilizarlo para validar el contenido de un campo de texto después de que el usuario 
                              haya terminado de escribir o para actualizar un campo de texto con el contenido ingresado 
                              antes de enviar el formulario.
                              
                              
                              
                              
                                                          //SUBMIT
                              
                              
                              submit: Este evento se activa cuando se envía un formulario, 
                              ya sea haciendo clic en un botón de enviar o presionando la tecla Enter en un campo de texto. 
                              Puedes utilizar este evento para realizar alguna acción antes de enviar el formulario.
                              Código de ejemplo:
                              
                              
                              let form = document.getElementById('miFormulario');
                              form.addEventListener('submit', function(event) {
                                event.preventDefault(); // Detener el envío del formulario
                                console.log('Formulario enviado');
                              });
                              
                              
                              En el ejemplo anterior, se utiliza el método preventDefault() para detener el envío del formulario 
                              y evitar que la página se recargue. 
                              Pueden agregar su propia lógica para manejar la información del formulario antes de enviarla al servidor.
                              
                              
                              
                              
                              submit: Este evento es útil cuando necesitas realizar alguna acción antes de enviar un formulario al servidor. 
                              Por ejemplo, podemos usarlo para validar la información ingresada por el usuario, 
                              realizar alguna operación adicional en los datos del formulario o enviar los datos mediante una llamada AJAX...
                              
                              
                               */
                              
                              
                              
                              
                              
                              
                              




                              //LIBRERIAS




<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>


/* Swal.fire('esto es un alerta por libreria') */

//aviso de accion


/*  Swal.fire(
    {title: 'The Internet?',
    text: 'That thing is still around?',
    icon:'question',
    timer: 2000,
    timerProgressBar: true}
  ) */
 
                              