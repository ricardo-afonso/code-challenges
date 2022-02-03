/*
A Happy Year is any year with only distinct digits. Create a function that takes an integer year and returns the next happy year.

 Examples
happy_year(2017) ➞ 2018
# 2018 has all distinct digits

happy_year(1990) ➞ 2013

happy_year(2021) ➞ 2031

*/

//Solution

let happy_year = i => new Set((++i).toString().split('')).size === i.toString().split('').length ? i : happy_year(i++)


//Testing
describe('Challenge 408 - Happy year', () => {
  test('1990 -> 2013', () => {
    expect(happy_year(1990)).toBe(2013)
  })
  test('2021 -> 2031', () => {
    expect(happy_year(2021)).toBe(2031)
  })
  test('1 -> 2', () => {
    expect(happy_year(1)).toBe(2)
  })
})

// console.log(happy_year(1990))
//2013

// console.log(happy_year(2021))
//2031

//Notes
/*

Comparison of two parts
1- new Set(...). - A set only contains unique elements, so calling new Set([3,2,3,2]) will return a set with only the values 3 and 2
i.toString().split() creates an array with all the digits of the number in string form.

new Set(..).size returns how many elements it has ( similar to .length)

i.toString().split('').length returns the length of the original digit.

If they are the same, it means the set has only unique values and the value can be returned

if lengths are different it means the set has removed some repeated values, and so we call the fn recursively with the next value (i++)

The i++ in the recursive call is not affected by the i++ on new Set((i++)) ... ).  JS black magic, but it has to do with functions being first class, I believe 
*/