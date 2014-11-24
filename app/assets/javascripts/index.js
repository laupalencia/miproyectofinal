//Aquí se inicia el calendario
var initCalendar = function() {
  $("#calendar").fullCalendar({
    dayClick: dayClicked,
    eventClick: eventClicked,
    timeFormat: ''  //con esto se oculta la hora en el calendario
  });
};

//Para que cuando hagas click en el evento salga el modal
var eventClicked = function(calEvent, jsEvent, view) {
  //Borrar evento del calendario haciendo click en el evento
   $('#calendar').fullCalendar('removeEvents', calEvent.id);
  
  //Ahora quiero que después de borrarlo aparezca el modal

  $("#myModal").modal("show");
  //document.calendarEvent = calEvent;
  //$("#comida").val(calEvent.title);
  //if (calEvent.start.time ==) {
    //eliges opción del desp`legable
  //} 
}

//Para crear un evento
var createEvent =function(event) {
  $("#calendar").fullCalendar("renderEvent", event);
};

//Clickas en un día
var dayClicked = function(date, jsEvent, view) {
  //Muestras el modal y creas un evento
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

//Para que esconda el modal y borre los valores antes puestos:
var resetAndHideModal = function() {
  $("#comida").val("");
  $("#myModal").modal("hide");
}
//Para que cuando des al botón Guardar, recoja el valor de los inputs
$(document).ready(function()
  {
    
  $("#save").click(function (event) {
    document.calendarEvent.title = $("#comida").val();
    var moment = document.calendarEvent.start;

    var meal = $("#meal").val();

    if (meal == 0)
    {
      document.calendarEvent.start = moment.time("09:00:00");
      //document.calendarEvent.start = moment.time("10:00:00");
      document.calendarEvent.backgroundColor = "#8EBBCA";
    }
    else if (meal == 1)
    {
      document.calendarEvent.start = moment.time("13:00:00");
      //document.calendarEvent.start = moment.time("14:00:00");
      document.calendarEvent.backgroundColor = "#6193A4";
    }
    else {
      document.calendarEvent.start = moment.time("21:00:00");
      //document.calendarEvent.start = moment.time("22:00:00");
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

  var h3 = document.createElement("h3");
  var h4 = document.createElement("h4");
  h4.setAttribute('class', 'precios');
  var h5 = document.createElement("h5");
 
  //Variables que crea un texto de lo que hay en cada input
  var textoProducto = document.createTextNode(producto);
  var textoPrecio = document.createTextNode(precio);
  var textoLugar = document.createTextNode(lugar);
  //
  var myli = document.createElement("li");
  var mylist = document.getElementById("list");
  //
  h3.appendChild(textoProducto);
  h4.appendChild(textoPrecio);
  h5.appendChild(textoLugar);
  //
  myli.appendChild(h3);
  myli.appendChild(h4);
  myli.appendChild(h5);

  mylist.appendChild(myli);
  //
 }
/////////////////////
//Calculo global
/////////////////////

var mycalc = document.getElementById("addcalc");
mycalc.onclick = function(){

  var suma = document.getElementsByClassName("precios");
  sum = 0;

  for (i=0; i<suma.length; i++){
    sum += parseInt(suma[i].textContent);
        console.log(sum);
  }

  var bloque15=document.getElementById('calculoglobal');
  bloque15.innerHTML = "Tu suma es" + sum;
  document.getElementById("calculoglobal").style.display = "block";


  
}