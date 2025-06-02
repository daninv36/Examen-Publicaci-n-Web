//  Burguer

// Variables burguer

let burguer = document.getElementById("burguer");
let abrirBurguer = document.getElementById("abrirBurguer");

abrirBurguer.addEventListener('click', function(){
    burguer.style.display = 'flex';
});

// Se cierra al pulsar la ventana

window.addEventListener('click', (event)=>{
    if(event.target == burguer){
        burguer.style.display = 'none';
    }
});