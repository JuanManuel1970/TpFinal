const form = document.getElementById('formulario');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  console.log(Object.fromEntries(formData.entries()));
  alert('Gracias por utilizar nuestro servicio!');
  form.reset();
});


//Generador de formulario//
document.getElementById("generar-pdf").addEventListener("click", function() {
  // crea un nuevo documento PDF

  var doc = new jsPDF();

  

  
  var producto = document.getElementById("producto").value;
  var cantidad = document.getElementById("cantidad").value;
  var nombre = document.getElementById("nombre").value;
  var email = document.getElementById("email").value;
  var telefono = document.getElementById("telefono").value;
  var direccion = document.getElementById("direccion").value;
  

  
  doc.text("Datos para su presupuesto :", 50, 10)
  doc.text("Producto: " + producto, 10, 20 );
  doc.text("Cantidad: " + cantidad, 10, 30 );
  doc.text("Nombre: " + nombre, 10, 40);
  doc.text("Email: " + email, 10, 50 );
  doc.text("Telefono: " + telefono, 10, 60 );
  doc.text("Direccion: " + direccion, 10, 70 );
  doc.text("Muchas gracias por confiar en nosotros !!!", 50, 150);
  doc.text("<<<<<<  NAUTICA NEUQUEN  >>>>>>", 50, 180);
  doc.text("escuelanautica@gmail.com  tel:297-456783", 50, 210);
 


 
  // guarda el archivo PDF
  doc.save("formulario.pdf");
});