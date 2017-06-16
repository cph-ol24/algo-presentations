export const sorting = `
const sort = (result: any[], aux: any[], low: number, high: number) => {
  if (high <= low) return;
  let mid = Math.floor(low + (high - low) / 2);
  sort(result, aux, low, mid);
  sort(result, aux, mid + 1, high);
  merge(result, aux, low, mid, high);
};
 
export default (arr: any[]) => {
  let aux = [];
 
  sort(arr, aux, 0, arr.length-1);
};
`