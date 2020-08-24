function binarySearch(array, target) {
    if (array.length === 0) return false;

    let midpoint = Math.floor(array.length / 2);
    let left = array.slice(0, midpoint);
    let right = array.slice(midpoint + 1)

    if (target < array[midpoint]) {
        return binarySearch(left, target);
    } else if (target > array[midpoint]) {
        return binarySearch(right, target);
    } else {
        return true;
    }
}

function binarySearchIndex(array, target, lo=0, hi=array.length-1) {
    if (lo === hi) return -1;

    let midpoint = Math.floor((lo + hi) / 2);

    if (target < array[midpoint]) {
      return binarySearchIndex(array, target, lo, midpoint);
    } else if (target > array[midpoint]) {
      return binarySearchIndex(array, target, midpoint + 1, hi);
    } else {
      return midpoint;
    }
}


module.exports = {
    binarySearch,
    binarySearchIndex
};

// the dictionary search with a target
// returns boolean