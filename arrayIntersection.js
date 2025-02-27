function arrayIntersection(arr1, arr2) {
    return arr1.filter(value => arr2.includes(value));
}

console.log(arrayIntersection([1, 2, 3, 4], [2, 4, 6])); 
