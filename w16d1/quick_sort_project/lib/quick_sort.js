function quickSort(array) {
    if (array.length <= 1) return array;

    let pivot = array.shift();
    let left = array.filter(el => el < pivot);
    let right = array.filter(el => el >= pivot);

    let leftSorted = quickSort(left);
    let rightSorted = quickSort(right);

    return [...leftSorted, pivot, ...rightSorted];
}


module.exports = {
    quickSort
};

// quick sort
// unsorted array and you shift a pivot
// return using the splat operator to merge all sorted

// time
// O(n log(n)) or O(n^2) because you might pivot on the highest or lowest num

// space
// O(n) 
// in-place quickSort has a O(log (n))
