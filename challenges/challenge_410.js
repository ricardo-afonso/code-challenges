/*
https://github.com/beginnerpy-com/challenges/blob/main/weekday/challenge_410.md

Simple Numbers

A number that has N digits (enumerated d1, d2, ..., dN), is simple if the following condition is true:
X = d1^1 + d2^2 + ... + dN^N

*/


//Solution

let simple_numbers = (a,b) => Array(Math.abs(b-a)+1).fill().map((_,i) => (b>a? a:b)+i).filter(n => n === `${n}`.split('').map(Number).map((c, d) => Math.pow(c, d+1)).reduce((q,w)=> q+w))


//Testing
describe('Challenge 410 - Simple Numbers', () => {
  test('1,10', () => {
    expect(simple_numbers(1,10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
  })
  test('1,100', () => {
    expect(simple_numbers(1,100)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 89])
  })
  test('10,100', () => {
    expect(simple_numbers(10,100)).toEqual([89])
  })
  test('90, 100', () => {
    expect(simple_numbers(90,100)).toEqual([])
  })
  test('100,32253', () => {
    expect(simple_numbers(100, 32253)).toEqual([135, 175, 518, 598, 1306, 1676, 2427])
  })
})



//Notes
/*

 Array(Math.abs(b-a)+1).fill().map((_,i) => (b>a? a:b)+i)
This part generates an array with all the numbers between the supplied range. Already 
described in Challenge 407.  Changed the array size calculation to Math.abs()

.filter(n => n === `${n}`.split('').map(Number).map((c, d) => Math.pow(c, d+1)).reduce((q,w)=> q+w))


.filter() will only return the items that satisfy the condition:

n is each of the numbers of the range array
`${n}`.split('').map(Number) -> splits the number into digits and creates an array with them in int form
.map((c, d) => Math.pow(c, d+1)) - Will exponentiate each digit by its position in the array ( starting at 1)
.reduce((q,w)=> q+w)) sums the exponentiated result

The result of this is compared to the original digit. If it passes, it's a "simple number"
*/

// Long version

const simpleNumbers = (start, end) => {
  //Calculate the array size needed for the range
  const rangeSize = Math.abs(end-start)
  // Generate an empty array of the required size, and fill it with undefined values
  const rangeArray = Array(rangeSize + 1).fill()
  // for each item of the array, add the range size to the index, effectively creating a range 
  // of numbers starting with the smallest
  let smallestNumber = start > end ? end : start
  const numbers = rangeArray.map((_,index) => (smallestNumber + index))

  // Test each number in the array for the required condition
  const simpleNumbersArray = numbers.filter(number => {
    //Create an array comprised of each digit of the number
    const digitsArray = number.toString().split('').map(Number)
    //Exponentiate the number by it's index ( dN ^n)
    const exponentiatedArray = digitsArray.map((digit, index) => {
      return Math.pow(digit, index+1)
    })
    
    // Sum the result of the exponents of each number
    const sumOfExponents = exponentiatedArray.reduce((a,b)=>a+b)
    
    // condition for the filter
    return number === sumOfExponents
  })

  // Return the results of the filtering
  return simpleNumbersArray
}


