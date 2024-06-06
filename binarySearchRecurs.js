function binarySearchRecursive(arr, target, low, high) {
    if (low > high) {
        return -1;
    }

    const mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
        return mid;
    } else if (arr[mid] > target) {
        return binarySearchRecursive(arr, target, low, mid - 1);
    } else {
        return binarySearchRecursive(arr, target, mid + 1, high);
    }
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 7;

const result = binarySearchRecursive(arr, target, 0, arr.length - 1);
if (result !== -1) {
    console.log(`Элемент найден на индексе: ${result}`);
} else {
    console.log('Элемент не найден');
}