export const sorting = `
const sortImpl = (arr, low, high) => {
  if (high <= low) return;

  let j = partition(arr, low, high);
  sortImpl(arr, low, j);
  sortImpl(arr, j, high);
}
`