/*

https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_414.md
Given a sentence spelling out a word, return True if the spelled letters match the word at the end of the string.

Examples
validate_spelling("C. Y. T. O. P. L. A. S. M. Cytoplasm?") ➞ True

validate_spelling("P. H. A. R. A. O. H. Pharaoh!") ➞ True

validate_spelling("H. A. N. K. E. R. C. H. E. I. F. Handkerchief.") ➞ False

Notes

- The word at the end is always spelled correctly.
- Spelled words will always end in punctuation (but ignore all punctuation).

*/


//Solution

const validate_spelling = s => s.split('. ').pop().slice(0,-1).toLowerCase() === s.split('. ').slice(0,-1).join('').toLowerCase()



//Testing
describe('Challenge 414 - Spelling Bee', () => {
  test('Cytoplasm? - True', () => {
    expect(validate_spelling("C. Y. T. O. P. L. A. S. M. Cytoplasm?")).toBe(true)
  })
  test('Pharaoh! - True', () => {
    expect(validate_spelling("P. H. A. R. A. O. H. Pharaoh!")).toBe(true)
  })
  test('Hankercheif. - False', () => {
    expect(validate_spelling("H. A. N. K. E. R. C. H. E. I. F. Handkerchief.")).toBe(false)
  })
})



//Explanation:

const validateSpelling = string => {
  //Split the string by ". ", since dots and spaces separate the spelling
  let splitString = string.split('. ')
  // returns the last element of the array, the correctly spelled word
  let correctWord = splitString.pop()
  // Slice the last character as that's always a punctionation, and transform it to lowercase
  let correctWordNormalized = correctWord.slice(0, -1).toLowerCase()

  //Spelled Word:
  // Remove the last element of the split array, since that's the correctly spelled word
  let spelledWordArr = splitString.slice(0,-1)
  // Joins the array into a word without spaces or commas, and transforms to lowerString
  let spelledWord = spelledWordArr.join('').toLowerCase()

  // compare the two strings
  return spelledWord === correctWordNormalized
}

