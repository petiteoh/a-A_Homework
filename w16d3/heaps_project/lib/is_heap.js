// you may assume that the array will always have a null element at the 0-th index
function isMaxHeap(array, idx=1) {
        let isComplete = array.every((el) => el !== undefined);
        return isComplete && _isMaxHeap(array);
}

function _isMaxHeap(array) {
    
}


module.exports = {
    isMaxHeap
};