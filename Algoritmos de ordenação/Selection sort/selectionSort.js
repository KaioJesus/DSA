function selectionSort(arr){
    for(let i = 0; i < arr.length; i ++){
        let lowestIndexValue = i;

        // percorre o array todo e verifica qual o menor valor e recebe o indice dele;
        for(let atual = i; atual < arr.length; atual++){
            if(arr[atual] < arr[lowestIndexValue]){
                lowestIndexValue = atual;
            }
        }

        // Recebe o Valor do indice atual
        let currentValue = arr[i];

        // O índice atual recebe o menor valor até o momento
        arr[i] = arr[lowestIndexValue];

        // O índice que continha o menor valor agora recebe o valor inicial do 
        arr[lowestIndexValue] = currentValue;
    }

    return arr;
}

const desordenado = [5,2,6,9,8,7,3];
console.log(selectionSort(desordenado));