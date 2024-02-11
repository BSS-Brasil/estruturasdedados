const prompt = require('prompt-sync')();

let lista = [];
let palavraLida = "";

let primeiro;

const criaNo = (p) => { 
  let obj = { palavra: p, prox: null };
  return(obj)
}

function lerPalavra() {
  const name = prompt('Digite uma palavra: ');
  return name;
}

function exibeLista() {
  let p = primeiro
  while (p !== null) {
    p = lista[p].prox;
  }
}

while (true) {

  palavraLida = lerPalavra();

  if (palavraLida === "FIM") {
    break;
  }

  let no = criaNo(palavraLida);

  if (lista.length === 0) {
    lista.push(no);
    primeiro = 0;
  } else {
    lista.push(no);
    let inserido = lista.length - 1;
    if (lista[inserido].palavra < lista[primeiro].palavra) {
      lista[inserido].prox = primeiro;
      primeiro = inserido;
    }
  }

  console.log("LISTA: ", lista);
  console.log("PRIMEIRO: ", lista[primeiro]);

  exibeLista();

}
