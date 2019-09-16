## Goal

In this activity you're going to practice more looping by solving a string manipulation problem.

## Problem

Write a program that takes any number of command line arguments, converts each to pig latin (the rules are in the next paragraph), then puts the translated words together into one sentence logged to the console.

The true [pig latin rules](https://en.wikipedia.org/wiki/Pig_Latin#Rules) would be a bit difficult to implement, so let's simplify them. Convert a word to pig latin by taking its first letter, moving it to the end of the word, then adding `"ay"` after it all.

If the final program were called `pig-latin.js`, then the following Terminal commands show several example outputs.

```terminal
node pig-latin.js pig latin
igpay atinlay
```

```terminal
node pig-latin.js this is all just gibberish
histay siay llaay ustjay ibberishgay
```

Submit your solution and create a gist.
