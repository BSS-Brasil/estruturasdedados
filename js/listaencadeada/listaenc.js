const prompt = require('prompt-sync')();

let lista = [];
let palavraLida = "";

let primeiro;
let corrente;
let anterior;

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
  lista.push(no);
  inserido = lista.length - 1;

  if (lista.length === 0) {
    primeiro = 0;
  } else {
    corrente = primeiro;

    if (lista[inserido].palavra < lista[corrente].palavra) {
      if (corrente === primeiro) {
        lista[inserido].prox = primeiro;
        primeiro = inserido
      } else {
        anterior = corrente;
        lista[inserido].prox = corrente;
        lista[anterior].prox = inserido;
      }
    } else {
      if (lista[corrente].prox === null) {
        lista[corrente].prox = inserido;
      } else {
        corrente = lista[corrente].prox;
      }
    }
  }

  console.log("LISTA: ", lista);
  console.log("PRIMEIRO: ", lista[primeiro]);

  exibeLista();

}
