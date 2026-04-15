/*
Binary Search - easy explanation

How binary search works:
- Works on sorted arrays only.
- Compare the target with the middle element.
- If target is smaller, search left side.
- If target is larger, search right side.
- Repeat until found or range is empty.

Time complexity:
- Best/Average/Worst case: O(log n).

Space complexity:
- O(1) for iterative version.
*/

function binarySearch(arr, target) {
    if (!Array.isArray(arr)) {
        throw new TypeError('Input must be an array');
    }

    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        }

        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}

// Example:
const sortedItems = [1, 2, 4, 7, 9, 12, 15];
console.log('Binary Search index:', binarySearch(sortedItems, 9)); // 4
console.log('Binary Search missing:', binarySearch(sortedItems, 5)); // -1
