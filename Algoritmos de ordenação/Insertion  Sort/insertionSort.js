function insertionSort(arr){
    // for começa com no primeiro índice pq tem que comparar com o índice anterior
    for(let i = 1; i < arr.length; i++){
        while(arr[i] < arr[i - 1]){
            // Recebe o Valor do indice atual
            let itemAtual = arr[i];
        
            // O índice atual recebe o valor anterior
            arr[i] = arr[i -1];

            // O índice anterior recebe o valor do item atual
            arr[i - 1] = itemAtual;
            
            i--
        }
    }
    return arr;
}

const lista = [5,10,6,9,8,7,3];
console.log(insertionSort(lista));