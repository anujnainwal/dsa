/*
Heap Sort - easy explanation

How heap sort works:
- Build a max heap from the array.
- Repeatedly swap the root with the last element.
- Reduce the heap size and heapify the root.
- Continue until the array is fully sorted.

Time complexity:
- Best case: O(n log n).
- Average case: O(n log n).
- Worst case: O(n log n).

Space complexity:
- O(1) because heap sort sorts in-place.
*/

function heapSort(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError('Input must be an array');
    }

    if (arr.length <= 1) {
        return arr;
    }

    const n = arr.length;

    function heapify(size, rootIndex) {
        let largest = rootIndex;
        const left = 2 * rootIndex + 1;
        const right = 2 * rootIndex + 2;

        if (left < size && arr[left] > arr[largest]) {
            largest = left;
        }

        if (right < size && arr[right] > arr[largest]) {
            largest = right;
        }

        if (largest !== rootIndex) {
            const temp = arr[rootIndex];
            arr[rootIndex] = arr[largest];
            arr[largest] = temp;
            heapify(size, largest);
        }
    }

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(n, i);
    }

    for (let end = n - 1; end > 0; end--) {
        const temp = arr[0];
        arr[0] = arr[end];
        arr[end] = temp;
        heapify(end, 0);
    }

    return arr;
}

// Example usage:
const unsortedHeap = [4, 10, 3, 5, 1];
console.log('Heap Sort input:', unsortedHeap);
console.log('Heap Sort output:', heapSort(unsortedHeap));
