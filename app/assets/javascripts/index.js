var createEventAtMoment =function(moment, title) {
  var event = {
    "title" : title,
    "allDay": false,
    "start": moment,
    "end": moment.time('01:00:00'),
    "editable": true
  }
  $('#calendar').fullCalendar('renderEvent', event);
}

//Hacer click en un día
var dayClicked = function(date, jsEvent, view) {
  //displayEventCreationOptions()

  //Con esto de abajo se crea un nuevo evento donde pinchas:
  //createEventAtMoment(date, 'Evento de prueba');
  
  //Con esto al hacer click en un día, se muestra el formulario
  $('#myModal').modal('show') 
}



var createEventWithOptions = function() {
  //extraer datos para el evento de las opciones del overlay
  //createEventAtMoment(...)
}

var displayEventCreationOptions = function() {
  //mostrar overlay con opciones para crear entrada en calendario
}

$(document).ready(function() {

    // page is now ready, initialize the calendar...

    $('#calendar').fullCalendar({
      dayClick: dayClicked
        //header: {
        //left:   'title',
        //center: '',
        //right:  'today prev,next'
    //}
    })

});

$(document).ready(function()
  {
    //Aquí abajo llamas al id del boton de Guardar, que cuando hagas click
  $("#save").click(function (event, data) {
    console.log(event);
  createEventAtMoment($('#comida').val());
  });
});

