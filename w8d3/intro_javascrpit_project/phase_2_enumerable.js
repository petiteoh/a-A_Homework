Array.prototype.myEach = function(cb) {
    for(let i = 0; i < this.length; i++) {
        cb(this[i]);
    }
}

// Array.prototype.myEach = function (cb) {
//     let arr = []
//     for (let i = 0; i < this.length; i++) {
//         arr.push(cb(this[i]));
//     }
//     return arr;
// }

Array.prototype.myMap = function(callback) {
    const mappedArray = [];
    this.myEach(el => {
        mappedArray.puch(callback(el))
    });
    return mappedArray;
}









Array.prototype.myReduce = function(callback, initialValue) {
    let arr = this;

    if (initialValue === undefined) {
        initialValue = arr[0];
        arr = arr.slice(1);
    }

    let result = initialValue;

    arr.myEach(el => result = callback(result, el));

    return result;
};