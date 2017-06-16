export const bottomup = `
export const bottomup = (arr: any[]) => {
  let n = arr.length;
  let aux = [];
 
  for (let sz = 1; sz < n; sz += sz) {
    for (let low = 0; low < n - sz; low += sz * 2) {
      merge(arr, aux, low, low + sz - 1, Math.min(low + sz + sz - 1, n - 1));
    }
  }
};
`