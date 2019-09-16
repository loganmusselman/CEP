## Goal

In this activity you'll practice defining algorithms, working with command line arguments, and writing loops and conditional statements. You'll do this by writing a program that takes a single command line argument – a simple password – and obfuscates it following a few rules.

## Problem

Write a program named `password.js` that takes a single string as a command line argument. Within your program, write a function definition for a function named `obfuscate` that takes a string as an argument and obfuscates it by applying the following rules.

- Every `"a"` in the string should be replaced with a `"4"`.
- Every `"e"` in the string should be replaced with a `"3"`.
- Every `"o"` (oh) in the string should be replaced with a `"0"` (zero).
- Every `"l"` (el) in the string should be replaced with a `"1"` (one).

<aside>
<h3>Are these obfuscated passwords any good?</h3>
<p>Not really. To truly minimize the risk of our accounts being hacked, you should use <a href="http://blog.codinghorror.com/passwords-vs-pass-phrases/">long passwords</a> and <a href="http://xkcd.com/792/">use unique ones for every account</a>. Password management software such as <a href="https://agilebits.com/onepassword">1Password</a>, <a href="https://lastpass.com/">Lastpass</a> or <a href="http://keepass.info/">KeePass</a> can be a big help!</p>
</aside>


The program should log to the console the final obfuscated password returned by your `obfuscate` function. As examples, consider the following few runs of the program and their results.

```terminal
node password.js password
p4ssw0rd
```

```terminal
node password.js abracadabra
4br4c4d4br4
```

```terminal
node password.js audaciously
4ud4ci0us1y
```

### Tips

1. Remember to tackle the problem in pieces. Define a solution first, then implement it one piece at a time. Good luck!
2. Your `obfuscate` function should **not** read directly from `ARGV`. Another piece of code outside that function can perform that task. It's important to understand why this is considered better practice. If you're unclear about the reasoning, ask your other peers or mentor!
3. Your solution should use a loop to go through the characters one at a time. Do **not** use any built-in functions like `String.prototype.replace` that do all the work of scanning through the string for you.

### Submission

When you've tested your code with a few different inputs and confirmed it works as described, create a gist and slack me your solution!
