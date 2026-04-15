/*
Selection Sort - easy explanation

How selection sort works:
- Divide the array into sorted and unsorted parts.
- Find the smallest value in the unsorted section.
- Swap it with the first unsorted element.
- Move the boundary and repeat.

Time complexity:
- Best case: O(n^2).
- Average case: O(n^2).
- Worst case: O(n^2).

Space complexity:
- O(1) because sorting is done in-place.
*/

function selectionSort(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError('Input must be an array');
    }

    if (arr.length <= 1) {
        return arr;
    }

    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            const temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    return arr;
}

// Example usage:
const unsortedSelection = [5, 2, 9, 1, 5, 6];
console.log('Selection Sort input:', unsortedSelection);
console.log('Selection Sort output:', selectionSort(unsortedSelection));
