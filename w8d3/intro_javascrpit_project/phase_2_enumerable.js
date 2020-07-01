Array.prototype.myEach = function (cb) {
    for(let i = 0; i < this.length; i++){
        cb(this[i]);
    }
}

[1,2,3].each do |el|
    print el
end

[1,2,3].myEach(function(item){
    console.log(item);
})

// Array.prototype.myEach = function (cb) {
//     let arr = []
//     for (let i = 0; i < this.length; i++) {
//         arr.push(cb(this[i]));
//     }
//     return arr;
// }

Array.prototype.myMap = function(myMapcb) {
    let arr = [];
    let myEachCallback = function(el) {
        arr.push(myMapcb(el));
    };
    this.myEach(myEachCallback);
    return arr;
}

Array.prototype.myReduce = function(val,cb) {
    let sum = 0;
}