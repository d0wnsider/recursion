function fibs(num) {
  const arr = [0, 1];

  for (let i = 2; i < num; i++) {
    arr[i] = arr[i - 2] + arr[i - 1];
  }
  console.log(arr);
}

fibs(8);
