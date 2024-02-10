#!/bin/bash

FUNCOES=`ls $1/funcoes/*.c`

for i in $FUNCOES; do
  gcc -c $i -I $1/headers -o $1/objects/`basename $i .c`.o
end

OBJETOS=`ls $1/objects/*.o`

gcc $1/main.c -I $1/headers -o $1/bin/$1 

exit 0

