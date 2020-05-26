import { add } from "../adder";

it("should add", () => {
  expect(add([1, 2])).toBe(3);
});

test("should blow up if exceeding javascripts max number", () => {
  expect(() => add([Number.MAX_VALUE, Number.MAX_VALUE])).toThrow();
});

test("should be able to sum more than two numbers regardless of order", () => {
  expect(add([1, 2, 3])).toEqual(add([3, 2, 1]));
})

test("should always return an unsigned zero", () => {
  expect(add([0 * -1, 0])).toEqual(0);
})