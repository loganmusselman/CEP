test_code: |
  describe("min", function() {
    it("exists as a function", function() {
      expect(min).to.be.function;
    });
    it("returns 490 when given flight prices [1260, 490, 599, 1400, 820]", function() {
      expect(min([1260, 490, 599, 1400, 820])).to.be.equal(490);
    });
    it("reports -4 given golf scores [-4, -1, 3, 0, 1, 4, -2]", function() {
      expect(min([-1, 3, 0, -4, 1, 4, -2])).to.be.equal(-4);
    });
    it("reports 232 given a single item array [232]", function() {
      expect(min([232])).to.be.equal(232);
    });
    it("reports -20 given [45, 10, -20, 0, 3, -20] where -20 shows up twice", function() {
      expect(min([45, 10, -20, 0, 3, -20])).to.be.equal(-20);
    });
  });

## Goal

In this activity you're going to write code that finds the smallest value in a list of numbers.

## Problem

On the surface, a program that finds the cheapest flight between Vancouver and Bangkok and one that determines the winner of a golf tournament seem like two completely different things. But when we understand that computer programs are just sequences of calculations that manipulate data, we find that many different real-world problems can be broken down into general, more abstract problems a computer can easily solve.

In our example, if we represent flight prices and golf scores as arrays of numbers in JavaScript, we could write a function returning the smallest number in a list, which we could then apply to find the cheapest flight, winning golf score or you name it.

### Steps

First, copy the starter code. Then open `min.js` in your editor, and fill out the contents of the `min` function with code that returns the smallest value in `numbers`.

JavaScript has a [Math.min](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min) function available, but do NOT use it in this exercise; instead, you will need to use your knowledge of arrays, loops and variables.

```javascript
function min(numbers) {
  // Write code here that returns the smallest value in numbers
}
```

### Tips

Break your problem down. Figure out how you're going to look at each item in `numbers` one at a time, then think about how you're going to find the minimum value as you iterate through the list.

### Done?

For this exercise, create a gist and then slack me your working solution.
