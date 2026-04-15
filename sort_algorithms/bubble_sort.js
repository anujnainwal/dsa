/*
Bubble Sort - easy explanation

How bubble sort works:
- Compare adjacent elements in the array.
- If the left element is greater than the right element, swap them.
- After one full pass, the largest unsorted element moves to the end.
- Repeat passes until the array is sorted.

Time complexity:
- Best case: O(n) when the array is already sorted and no swaps happen.
- Average case: O(n^2) because we compare many pairs.
- Worst case: O(n^2) for reverse-sorted arrays.

Space complexity:
- O(1) because sorting is done in-place without extra arrays.
*/

function bubbleSort(arr) {
    // Edge case checks for trick inputs
    if (!Array.isArray(arr)) {
        throw new TypeError('Input must be an array');
    }

    if (arr.length <= 1) {
        return arr; // empty array or single element is already sorted
    }

    const n = arr.length;
    let swapped;

    for (let i = 0; i < n - 1; i++) {
        swapped = false;

        for (let j = 0; j < n - i - 1; j++) {
            // compare adjacent elements
            if (arr[j] > arr[j + 1]) {
                // swap
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }

        // If no swaps happened, the array is already sorted.
        if (!swapped) {
            break;
        }
    }

    return arr;
}

// Example usage:
const numbers = [5, 2, 8, 3, 1];
console.log('Unsorted:', numbers);
console.log('Sorted:', bubbleSort(numbers));

// Edge case examples to try:
// console.log(bubbleSort([]));               // []
// console.log(bubbleSort([1]));              // [1]
// console.log(bubbleSort('not an array'));   // TypeError
// console.log(bubbleSort([2, 2, 2]));        // [2, 2, 2]