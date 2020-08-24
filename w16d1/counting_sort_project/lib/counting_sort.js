function countingSort(arr, max) {
    const result = [];
    const counters = new Array(max + 1).fill(0);

    for (let i = 0; i < arr.length; i++) {
        counters[arr[i]]++
    }

    for (let i = 0; i < counters.length; i++) {
        while (counters[i] > 0) {
            result.push(i);
            counters[i]--;
        }
    }

    return result;
}


module.exports = {
    countingSort
};

// countingSort
// k the largest integer 
// set each element to 0
// fill each of the counters with the arr[i] element and add only count to it
// later go through the counters and push the element until that specific counter is 0

// time O(n * k)

// space O(k)

