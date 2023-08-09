const tituloH1 = document.querySelector("H1");
tituloH1.innerText =  "Mildred Chacón";









const menuBoton = document.querySelector("#menu-bton");
menuBoton.addEventListener("click", function(){
    document.body.classList.toggle("mobile-menu-active")

})



/* para cambiar de fondo **/

let toggle=document.getElementById("toggle");
let label_toggle=document.getElementById("label_toggle");
toggle.addEventListener("change", (evento)=>{
 let checked=evento.target.checked;
 document.body.classList.toggle("dark");
 
})


