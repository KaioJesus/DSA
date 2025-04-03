function selectCheaper(produtos, posicaoInicial){
    let maisBarato = posicaoInicial;
    for(let atual = posicaoInicial; atual <= produtos.length - 1; atual++ ){
        if(produtos[atual].preco < produtos[maisBarato].preco){
            maisBarato = atual;
        }

    }
    return maisBarato;
}

const produtos = [{nomeProduto: 'Caneca', preco: 35.00}, {nomeProduto: 'Camisa', preco: 70.00}, {nomeProduto: 'capa', preco: 8.00},{nomeProduto: 'apontador', preco: 5.00}, {nomeProduto: 'Caneta', preco: 3.00}]


// percorre o array, acha o menor valor e vai pondo nas posições iniciais
function selectionSort(){
    for(let atual = 0; atual < produtos.length - 1; atual++){
        let menorValor = selectCheaper(produtos, atual);

        let produtoAtual = produtos[atual];
        let produtoMenorValor = produtos[menorValor];

        produtos[atual] = produtoMenorValor;
        produtos[menorValor] = produtoAtual;
    }

    return produtos;
}

console.log(selectionSort());
