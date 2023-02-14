const mensaje = document.getElementById("TextMensaje");
const mensajeEn = document.getElementById("resultado");
const encriptar = document.getElementById("encriptar");
const desencriptar = document.getElementById("desencriptar");
const eliminar = document.getElementById("eliminar");
const copiar = document.getElementById("copiar");
const imagen = document.getElementById("img-espera");
const contenedor =document.getElementById("contenedor-resultado")

/**
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" 
*/
function redimencion(){
    imagen.style.display="none";  
    document.querySelectorAll("#text-active").forEach(element=>{
        element.style.display="none";
    });  
    mensajeEn.classList.remove("textarea");
    if(document.documentElement.clientWidth<= 1000){
        contenedor.style.height="270px";
        copiar.style.height="110px";
    }
    
}


encriptar.addEventListener("click",()=>{
    let mensajeNew = mensaje.value;
    let letras=[];
    for(let i=0; i<mensajeNew.length; i++){
        switch(mensajeNew[i]){
            case "a":
                letras.push("ai");
                break;
            case "e":
                letras.push("enter");              
                break;
            case "i":
                letras.push("imes");
                break;
            case "o":
                letras.push("ober");
                break;
            case "u":
                letras.push("ufat");
                break;
            default:
                letras.push(mensajeNew[i]);
                
        }
    }
    redimencion();
    let frase = letras.join("");
    mensajeEn.innerHTML = frase;
    copiar.classList="copia";
});

desencriptar.addEventListener("click",()=>{
    let mensajeNew = mensaje.value;
    let palabras=[];
    for(let i=0; i<mensajeNew.length; i++){
        switch(mensajeNew[i]){
            case "a":
                if(mensajeNew[i+1]=="i"){
                  palabras.push("a");  
                }
                i=i+1;
                break;
            case "e":
                if(mensajeNew[i+1]=="n"){
                    palabras.push("e");  
                  }
                  i=i+4;
                break;
            case "i":
                if(mensajeNew[i+1]=="m"){
                    palabras.push("i");  
                  }
                i=i+3; 
                break;
            case "o":
                if(mensajeNew[i+1]=="b"){
                    palabras.push("o");  
                  }
                i=i+3;
                break;
            case "u":
                if(mensajeNew[i+1]=="f"){
                    palabras.push("u");  
                  }
                i=i+3;
                break;
            default:
                palabras.push(mensajeNew[i]);
                break;
        }
    }
    redimencion(); 
    let frase = palabras.join("");
    mensajeEn.innerHTML = frase;
    copiar.classList="copia";
});

copiar.addEventListener("click",()=>{
    mensajeEn.select();
    mensajeEn.setSelectionRange(0,9999);
    document.execCommand("copy");
    mensaje.value="";
    mensaje.focus();
});

eliminar.addEventListener("click",()=>{
    mensaje.value="";
    mensaje.focus();
});