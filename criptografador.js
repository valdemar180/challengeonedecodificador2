

function cryptografar(){  

  var frase = document.querySelector("#input");
  console.log(input.value);
  var texto = input.value;
  var texto = texto.replace(/e/gi, "enter");
  var texto = texto.replace(/i/gi, "imes");
  var texto = texto.replace(/a/gi, "ai");
  var texto = texto.replace(/o/gi, "ober");
  var texto = texto.replace(/u/gi, "ufat");
  console.log(texto);

  var exibir = document.querySelector("#texto");
  exibir.textContent = texto;

  //* botao copy

  var botao = document.querySelector("#texto");
  botao.style.background="white";
  
  var botao = document.querySelector(".copiar");
  botao.style.display="inline";

  //* sumir mensagen
  
  var primeiraMensagem = document.querySelector("#primeira-mensagem");
  primeiraMensagem.style.display="none";

  var segundaMensagem = document.querySelector("#segunda-mensagem");
  segundaMensagem.style.display="none";
}
 function copiarTexto() {
        let textoCopiado = document.getElementById("texto");
        textoCopiado.select();
        textoCopiado.setSelectionRange(0, 99999)
        document.execCommand("copy");
        alert("texto copiado para área de transferência é: " + textoCopiado.value);
    }
  


function descriptografar(){
  var frase = document.querySelector("#input");
  console.log(input.value);
  var texto = input.value;
  var texto = texto.replace(/enter/gi, "e");
  var texto = texto.replace(/imes/gi, "i");
  var texto = texto.replace(/ai/gi, "a");
  var texto = texto.replace(/ober/gi, "o");
  var texto = texto.replace(/ufat/gi, "u");

  
  var exibir = document.querySelector("#texto");
  exibir.textContent = texto;

  //* botao copy

  var botao = document.querySelector("#texto");
  botao.style.background="white";
  
  var botao = document.querySelector(".copiar");
  botao.style.display="inline";

  //* sumir mensagen

  var primeiraMensagem = document.querySelector("#primeira-mensagem");
  primeiraMensagem.style.display="none";

  var segundaMensagem = document.querySelector("#segunda-mensagem");
  segundaMensagem.style.display="none";
}



/*  CRYPTOGRAFADOR 
function teste(){

  https://blog.erikfigueiredo.com.br/area-de-transferencia-copiar-e-colar-com-javascript-dica-rapida/#:~:text=Ctrl%2BC%20%7C%20Ctrl%2BV%20com%20JS!

    var texto = "gato, gato  ";
    var texto = texto.replace(/e/gi, "enter");
    var texto = texto.replace(/i/gi, "imes");
    var texto = texto.replace(/a/gi, "ai");
    var texto = texto.replace(/o/gi, "ober");
    var texto = texto.replace(/u/gi, "ufat");

    document.write(texto);
    console.log(texto); 
}*/


/* DESCRYPTOGRAFADOR

var cripotografia ="pairaibenterns poberr enterncairair enterssenter dentersaifimesober enter tenterr fimesnailimeszaidober enterlenter coberm sufatcenterssober!";
var cripotografia = cripotografia.replace(/enter/gi, "e");
var cripotografia = cripotografia.replace(/imes/gi, "i");
var cripotografia = cripotografia.replace(/ai/gi, "a");
var cripotografia = cripotografia.replace(/ober/gi, "o");
var cripotografia = cripotografia.replace(/ufat/gi, "u");

console.log(cripotografia); */

