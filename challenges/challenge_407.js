/*
https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_406.md


Create a function that sums the total number of digits between two numbers, inclusive. For example, between the numbers 19 and 22 we have:
  # 19, 20, 21, 22
  (1 + 9) + (2 + 0) + (2 + 1) + (2 + 2) = 19

Examples
  sum_digits(7, 8) ➞ 15

  sum_digits(17, 20) ➞ 29

  sum_digits(10, 12) ➞ 6
*/

//Solution

let sum_digits = (a,b) =>  Array((b>a? b-a+1:a-b+1)).fill().map((_,i) => (b>a? a:b)+i).map(i=> i.toString().split('').map(Number).reduce((d,f)=>d+f)).reduce((g,h)=>g+h)
/*
let sum_digits = (a,b) =>  
  Array((b>a? b-a+1:a-b+1))
    .fill()
    .map((_, idx) => 
      (b>a? a:b) + idx
    )
    .map(i=> 
      i.toString()
      .split('')
      .map(Number)
      .reduce((d,f)=>
        d+f)
      )
      .reduce((g,h)=>g+h)
*/

//Testing

//Testing
describe('Challenge 407 - Sum Digits', () => {
  test('[10,14] -> 15', () => {
    expect(sum_digits(10,14)).toBe(15)
  })
  test('[14,10] -> 15', () => {
    expect(sum_digits(10,14)).toBe(15)
  })
  test('[1,2] -> 3', () => {
    expect(sum_digits(1,2)).toBe(3)
  })
})


// console.log(sum_digits(10,14)) 
// //15

// console.log(sum_digits(14,10))
//15

//Notes
/*
Array(x) creates an array of lenght X with empty values
Array(Math.abs(b-a)) creates an array with the lenght of the difference between numbers, converting negative results to positive

.fill()  fills the array with undefined ( previously empty values)
.map((_, idx) => (b>a? a:b) + idx) - This will fill the array with "Smallest Value + index", effectively creating an array with all the numbers
between the input values
  See more about the above at (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#sequence_generator_range)

[previousCode].map(i=> ...)  will call .map() on the result of the previously created sequence which will do the following:

  i.toString().split('') will transform a number into an array with it's digits.  Ex:  120 -> ['1','2','0']
  .map(Number) will transform the values into numbers again
  .reduce(...) will sum each digit of the number

So the previous .map() will result in an array consisting of the sum of the digits of each element 

the final .reduce() will sum each of the results, fulfilling the requirements
 */
