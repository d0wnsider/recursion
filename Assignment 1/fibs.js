function fibs(num) {
  const arr = [0, 1];

  for (let i = 2; i < num; i++) {
    arr[i] = arr[i - 2] + arr[i - 1];
  }
  console.log(arr);
}

fibs(8);

function fibsRec(n) {
  if (n === 2) return [0, 1];

  return [...fibsRec(n - 1), fibsRec(n - 1)[n - 2] + fibsRec(n - 1)[n - 3]];
}

console.log(fibsRec(8));
