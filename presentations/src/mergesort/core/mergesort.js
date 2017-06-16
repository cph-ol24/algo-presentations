// @flow

const merge = (
  result: any[],
  aux: any[],
  low: number,
  mid: number,
  high: number
) => {
  for (let k = low; k <= high; k++) {
    aux[k] = result[k];
  }

  let i = low;
  let j = mid + 1;

  for (let k = low; k <= high; k++) {
    if (i > mid) result[k] = aux[j++];
    else if (j > high) result[k] = aux[i++];
    else if (aux[i] <= aux[j]) result[k] = aux[i++];
    else result[k] = aux[j++];
  }
};

const topdownSort = (result: any[], aux: any[], low: number, high: number) => {
  if (high <= low) return;
  let mid = Math.floor(low + (high - low) / 2);
  topdownSort(result, aux, low, mid);
  topdownSort(result, aux, mid + 1, high);
  merge(result, aux, low, mid, high);
};

export const topdown = (arr: any[]) => {
  let aux = [];

  topdownSort(arr, aux, 0, arr.length - 1);
};

export const bottomup = (arr: any[]) => {
  let n = arr.length;
  let aux = [];

  for (let sz = 1; sz < n; sz += sz) {
    for (let low = 0; low < n - sz; low += sz * 2) {
      merge(arr, aux, low, low + sz - 1, Math.min(low + sz + sz - 1, n - 1));
    }
  }
};
