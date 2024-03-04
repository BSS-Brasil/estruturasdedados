const prompt = require('prompt-sync')();

let lista = [];
let palavraLida = "";

let primeiro = null;

const criaNo = (p) => { 
  let obj = { palavra: p, prox: null };
  return(obj)
}

function lerPalavra() {
  const name = prompt('Digite uma palavra: ');
  return name;
}

function exibeLista() {
  let p = primeiro;
  while (p !== null) {
    console.log(lista[p].palavra);
    p = lista[p].prox;
  }
}

function inserePalavra(palavra) {
  let no = criaNo(palavra);  
  lista.push(no);

  let inserido = lista.length - 1;
  let atual, anterior;

  if (primeiro === null) {
    primeiro = inserido;
    atual = primeiro;    
  } else {
    atual = primeiro;
    while (atual < inserido) {
      if (lista[inserido].palavra < lista[atual].palavra) {
        if (atual === primeiro) {
          lista[inserido].prox = primeiro;
          primeiro = inserido;
        } else {
          lista[inserido].prox = atual;
          lista[anterior].prox = inserido;
        }
        break; 
      } else {
        if (lista[atual].prox === null) {
          lista[atual].prox = inserido;
          break; 
        } else {
          anterior = atual;
          atual = lista[atual].prox;
        }
      }     
    }    
  }   
}

while (true) {
  palavraLida = lerPalavra(); 

  if (palavraLida === "FIM") {
    break;
  }

  inserePalavra(palavraLida);

  console.log("LISTA: ", lista);
  exibeLista();
}