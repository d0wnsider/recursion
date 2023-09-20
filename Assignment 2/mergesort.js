const mergeSort = (arr) => {
  if (arr.length < 2) return arr;

  let midIndex = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, midIndex);
  let rightArr = arr.slice(midIndex);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
};

const merge = (leftArr, rightArr) => {
  const output = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    const leftEle = leftArr[leftIndex];
    const rightEle = rightArr[rightIndex];

    if (leftEle < rightEle) {
      output.push(leftEle);
      leftIndex++;
    } else {
      output.push(rightEle);
      rightIndex++;
    }
  }

  return [
    ...output,
    ...leftArr.slice(leftIndex),
    ...rightArr.slice(rightIndex),
  ];
};

console.log(mergeSort([55, 9, 23, 123, 4, 75, 5, 12, 345, 3, 2, 0, 44, 1]));
