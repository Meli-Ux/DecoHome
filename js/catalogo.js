

const colorList = document.getElementById("colorList")
const selectColors = document.getElementById("colorSelect")
const colores = ["Satinado", "Mate", "Brillante"]

 
const fragment = document.createDocumentFragment()

for (const color of colores) {
    const selectItem = document.createElement("OPTION")
    selectItem.setAttribute("value", color.toLocaleLowerCase())
    selectItem.textContent = color
    fragment.appendChild(selectItem)

}

selectColors.appendChild(fragment);

// calcular metros2

document.getElementById("areas").value = 0;


// ----------------------------------------------

const btnSaludoPersonalizado = document.getElementById('confirmar');




btnSaludoPersonalizado.addEventListener('click', () => {
  
    let areas = Math.floor(document.getElementById('areas').value / 12 * 2);
    let colorSelect = document.getElementById('colorSelect').value;
    const setBackground = colorNumber.innerHTML;
 
    saludoPersonalizado(areas, colorSelect,setBackground )

})


// generador

const button = document.getElementById("button");
const section = document.querySelector("section");
const colorNumber = document.querySelector(".colorNumber");
const colorCard = document.querySelector(".colorCard");
const confirmar = document.getElementById("confirmar");




//Generador de colores
const generateRandomColor = (() => {
    const r = Math.floor(Math.random(0)  *256  );
    const g = Math.floor(Math.random(0) * 256  );
    const b = Math.floor(Math.random(0)  + 256  );
    const rgbColor = `rgb(${r},${g},${b})`;
    return rgbColor;
});

const setBackground = () => {
    const newColor = generateRandomColor();
    colorNumber.innerHTML = newColor;
    section.style.backgroundColor = newColor;
    colorCard.style.backgroundColor = newColor;
}

button.addEventListener("click", setBackground);



//------------------------------info seleccionados 
//-----------------------------Rendimiento seleccionado


confirmar.addEventListener('click', () => {
    let valor = document.getElementById('colorSelect').value;
    localStorage.setItem('colorSelect', valor);
    document.getElementById('colorSelect').value = "";
})
confirmar.addEventListener('click', () => {
    let metros = localStorage.getItem('colorSelect');
    document.getElementById('valorDesdeLS').innerHTML;

    let parrafo = document.createElement("span");
    parrafo.innerHTML = "<h5>Elementos seleccionado</h5>"+"Rendimiento"+ " " + metros;
    espacioSpan.appendChild(parrafo);

});


//------------------------color seleccionado
confirmar.addEventListener('click', () => {
    const setBackground = colorNumber.innerHTML;
    localStorage.setItem('colorNumber.innerHTML', setBackground);
    document.getElementById('colorNumber.innerHTML').value = "";
})
confirmar.addEventListener('click', () => {
    let metros = localStorage.getItem('colorNumber.innerHTML');
    document.getElementById('valorDesdeLS').innerHTML;

    let parrafo = document.createElement("span");
    parrafo.innerHTML = "<h5>Código color</h5>"+ metros;
    espacioSpan.appendChild(parrafo);

});

//-----------------------Litros a necesitar

confirmar.addEventListener('click', () => {
    let valor = document.getElementById('areas').value;
    localStorage.setItem('areas', valor);
    document.getElementById('areas').value = "";
})
confirmar.addEventListener('click', () => {
    let metros = Math.floor(localStorage.getItem('areas')/12*2);
    document.getElementById('valorDesdeLS').innerHTML;

    let parrafo = document.createElement("span");
    parrafo.innerHTML = "<h5>Litros de pintura</h5>" + metros + "L";
    espacioSpan.appendChild(parrafo);

});




localStorage.clear()    

// precios rendimientos



class Esmalte {
    constructor(nombre, precio) {
        this.nombre  = nombre.toUpperCase();
        this.precio  = parseFloat(precio);
        this.noDisponible = false;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
}
//Declaramos un array de productos para almacenar objetos

const Esmaltes = [];
Esmaltes.push(new Esmalte("brillante", "2850"));
Esmaltes.push(new Esmalte("satinado", "4570"));
Esmaltes.push(new Esmalte("mate", "3450"));
console.log(Esmaltes);


const Precios =[3.448+"$",5.529+"$",4.174+"$"];
Precios.sort()
console.log("Precios de Esmaltes Sinteticos"+" "+Precios);



for (const Esmalte of Esmaltes)
Esmalte.sumaIva();

//---------------------------




const rendimientoPinturas = [{ id: 1,  producto: "Satinado", precio: 5.529 },
                  {  id: 2,  producto: "Brillante", precio: 3.448 },
                  {  id: 3,  producto: "Mate"  , precio: 4.174}];


const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
for (const rendimientoPintura of rendimientoPinturas ) {
    guardarLocal(rendimientoPintura.id, JSON.stringify(rendimientoPintura));
}

guardarLocal("listaEsmaltesrendimientos", JSON.stringify(rendimientoPinturas));


let rendimientoPintura = localStorage.getItem('listaEsmaltesrendimientos');
let rendimientoPinturasParseados =JSON.parse( rendimientoPintura);



//--------------------------------------------------------

$( document ).ready(function() {

    console.log( "El DOM esta listo" );


    $('#button').on('click', ()=>{
        $('.imgPaleta').show();
    })

    $('#espacioSpan'). css({"padding": "05px", "backgroundColor": "#ffffff",   "box-shadow":"0  2px 2px 2px rgba(0, 0, 0, 0.2)","border-radius": "5px", "color": "#242424" });



    $('#button').on('click', ()=>{
      $(".paletaParrafo").hide();
    
    })

    $('#colorSelect').css({"border-radius": "5px", "backgroundColor": "#e2e2e2"});
    $('#areas').css({"border-radius": "5px", "backgroundColor": "#e2e2e2"});


});



$( document ).ready(function() {

const URLJ = "../js/data.json"

$("#confirmar").click(() => { 
$.getJSON(URLJ, function (respuesta, estado) {
    if(estado === "success"){
      let misData = respuesta;
      for (const dato of misData) {
        $("infConfirmar").prepend(`<div>
                                <h3>${dato.categoria}</h3>
                                <p> ${dato.rendimiento}</p>
                              
                            </div>`)
      }  
    }
    });
});
});





