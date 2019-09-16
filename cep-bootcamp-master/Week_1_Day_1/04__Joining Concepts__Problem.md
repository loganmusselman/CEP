test_code: |
  describe("joinList", function() {
    it("exists as a function", function() {
      expect(joinList).to.be.function;
    });
    it("comma separates two words", function() {
      expect(joinList(["hello", "world"])).to.be.equal("hello, world");
    });
    it("comma separates four words", function() {
      expect(joinList(["gists", "types", "operators", "iteration", "problem solving"])).to.be.equal("gists, types, operators, iteration, problem solving");
    });
    it("simply reports back the one word", function() {
      expect(joinList(["solo"])).to.be.equal("solo");
    });
    it("reports empty string with no items in array", function() {
      expect(joinList([])).to.be.equal("");
    });
  });

## Goal

In this activity you're going practice solving problems and working with arrays, iteration and conditionals by solving a common string manipulation problem.

## Problem

Having learned about arrays, you've made a short list of the concepts you've learned today.

```javascript
var conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
console.log(conceptList);
```

But the output of this code in the Terminal is not very easy to read.

```terminal
node concepts.js
['gists', 'types', 'operators', 'iteration', 'problem solving']
```

It could certainly be more human readable! So you decide to write a small algorithm for joining the strings in `conceptList` together, separated by commas, such that the final output looks like the following.

```terminal
node concepts.js
Today I learned about gists, types, operators, iteration, problem solving.
```

You want to take your array of strings and to concatenate its contents together, with each list item separated from the previous by a comma.

**Note:** you may **not** use [Array.prototype.join](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) to solve this problem. You must write your own solution. 

In this activity, you're creating a simpler version of `.join`. As an exercise, it's good practice to write your own version. However, in the future you should be using `.join` to solve problems like these. 

Come up with an algorithm for joining strings in an array, then implement it. Make sure to commit your work and submit it as per the instructions below.

### Submit Your Work

To submit your work, browse to [gist.github.com](https://gist.github.com/) and create a new gist by copy-and-pasting your code into the form, naming the gist and the file appropriately, and clicking `Create secret gist`.

Finally, submit your working code to me.

#### Thinking like a computer

One of the questions you will often have to ask yourself in a situation like this is _"What should my code do with NO input?"_. Given your `joinList` function, you are writing it to accept an array with your concepts in it. But what should happen if you submit an empty array to `joinList`? What do you think is the right output if you submit an empty input? At a basic level, `joinList` returns a string, right? So, we should get a string back in all cases. Make sure that if `joinList([])` is called, that it handles this situation properly, by returning an empty string.

### Tips

Even if you're comfortable defining algorithms, it is always helpful to write your code in small pieces you can test then build upon.

Because we know we'll want to look at every item in the array, start by looping through its contents and printing them out. Once that works, try concatenating them together into one long string inside your loop.

Now that you've put your words together, add commas between them. You may now have an extra comma at the very end of the string. If you do, then think of how you'll make the code decide whether or not it should add a comma after a word.

Finally, put it all together. Make sure your code is clean, readable and solves the problem correctly.

