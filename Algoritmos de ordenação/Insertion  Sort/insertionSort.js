function insertionSort(list){
    // for começa com no primeiro índice pq tem que comparar com o índice anterior
    for(let i = 1; i < list.length; i++){
        let analise = i;
        while( list[analise] < list[analise - 1]){
            // Recebe o Valor do indice atual
            let itemAtual = list[analise];

            // Recebe o valor do índice anterior
            let itemAnterior = list[analise - 1];
            console.log(itemAtual, itemAnterior, 'valores')
        
            // O índice atual recebe o valor anterior
            list[analise] = itemAnterior;

            // O índice anterior recebe o valor do item atual
            list[analise - 1] = itemAtual;
            console.log(list[analise], analise, 'valor e indice')
            
            analise--
            console.log(list[analise], analise, 'valor e indice')
        }
    }
    return list;
}

const lista = [5,2,6,9,8,7,3];
console.log(insertionSort(lista));