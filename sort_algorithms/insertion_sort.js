/*
Insertion Sort - easy explanation

How insertion sort works:
- Start from the second element.
- Compare the current item with the sorted left side.
- Insert the current item in the correct position.
- Continue until the entire array is sorted.

Time complexity:
- Best case: O(n) when the array is already sorted.
- Average case: O(n^2).
- Worst case: O(n^2).

Space complexity:
- O(1) because sorting is done in-place.
*/

function insertionSort(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError('Input must be an array');
    }

    if (arr.length <= 1) {
        return arr;
    }

    for (let i = 1; i < arr.length; i++) {
        const current = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j -= 1;
        }

        arr[j + 1] = current;
    }

    return arr;
}

// Example usage:
const unsortedInsertion = [6, 4, 7, 2, 9, 1];
console.log('Insertion Sort input:', unsortedInsertion);
console.log('Insertion Sort output:', insertionSort(unsortedInsertion));
