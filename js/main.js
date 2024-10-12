$(document).ready(function(){    
    $("#form-consulta").on("submit", function(event) {
        event.preventDefault();       
        Swal.fire({
            title: "Gracias por enviar su consulta",
            text: "En breve nos pondremos en contacto.",            
            icon: "success"
        });        
        setTimeout(function() {
            window.location.reload()
          }, 3000);
        
        
    });
});