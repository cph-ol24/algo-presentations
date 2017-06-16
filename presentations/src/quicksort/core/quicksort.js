// @flow

const shuffle = arr => {
  let currentIndex = arr.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = temporaryValue;
  }

  return arr;
};

const exchange = (arr: number[], x: number, y: number) => {
  const temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
};

export const partitionings = {
  standard: (arr: number[], low: number, high: number) => {
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
    return { lt: j, gt: j + 1 };
  },
  dijkstra3way: (arr: number[], low: number, high: number) => {
    let lt = low, gt = high;

    let v = arr[low];
    let i = low;
    while (i <= gt) {
      if (arr[i] < v) {
        exchange(arr, lt++, i++);
      } else if (arr[i] > v) {
        exchange(arr, i, gt--);
      } else {
        i++;
      }
    }

    return {
      lt: lt - 1,
      gt: gt + 1
    };
  }
};

const sortImpl = (
  algorithm: Function,
  arr: number[],
  low: number,
  high: number
) => {
  if (high <= low) return;

  let j = algorithm(arr, low, high);
  sortImpl(algorithm, arr, low, j.lt);
  sortImpl(algorithm, arr, j.gt, high);
};

export const quicksort = (
  arr: number[],
  algorithm: Function = partitionings.standard
) => {
  shuffle(arr);
  sortImpl(algorithm, arr, 0, arr.length - 1);
};

export const quickselect = (
  arr: number[],
  k: number,
  algorithm: Function = partitionings.standard
) => {
  shuffle(arr);

  let low = 0, high = arr.length;

  while (high > low) {
    let j = algorithm(arr, low, high);

    if (j.gt < k) {
      low = j.gt + 1;
    } else if (j.gt > k) {
      high = j.gt - 1;
    } else {
      return arr[k];
    }
  }

  return arr[k];
};
