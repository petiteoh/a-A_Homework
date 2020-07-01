Array.prototype.uniq = function () {
    const uniqArray = [];

    this.forEach (el => {
        if (!uniqArray.includes(el)) {
            uniqArray.push(el);
        }
    });
    return uniqArray;
}

Array.prototype.twoSum = function () { 
    const arr = []; 
    this.forEach (el => {
        for(let i = (this.indexOf(el) + 1); i < this.length; i++) { 
            if (el + this[i] === 0) { 
                arr.push([this.indexOf(el), i]);
            }
        }
    });
    return arr;
}

//[[2,4],[9,1],[3,1]] => [[2,9,3],[4,1,1]]

Array.prototype.transpose = function () {
    const transposeArr = [];
    for (let j = 0; j < this[j].length; j ++) { //[2,4] //[9,1]
        transposeArr[j] = [];
        for(let i = 0; i < this.length; i++) {
            transposeArr[j].push(this[i][j]); //2
        }
    };
    return transposeArr;
}


