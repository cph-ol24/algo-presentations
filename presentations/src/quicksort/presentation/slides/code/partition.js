export const standard = `
(arr: number[], low: number, high: number) => {
    let i = low, j = high + 1;

    while (true) {
      while (arr[++i] < arr[low]) {
        if (i == high) break;
      }

      while (arr[low] < arr[--j]) {
        if (j == low) break;
      }

      if (i >= j) break;
      exchange(arr, i, j);
    }

    exchange(arr, low, j);
    return j
}
`