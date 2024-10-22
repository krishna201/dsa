function quickSort(arr) {

    if (arr.length <= 1) {
        return arr; 
    }

    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];
    for(let i=0; i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
console.log(left, pivot, right)
    return [...quickSort(left), pivot, ...quickSort(right)];

}

console.log(quickSort([3, 6, 8, 10, 1, 2, 1]));