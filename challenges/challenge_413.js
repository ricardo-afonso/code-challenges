/*

https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_413md

When coloring a striped pattern, you may start by coloring each square sequentially, meaning you spend time needing to switch coloring pencils.

Create a function where given a list of colors, return how long it takes to color the whole pattern. Note the following times:

- It takes 1 second to switch between pencils.
- It takes 2 seconds to color a square.

See the example below for clarification.
color_pattern_times(["Red", "Blue", "Red", "Blue", "Red"]) ➞ 14

# There are 5 colors so it takes 2 seconds to color each one (2 x 5 = 10).
# You need to switch the pencils 4 times and it takes 1 second to switch (1 x 4 = 4).
# 10 + 4 = 14
*/


//Solution

let color_pattern_times = a => a.map((_,n,r)=> +(r[n]!=r[n-1])).slice(1).reduce((a,b)=>a+b,0)+a.length*2


//Testing
describe('Challenge 413 - Color Pattern Times', () => {
  test('[Blue] -> 2', () => {
    expect(color_pattern_times(["Blue"])).toBe(2)
  })
  test('Pattern 2 -> 11', () => {
    expect(color_pattern_times(["Red", "Yellow", "Green", "Blue"])).toBe(11)
  })
  test('Pattern 3 -> 13', () => {
    expect(color_pattern_times(["Blue", "Blue", "Blue", "Red", "Red", "Red"])).toBe(13)
  })
})



//Explanation:

// Define a function that takes an array
let colorPatternTimes = array => {
  // Check if each element of the array is equal to the element before and
  // build a new array with the results. Each switch takes 1 second.
  let diffElems = array.map((el, ind, arr) => {
    let compare = arr[ind] !== arr[ind-1]
    return +compare
  })
  // Slice the first element as it shouldn't count as a color switch
  let elemSwitches = diffElems.slice(1)
  // sum the 'times' it takes to switch. Using 0 as starting element for reduce to account for length 1 array inputs
  let switchTime = elemSwitches.reduce((a,b)=>a+b,0)


  // each color in the array takes 2 seconds
  let coloringTime = array.length * 2

  // sum the two times
  return coloringTime + switchTime


}