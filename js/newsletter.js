
$(document).ready(function () {

    console.log("El DOM esta listo");

    $("#inputSubmit").click(function(){


        let valor = document.getElementById('email').value;
        localStorage.setItem('correo', valor);
        document.getElementById('email').value = "";
    
    
     let band = true;
    
    function campoVacio(cadena){
        
    if (cadena == ""){
    return true;
    }else {
        return false;
    }
    }
        if(campoVacio(valor)){
      Swal.fire("Ingrese el dato correctamente");
    }else {
        band = false;
        
    }


 });

 

}); 
