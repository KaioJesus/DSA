function binarySearch(arr, el){
  let inicioArr = 0;
  let finalArr = arr.length - 1;
  let i = 0;

  while(inicioArr <= finalArr){
    i++;
    let meio = Math.round((inicioArr + finalArr)/ 2);
    let foundNumber = 0;
    if(arr[meio] === el){
      foundNumber = arr[meio];
      return i;
    } else if(arr[meio] > el){
      finalArr = meio - 1;
    } else {
      inicioArr = meio + 1;
    }
  }

  return `Não foi encontrado o número desejado`
}

console.log(binarySearch([1, 5, 6, 7, 9, 20, 50, 80, 90, 100], 9));
