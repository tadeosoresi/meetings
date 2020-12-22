$(function(){
    $("[data-toggle='tooltip']").tooltip();
    $('.carouselHNAS').carousel({
        interval: 2200
    });
    /* Trabajamos con los ID de los li del menu superior */
    let identificadores = ['#conteoIngreso', '#conteoContacto', '#conteoRegistro'];
    identificadores.forEach(function(id){
        $(document).on('show.bs.modal', id,  function(e){
            console.log('Se ha ingresado a ' + id)
        });
    });
  });

