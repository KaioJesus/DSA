
// Bubble Sort é um algoritmo de ordenação que funciona comparando elementos adjacentes e trocando-os se estiverem na ordem errada.
function bubbleSort(arr){
    
    let aux = 0;

    for(let lastElement = arr.length - 1; lastElement > 0; lastElement--){
        for(let i = 0; i < lastElement; i++){
            if(arr[i] > arr[i+1]){
                aux = arr[i];
                arr[i] = arr[i + 1]; 
                arr[i + 1] = aux;
            }
        }
    }

    return arr;
}

function bubbleSortInverted(arr){
    
    let aux = 0;

    for(let lastElement = arr.length - 1; lastElement > 0; lastElement--){
        for(let i = 0; i < lastElement; i++){
            if(arr[i] < arr[i+1]){
                aux = arr[i];
                arr[i] = arr[i + 1]; 
                arr[i + 1] = aux;
            }
        }
    }

    return arr;
}

console.log(bubbleSortInverted([3, 8, 9, 4, 5,7, 2, 35, 28, 13]));
console.log(bubbleSort([3, 8, 9, 4, 5,7, 2, 35, 28, 13]));