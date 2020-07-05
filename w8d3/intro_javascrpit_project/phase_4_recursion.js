function range(start, end) {
    if (start === end) {
        return []
    }

    let r = range(start, end-1);
    r.push(end - 1);
    return r;
}

function sumRec(arr) {
    if (arr.length === 0) {
        return 0;
    }
    
    let lastNum = arr[arr.length - 1];
    return sumRec(arr.slice(0, arr.length - 1)) + lastNum;
}

function exponent(base, exp) {
    if (exp === 0) {
        return 1
    }

    return base * exponent(base, exp - 1)
}

function exponent2(base, exp) {
    if (exp === 0) {
        return 1
    }

    if (exp === 1) {
        return base
    }

    if (exp % 2 === 0) {
        return (exponent2(base, exp / 2)) ** 2 
    }
    else {
        return base * (exponent2(base, (exp - 1) / 2) ** 2 )
    }
}

function fibonacci(n) {
    if (n < 3) {
        return [0, 1].slice(0, n);
    }

    let fibs = fibonacci(n - 1);
    fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);
    
    return fibs;
}

function deepDup(arr) {
    if (!(arr instanceof Array)) {
        return arr;
    }

    return arr.map((el) => {
        return deepDup(el);
    });
}