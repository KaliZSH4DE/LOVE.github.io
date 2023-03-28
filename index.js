let boton = document.querySelector("#btn2");
boton.addEventListener("mouseover", movimiento)
function movimiento(){
    if(boton.classList.contains("normal")){
        boton.classList.replace("normal", "move1");
    } else if (boton.classList.contains("move1")){
        boton.classList.replace("move1", "move2");
    } else if (boton.classList.contains("move2")){
        boton.classList.replace("move2", "move3");
    } else if (boton.classList.contains("move3")){
        boton.classList.replace("move3", "normal");
    }
}
const yesbtn = document.querySelector("#btn1");

yesbtn.addEventListener("click",function () {
    alert("Sabia que dirias que siii")
});