// @flow
import { topdown, bottomup } from "./mergesort";

describe("mergesort", () => {
  it("should be able to sort using topdown", () => {
    const arr = [5, 4, 3, 2, 1];

    topdown(arr);

    expect(arr).toEqual([1, 2, 3, 4, 5]);
  });

  it("should be able to sort using bottomup", () => {
    const arr = [5, 4, 3, 2, 1];

    bottomup(arr);

    expect(arr).toEqual([1, 2, 3, 4, 5]);
  });
});
