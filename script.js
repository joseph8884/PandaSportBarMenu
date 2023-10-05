let myEmbed = document.getElementById("embed");
let body = document.getElementsByTagName("body")[0];
let header = document.getElementsByTagName("header")[0];
let menu = 0


function cambiarhamburg(){
    header = document.getElementsByTagName("header")[0];
    cerrar = document.getElementById("cerrar");
    if (menu == 1){
        header.style.width = "0%"
        cerrar.style.width = "0%"
        menu = 0
    }
    else{
        header.style.width = "50vw"
        cerrar.style.width = "100%"
        menu = 1
    }
}