/*
Merge Sort - easy explanation

How merge sort works:
- Divide the array into two halves.
- Recursively sort each half.
- Merge the two sorted halves back together.

Time complexity:
- Best case: O(n log n)
- Average case: O(n log n)
- Worst case: O(n log n)

Space complexity:
- O(n) because merge sort uses extra arrays during merging.
*/

function mergeSort(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError('Input must be an array');
    }

    if (arr.length <= 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, middle));
    const right = mergeSort(arr.slice(middle));

    return merge(left, right);
}

function merge(left, right) {
    const result = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i]);
            i += 1;
        } else {
            result.push(right[j]);
            j += 1;
        }
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
}

// Example usage:
const unsortedMerge = [7, 3, 5, 2, 8, 1];
console.log('Merge Sort input:', unsortedMerge);
console.log('Merge Sort output:', mergeSort(unsortedMerge));
