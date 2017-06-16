export const merge = `
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
`;
