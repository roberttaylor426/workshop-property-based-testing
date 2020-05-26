import * as fc from "fast-check";
import { sort } from "../sorter";

test("every member of a sorted list is the same as or smaller than the next member", () => {
    fc.assert(
        fc.property(
            fc.array(fc.integer()),
            (nums) => {
                const sortedNums = sort(nums);
                sortedNums.forEach((n, index) => {
                    expect(n).toBeLessThanOrEqual(sortedNums[index + 1]);
                })
            }
        )
    )
});
