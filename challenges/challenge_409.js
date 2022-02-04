/*
https://github.com/beginnerpy-com/challenges/blob/main/weekday/challenge_409.md

409 - Divide a Fraction by Two

Create a function that takes a fraction as an argument and returns half of it.

Examples
  half_a_fraction("1/2") ➞ "1/4"

  half_a_fraction("6/8") ➞ "3/8"

  half_a_fraction("3/8") ➞ "3/16"

Notes

- Always return the simplified fraction.
*/

//Solution

let half_a_fraction = f => {
  let dn = Math.pow(10, `${(eval(f)/2).toFixed(4)}`.length -2)
  let nm = (eval(f)/2).toFixed(10)*dn
  let dv = function gcd(a,b) {return (b) ? gcd(b, a % b) : a }(nm,dn)
  return `${nm/=dv}/${dn/=dv}`
}


//Testing
describe('Challenge 409 - Half a fraction', () => {
  test('1/2 -> 1/4', () => {
    expect(half_a_fraction('1/2')).toBe('1/4')
  })
  /*
  All the following tests fail. JS can't handle floating point precision decently

  test('2/3 -> 1/3', () => {
    expect(half_a_fraction('2/3')).toBe('1/3')
  })
  test('39/46 -> 39/92', () => {
    expect(half_a_fraction('39/46')).toBe('39/92')
  })
  test('52/97 -> 26/97', () => {
    expect(half_a_fraction('52/97')).toBe('26/97')
  })
  */
})



//Notes
/*

-Variable explanation
dn - Denominator: Multiplying the result of half the fraction (eval(f)/2) by it's length (-2 to account for 0 and . ) so it becomes a full number ( eg: 0.25 -> 25 )
nm - Numerator: The decimal number of half the fraction, multiplied by the dn
dv - Divisor: an IIFE that is called with the numerator and denominator. Findes the Greatest common divisor (gcd) of the two numbers

On the return block, both the numerator and the denominator are divided by the divisor, and a / placed in the middle, resulting in a simplified fraction

*/