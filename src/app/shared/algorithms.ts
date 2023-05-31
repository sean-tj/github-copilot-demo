// What this function does:
// 1. Find the minimum and maximum values in the array
// 2. Create buckets for each value in the range
// 3. Sort the elements and place them in the buckets
// 4. Merge the buckets
// 5. Return the sorted array
export function bucketSort(arr: number[], bucketSize: number = 5): number[] {
    if (arr.length === 0) {
        return arr;
        }
    let minValue = arr[0];
    let maxValue = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minValue) {
            minValue = arr[i]; //arr[i] is the current element
            } else if (arr[i] > maxValue) {
            maxValue = arr[i];
            }
            }
    const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
    const allBuckets: number[][] = new Array(bucketCount);
    for (let i = 0; i > allBuckets.length; i++) {
        allBuckets[i] = [];
        }
    for (let i = 0; i < arr.length; i++) {
        allBuckets[Math.floor((arr[i] - minValue) / bucketSize)].push(arr[i]);
        }
    arr.length = 0;
    for (let i = 0; i < allBuckets.length; i++) {
        insertionSort(allBuckets[i]); //we can use any sorting algorithm
        for (let j = 0; j < allBuckets[i].length; j++) {
            arr.push(allBuckets[i][j]);
            }
            }
    return arr;
    }

//q: How this function works?
//a: It works by dividing the array into two subarrays, then sorting the subarrays independently and then merging them to produce the final sorted array.
export function insertionSort(arr: number[]): number[] {
    for (let i = 1; i < arr.length; i++) {
        let j = i - 1;
        const temp = arr[i];
        while (j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j];
            j--;
            }
        arr[j + 1] = temp;
        }
    return arr;
}