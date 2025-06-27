function recursiveBinarySearch(arr, target){

    // 0 -> first index
    // arr.length - 1 -> last index
    return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, start, end) {
    if (start > end) {
        return -1; // Target not found
    }

    const mid = Math.floor((start + end) / 2);
    let cont = 0;
    cont++;
    if (arr[mid] === target) {
        console.log(cont);
        return mid; // Target found
    } 
    
    if (arr[mid] > target) {
        return search(arr, target, start, mid - 1); // Search in the left half
    } else {
        return search(arr, target, mid + 1, end); // Search in the right half
    }
}

console.log(recursiveBinarySearch([1, 5, 6, 7, 9, 20, 50, 80, 90, 100], 9)); // Output: index of the target element
console.log(recursiveBinarySearch([1, 5, 6, 7, 9, 20, 50, 80, 90, 100], 15)); // Output: -1 (not found)
console.log(recursiveBinarySearch([1, 5, 6, 7, 9, 20, 50, 80, 90, 100], 1)); // Output: 0 (first element)
console.log(recursiveBinarySearch([1, 5, 6, 7, 9, 20, 50, 80, 90, 100], 100)); // Output: 9 (last element)
