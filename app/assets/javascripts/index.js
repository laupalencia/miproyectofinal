//Aquí se inicia el calendario
var initCalendar = function() {
  $('#calendar').fullCalendar({
    dayClick: dayClicked
      //header: {
      //left:   'title',
      //center: '',
      //right:  'today prev,next'
  //}
  });
};

//Aquí se crea el evento
var createEventAtMoment =function(title) {
  var event = {
    "title" : title,
    "allDay": false,
    "start": date,
    "end": date,
    "editable": true
  }
  $('#calendar').fullCalendar('renderEvent', event);
};

//Clickar en un día
var dayClicked = function(date, jsEvent, view) {
  //displayEventCreationOptions()

  //Con esto de abajo se crea un nuevo evento donde pinchas:
  //createEventAtMoment(date, 'Evento de prueba');
  $('#myModal').modal('show');
  $('#myModal').on('show', function(title) {
    alert(date);
    var event = {
      "title" : "title",
      "allDay": false,
      "start": date,
      "end": date,
      "editable": true
    }
    $('#calendar').fullCalendar('renderEvent', event);
  });
};


var createEventWithOptions = function() {
  //extraer datos para el evento de las opciones del overlay
  //createEventAtMoment(...)
};

var displayEventCreationOptions = function() {
  //mostrar overlay con opciones para crear entrada en calendario
};

$(document).ready(function() {
    // page is now ready, initialize the calendar...
    initCalendar();
});

$(document).ready(function()
  {
    //Aquí abajo llamas al id del boton de Guardar, que cuando hagas click
  $("#save").click(function (event, data) {
    console.log(event);
    var title = $('#comida').val();
    createEventAtMoment(title);
  });
});



////////////////////
//Lista de la compra
////////////////////
var mydiv = document.getElementById('addinput');
mydiv.onclick = function(event){
   //Variables que nos recoge el valor de los inputs
  var producto = document.getElementById('producto').value;
  var precio = document.getElementById('precio').value;
  var lugar = document.getElementById('lugar').value;

  var h1 = document.createElement("h1");
  var h2 = document.createElement("h2");
  var h3 = document.createElement("h3");
 
  //Variables que crea un texto de lo que hay en cada input
  var textoProducto = document.createTextNode(producto);
  var textoPrecio = document.createTextNode(precio);
  var textoLugar = document.createTextNode(lugar);
  //
  var myli = document.createElement('li');
  var mylist = document.getElementById('list');
  //
  h1.appendChild(textoProducto);
  h2.appendChild(textoPrecio);
  h3.appendChild(textoLugar);
  //
  myli.appendChild(h1);
  myli.appendChild(h2);
  myli.appendChild(h3);

  mylist.appendChild(myli);
  //
 }