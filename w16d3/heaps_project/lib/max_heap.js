class MaxHeap {
    constructor() {
        this.array = [null];
    };

    getParent(idx) {
        return Math.floor(idx / 2);
    };

    getLeftChild(idx) {
        return idx * 2;
    };

    getRightChild(idx) {
        return idx * 2 + 1;
    };

    siftUp(idx) {

    };

    insert(val) {

    };

    siftDown(idx) {

    };

    deleteMax() {

    };


}

module.exports = {
    MaxHeap
};