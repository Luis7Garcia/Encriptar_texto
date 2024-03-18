
//Esta función encripta el texto ingresado
const btnEncriptar = () =>{

    //Variables
    let texto = document.getElementById("texto").value;
    let mensajeInformativo = document.getElementById("mensaje-informativo");
    let parrafoInstrucciones = document.getElementById("parrafo-instrucciones");
    let muñeco = document.getElementById("muñeco");
    let acento = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:`;,\u0300-\u036f']/g, "");
    

    //letras remplazadas
    let textoCifrado = texto
        .replace(/e/gi, "enter") 
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat")

    //sentencia que verifica si hay letras en el cuadro de texto
    if(texto != 0){

        //verifica si hay letras mayúsculas 
        if(texto !== texto.toLowerCase()){
            swal.fire({title: "No debe ingresar letras mayúsculas", icon: "warning"});

        //Verifica si hay acentos
        }else if(texto !== acento){
            swal.fire({title: "No debe ingresar ningún acento", icon: "warning"});

        //Muestra el texto encriptado y algunos mensajes de información
         } else if(texto === texto.toLowerCase()){
        document.getElementById("texto").value = textoCifrado;
        mensajeInformativo.textContent = "Genial el texto se encripto correctamente";
        parrafoInstrucciones.textContent = "Mira el mensaje encriptado en el cuadro de texto";
        muñeco.src = "./imagenes/encriptar.png";
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Encriptado",
            showConfirmButton: false,
            timer: 1000
          });
        }

        //Habilita botón desencriptar
        document.querySelector('.boton-desencriptar').removeAttribute("disabled");

        //Deshabilita botón encriptar
        document.querySelector('.boton-encriptar').disabled = true;

    //Se muestra en caso que el campo de texto este vacío
    }else {
        muñeco.src = "./imagenes/Muñeco.png"
        mensajeInformativo.textContent = "Ningún mensaje fue encontrado";
        parrafoInstrucciones.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal.fire({title: "Ingresa una palabra o un párrafo para encriptar o desencriptar", icon: "warning"});
    }
}

//Esta función desencripta el texto que se encuentre encriptado
const btnDesencriptar = () =>{

    //Variables
    let texto = document.getElementById("texto").value;
    let mensajeInformativo = document.getElementById("mensaje-informativo");
    let parrafoInstrucciones = document.getElementById("parrafo-instrucciones");
    let muñeco = document.getElementById("muñeco");
    let acento = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:`;,\u0300-\u036f']/g, "");

    //Letras remplazadas
    let textoCifrado = texto
    .replace(/ufat/gi, "u")
    .replace(/ober/gi, "o")
    .replace(/ai/gi, "a")
    .replace(/imes/gi, "i")
    .replace(/enter/gi, "e")
    

     //sentencia que verifica si hay letras en el cuadro de texto
    if(texto != 0){

        //verifica si hay letras mayúsculas 
        if(texto !== texto.toLowerCase()){
            swal.fire({title: "No debe ingresar letras mayúsculas", icon: "warning"});

        //Verifica si hay acentos
        }else if(texto !== acento){
            swal.fire({title: "No debe ingresar ningún acento", icon: "warning"});

        //Muestra el texto desencriptado y algunos mensajes de información
         } else if (texto === texto.toLowerCase()){
        document.getElementById("texto").value = textoCifrado;
        mensajeInformativo.textContent = "El texto se desencripto correctamente";
        parrafoInstrucciones.textContent = "Mira el mensaje desencriptado en el cuadro de texto";
        muñeco.src = "./imagenes/desencriptado.png";
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Desencriptado",
            showConfirmButton: false,
            timer: 1000
          });
        }

        //Habilita botón encriptar
        document.querySelector('.boton-encriptar').removeAttribute("disabled");

        //deshabilita botón desencriptar
        document.querySelector('.boton-desencriptar').disabled = true;
        
     //Se muestra en caso que el campo de texto este vacío
    } else {
        muñeco.src = "./imagenes/Muñeco.png"
        mensajeInformativo.textContent = "Ningún mensaje fue encontrado";
        parrafoInstrucciones.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal.fire( {title: "No hay texto para desencriptar o el texto ya esta desencriptado", icon: "warning"});

    }
}

//Función para copiar texto 
const btnCopiar = () =>{
    let texto = document.getElementById("texto").value;
    navigator.clipboard.writeText(texto);
    if(texto.length > 0){
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Texto Copiado",
            showConfirmButton: false,
            timer: 1000
          });
    }else{
        swal.fire({title: "No hay texto para copiar", icon: "warning"});
    }  
}

//Función para borrar texto y muestra algunos mensajes informativos
const btnBorrar = () =>{
    let muñeco = document.getElementById("muñeco");
    let texto = document.getElementById("texto").value;
    let mensajeInformativo = document.getElementById("mensaje-informativo");
    let parrafoInstrucciones = document.getElementById("parrafo-instrucciones");
    if(texto.length > 0 ){
        document.getElementById("texto").value = "";
        muñeco.src = "/imagenes/Muñeco.png";
        mensajeInformativo.textContent = "Ningún mensaje fue encontrado";
        parrafoInstrucciones.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    }

}