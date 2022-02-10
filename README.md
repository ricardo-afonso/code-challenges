# Code Challenges

Daily code challenge for https://github.com/beginner-codes/challenges/tree/main/weekday

Check every if every solution is passing with `npm test`
&nbsp;

---

## Challenges completed

&nbsp; 

[406 - Moving Partition](challenge_406.js)

- Create a function to partition a list from left to right.
- With an n input, your output should be a list containing n-1 sublists. Each sublist should have two elements: the left and the right side of the partition (both should be non-empty, unless the input list is empty).
An empty list should return an empty list: []

---
[407 - Sum Digits](challenge_407.js)

- Create a function that sums the total number of digits between two numbers, inclusive. For example, between the numbers 19 and 22 we have:

  ```
  [19, 20, 21, 22]
  (1 + 9) + (2 + 0) + (2 + 1) + (2 + 2) = 19`
  ```

---
[408 - Happy Year](challenge_408.js)

 - A Happy Year is any year with only distinct digits. Create a function that takes an integer year and returns the next happy year.

---
[409 - Half a Fraction](challenge_409.js)

 - Create a function that takes a fraction as an argument and returns half of it. Eg. 1/2 - 1/4

---
[410 - Simple Numbers](challenge_410.js)

 - Create a function that returns all the simple numbers between a provided range. A number that has N digits (enumerated d1, d2, ..., dN), is simple if the following condition is true:
  ```
  X = d1^1 + d2^2 + ... + dN^N
  ```
---
[411 - Full House](challenge_411.js)

 - Create a function that determines whether a player is holding a Full House in their hand. A hand is represented as a list of 5 cards. A full house is defined as a pair of cards and a three-of-a-kind.

 - To illustrate: `["A", "A", "A", "K", "K"]` would be a Full House, since the player holds 3 aces and a pair of kings.
 ---
 [412 - Phone number](challenge_412.js)

 - Create a function that accepts a string and returns `True` if it's in the format of a proper phone number and `False` if it's not. Assume any number between 0-9 (in the appropriate spots) will produce a valid phone number.

 - This is what a valid phone number looks like: `(123) 456-7890`
 ---
 [413 - Phone number](challenge_413.js)

 - When coloring a striped pattern, you may start by coloring each square sequentially, meaning you spend time needing to switch coloring pencils.

 - Create a function where given a list of colors, return how long it takes to color the whole pattern. Note the following times:

- It takes 1 second to switch between pencils.
- It takes 2 seconds to color a square.

See the example below for clarification.
```js
color_pattern_times(["Red", "Blue", "Red", "Blue", "Red"]) ➞ 14
// There are 5 colors so it takes 2 seconds to color each one (2 x 5 = 10).
// You need to switch the pencils 4 times and it takes 1 second to switch (1 x 4 = 4).
// 10 + 4 = 14
 ```





