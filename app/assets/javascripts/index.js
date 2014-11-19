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

//Hacer click en un día
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

