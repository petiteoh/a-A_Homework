const getDigitFrom = (num, place) => Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;

const getIntLength = (num) => (num === 0) ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1;

function getMaxDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, getIntLength(nums[i]));
    }

    return maxDigits;
}

function radixSort(arr) {
    if (!Array.isArray(arr)) return null;

    let maxDigits = getMaxDigits(arr);
    for (let k = 0; k < maxDigits; k++) {
        let buckets = Array.from({length: 10}, () => []);

        for (let i = 0; i < arr.length; i++) {
            let digit = getDigitFrom(arr[i], k);
            buckets[digit].push(arr[i]);
        }

        arr = [].concat(...buckets);
    }

    return arr;
}

module.exports = {
    radixSort
};

// non comparison sorting algorithm
// numbers have meta information baked into their representation
// 3 math-oriented helper functions:
// getDigitFrom(num, place)
// getIntLength(num)
// getMaxDigits(nums)
// getMaxDigits helps the k to determine its place within 0, 10, 100 or 1000

// time
// O(n * k) best / typical case
// k can become log k when one integer is longer than all elements in the array in which it becomes O(n log(k))

// space
// O(n + k)