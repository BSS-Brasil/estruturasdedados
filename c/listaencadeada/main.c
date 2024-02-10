#include <stdio.h>
#include <stdlib.h>

#include "palavra.h"

Palavra * createNode(palavra_t p) {
  Palavra *novo = (Palavra *) malloc(sizeof(Palavra));
  novo->palavra_t = p;
  novo->prox = NULL;
  return novo;
}

int main(int argc, char * argv[]) {
  Palavra *primeiro;
  Palavra *atual;
  Palavra *anterior;

  palavra_t item;

  while(1) {
    printf("Digite uma palavra: ");
    scanf("%s", item);
    printf("Você digitou %s\n\n", item);


  }

  return 0;
}