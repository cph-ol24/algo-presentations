// @flow
import { quicksort, partitionings, quickselect } from "./quicksort";

describe("quicksort", () => {
  it("should be able to sort using default partitioning", () => {
    const arr = [5, 4, 3, 2, 1];

    quicksort(arr);

    expect(arr).toEqual([1, 2, 3, 4, 5]);
  });

  it("should be able to sort using 3-way partitioning", () => {
    const arr = [4, 5, 4, 3, 2, 4, 1];

    quicksort(arr, partitionings.dijkstra3way);

    expect(arr).toEqual([1, 2, 3, 4, 4, 4, 5]);
  });

  // it("should find the 2th smallest value", () => {
  //   const arr = [4, 5, 4, 3, 2, 4];

  //   const result = quickselect(arr, 4, partitionings.standard);

  //   expect(result).toEqual(3);
  // });
});
