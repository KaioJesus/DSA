function mergeSort(array, nivelAninhamento = 0) {

  console.log(`nível de aninhamento: ${nivelAninhamento}`)
  console.log(array)

  if(array.length > 1) {
    const meio = Math.floor(array.length / 2);
    const left = mergeSort(array.slice(0, meio), nivelAninhamento + 1);
    const right = mergeSort(array.slice(meio, array.length), nivelAninhamento + 1);
    array = sort(left, right);
  }

  return array;
}

function sort(left, right) {
  let posicaoAtualParte1 = 0 
  let posicaoAtualParte2 = 0
  const resultado = []

  while (posicaoAtualParte1 < left.length && posicaoAtualParte2 < right.length) {
    let produtoAtualParte1 = left[posicaoAtualParte1]
    let produtoAtualParte2 = right[posicaoAtualParte2]

    if (produtoAtualParte1 < produtoAtualParte2) {
      resultado.push(produtoAtualParte1)
      posicaoAtualParte1++
    } else {
      resultado.push(produtoAtualParte2)
      posicaoAtualParte2++
    }
  }

  return resultado.concat(posicaoAtualParte1 < left.length
    ? left.slice(posicaoAtualParte1)
    : right.slice(posicaoAtualParte2))
}

console.log(mergeSort([
    5, 2, 6, 9, 8, 7, 3, 1, 4, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
]));