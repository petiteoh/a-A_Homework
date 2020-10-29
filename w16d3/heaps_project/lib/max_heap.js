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
        if (idx === 1) return;

        let parentIdx = this.getParent(idx);

        if (this.array[parentIdx] < this.array[idx]) {
            [ this.array[parentIdx], this.array[idx] ] = [ this.array[idx], this.array[parentIdx] ];
            this.siftUp(parentIdx);
        }
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