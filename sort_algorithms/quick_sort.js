/*
Quick Sort - easy explanation

How quick sort works:
- Pick a pivot element from the array.
- Partition the array into elements less than the pivot and elements greater than the pivot.
- Recursively sort both partitions.
- Concatenate the sorted left partition, the pivot, and the sorted right partition.

Time complexity:
- Best case: O(n log n)
- Average case: O(n log n)
- Worst case: O(n^2) when the pivot divides poorly.

Space complexity:
- O(log n) average for recursion stack.
- O(n) worst-case when recursion is unbalanced.
*/

function quickSort(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError('Input must be an array');
    }

    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] <= pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return quickSort(left).concat(pivot, quickSort(right));
}

// Example usage:
const unsortedQuick = [9, 4, 7, 3, 2, 5];
console.log('Quick Sort input:', unsortedQuick);
console.log('Quick Sort output:', quickSort(unsortedQuick));
