/*

https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_412.md

412 - Is the Phone Number Formatted Correctly?

Create a function that accepts a string and returns True if it's in the format of a proper phone number and False if it's not. Assume any number between 0-9 (in the appropriate spots) will produce a valid phone number.

This is what a valid phone number looks like: (123) 456-7890

*/


//Solution

let is_valid_phone_number = s => /^\((\d{3})\)\s(\d{3})-(\d{4})$/g.test(s)


//Testing
describe('Challenge 412 - Valid Phone nr', () => {
  test('"(123) 456-7890" -> true', () => {
    expect(is_valid_phone_number("(123) 456-7890")).toBe(true)
  })
  test('"1111)555 2345" -> false', () => {
    expect(is_valid_phone_number("1111)555 2345")).toBe(false)
  })
  test('"111 222 3456" -> false', () => {
    expect(is_valid_phone_number("111 222 3456")).toBe(false)
  })
})



//Notes
/*
 [regex].test tests a given string to match the regex.

 I copied the regex from online. ¯\_(ツ)_/¯

*/