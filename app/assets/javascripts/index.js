//Aquí se inicia el calendario
var initCalendar = function() {
  $("#calendar").fullCalendar({
    dayClick: dayClicked,
    eventClick: eventClicked,
    timeFormat: ''  //con esto se oculta la hora en el calendario
  });
};

var eventClicked = function(calEvent, jsEvent, view) {
  //alert('Event: ' + calEvent.title);
  //alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
  //alert('View: ' + view.name);

  //Estoy cambiando esto:
  document.calendarEvent.title = $("#").val();

}

//Aquí se crea el evento
var createEvent =function(event) {
  $("#calendar").fullCalendar("renderEvent", event);
};

//Clickar en un día
var dayClicked = function(date, jsEvent, view) {
  //displayEventCreationOptions()

  //Con esto de abajo se crea un nuevo evento donde pinchas:
  //createEventAtMoment(date, "Evento de prueba");
  $("#myModal").modal("show");
  document.calendarEvent = {
      "allDay": false,
      "start": date,
      "end": date,
      "editable": true
  };
};

$(document).ready(function() {
    // page is now ready, initialize the calendar...
    initCalendar();
});

var resetAndHideModal = function() {
  $("#comida").val("");
  $("#myModal").modal("hide");
}

$(document).ready(function()
  {
    //Aquí abajo llamas al id del boton de Guardar, que cuando hagas click
  $("#save").click(function (event) {
    document.calendarEvent.title = $("#comida").val();
    var moment = document.calendarEvent.start;

    var meal = $("#meal").val();

    if (meal == 0)
    {
      document.calendarEvent.start = moment.time("09:00:00");
      document.calendarEvent.start = moment.time("10:00:00");
      document.calendarEvent.backgroundColor = "#8EBBCA";
    }
    else if (meal == 1)
    {
      document.calendarEvent.start = moment.time("13:00:00");
      document.calendarEvent.start = moment.time("14:00:00");
      document.calendarEvent.backgroundColor = "#6193A4";
    }
    else {
      document.calendarEvent.start = moment.time("21:00:00");
      document.calendarEvent.start = moment.time("22:00:00");
      document.calendarEvent.backgroundColor = "#477584";
    }

    createEvent(document.calendarEvent);
    resetAndHideModal();
  });
});

////////////////////
//Lista de la compra
////////////////////
var mydiv = document.getElementById("addinput");
mydiv.onclick = function(){
   //Variables que nos recoge el valor de los inputs
  var producto = document.getElementById("producto").value;
  var precio = document.getElementById("precio").value;
  var lugar = document.getElementById("lugar").value;

  var h1 = document.createElement("h3");
  var h2 = document.createElement("h4");
  var h3 = document.createElement("h5");
 
  //Variables que crea un texto de lo que hay en cada input
  var textoProducto = document.createTextNode(producto);
  var textoPrecio = document.createTextNode(precio);
  var textoLugar = document.createTextNode(lugar);
  //
  var myli = document.createElement("li");
  var mylist = document.getElementById("list");
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
/////////////////////
//Calculo global
////////////////////

var mycalc = document.getElementById("addcalc");
mycalc.onclick = function(){
  document.getElementById("calculoglobal").style.display = "block";
  }