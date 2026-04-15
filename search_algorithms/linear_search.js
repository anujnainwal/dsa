/*
Linear Search - easy explanation

How linear search works:
- Check each element in the array one by one.
- Stop when the target is found.
- If you reach the end, the target does not exist.

Time complexity:
- Best case: O(1) when target is first.
- Average/Worst case: O(n).

Space complexity:
- O(1).
*/

function linearSearch(arr, target) {
    if (!Array.isArray(arr)) {
        throw new TypeError('Input must be an array');
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }

    return -1;
}

// Example:
const items = [3, 7, 1, 9, 5];
console.log('Linear Search index:', linearSearch(items, 9)); // 3
console.log('Linear Search missing:', linearSearch(items, 4)); // -1
