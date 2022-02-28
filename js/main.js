$(document).ready(function () {
    console.log("El DOM esta listo");


    class CategoriaDeco {
        constructor(nombre, rendimientos) {
            this.nombre = nombre.toUpperCase();
            this.rendimientos = rendimientos;
            this.noDisponible = false;
        }
    }
    //Declarams un array de productos para almacenar objetos
    const CategotiasDeco = [];
    CategotiasDeco.push(new CategoriaDeco("Pintura Interior", "Esmalte Sintetico"));
    CategotiasDeco.push(new CategoriaDeco("Pintura Exterior", "Esmalte Calidad Alta"));
    CategotiasDeco.push(new CategoriaDeco("Aerosoles", "Calidad Alta"));
    CategotiasDeco.push(new CategoriaDeco("Accesorios", "Estandares"));
    console.log(CategotiasDeco);



    $(function () {
        $("#categoriaPinturas").hover(function () {
            $("#miSpan").text("¡ SALE");
        })
    })

    $(function () {
        $("#categoriaDecoracion").hover(function () {
            $("#miSpan2").text("Descuento 15%");
        })
    })


//Botones creados 
    

 $('.btnCat1'). css({"border-radius": "10px", "backgroundColor": "#EBFF7C", "color": "#242424", "font-weight": "bold","font-size": "12px"});
 

$('.btnCat'). css({"border-radius": "10px", "backgroundColor": "#EBFF7C", "color": "#242424", "font-size": "14px" , "padding":" 5px 10px" , "border":"none"});
    
  
//sweetAlerts

 $(".btnDestacados").click(function(){

    Swal.fire({
        imageUrl: 'imagenes/albaMateVerde.png',
        imageHeight: 200,
        title: 'Impermeabilizante',
        html: 'Producto de calidad para el mantenimiento y solución del inconveniente causado en zonas en contacto con el agua, <b>Desde $2500<b>',
        footer: '<b>3 Cuotas sin interes</b>',
        confirmButtonText:'Continuar',
        confirmButtonColor: '#EBFF7C',
    })
  
 });

 
  

    $(function () {
        $(".contenedorImagenDestacados").hover(function () {
            $('.contenedorImagenDestacados').css('background-image', 'url(imagenes/decoDestacados2.png)')
        })
    })


    $(function () {
        $(".contenedorImagenDestacados2").hover(function () {
            $('.contenedorImagenDestacados2').css('background-image', 'url(imagenes/albaMateVerde.png)')
        })
    })

    $(function () {
        $(".contenedorImagenDestacados3").hover(function () {
            $('.contenedorImagenDestacados3').css('background-image', 'url(imagenes/decoDestacados3.png)')
        })
    })


  









}); // aca va todo dentro del dom