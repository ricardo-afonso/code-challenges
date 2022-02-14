/*

https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_415md

415 - Letter Distance

Given two words, the letter distance is calculated by taking the absolute value of the difference in character codes and summing up the difference.

If one word is longer than another, add the difference in lengths towards the score.

To illustrate:
letter_distance("house", "fly") = dist("h", "f") + dist("o", "l") + dist("u", "y") + dist(house.length, fly.length)

= |104 - 102| + |111 - 108| + |117 - 121| + |5 - 3|
= 2 + 3 + 4 + 2
= 11
*/


//Solution

const letter_distance = (a,b)=>  Array([a,b].reduce((a,b)=> a.length<=b.length?a:b).length).fill(0).map((e,i)=> Math.abs(a[i].charCodeAt()-b[i].charCodeAt())).reduce((q,w)=>q+w) + Math.abs(a.length - b.length)


//Testing
describe('Challenge 415 - Letter Distance', () => {
  test('house,fly -> 5', () => {
    expect(letter_distance('house','fly')).toBe(11)
  })
  test('sharp,sharq -> 1', () => {
    expect(letter_distance('sharp','sharq')).toBe(1)
  })
  test('abcde,Abcde -> 32', () => {
    expect(letter_distance('abcde','Abcde')).toBe(32)
  })
  test('abcde,bcdef -> 5', () => {
    expect(letter_distance('abcde','bcdef')).toBe(5)
  })

})


//Explanation

const letterDistance = (firstWord, secondWord) => {
  // create a array from both words
  let wordsInArray = [firstWord, secondWord]
  // find the smallest of two words. Compare length and only return the smallest to the accumulator
  let smallestWord = wordsInArray.reduce((a,b)=> a.length <= b.length ? a : b)
  let smallestLength = smallestWord.length
  //To keep the code in one line, instead of a for loop using the smallest length, I created
  // a new array of the desired length and filled it with 0s, which allows me to iterate over
  let sizedArray = Array(smallestLength).fill(0)

  // Iterate the sized array ( it's elements are irrelevant, only index matters), and calculate the
  // difference between char codes between each pair of letters on the same index. Return the Abs of that.
  let charCodeDifferences = sizedArray.map((element, index) => {
    let difference = firstWord[index].charCodeAt() - secondWord[index].charCodeAt()
    return Math.abs(difference)
  })
  // Sum the previous array
  let sumOfCharCodeDifferences = charCodeDifferences.reduce((a,b)=> a+b)

  let lengthDifference = Math.abs(firstWord.length - secondWord.length)

  return sumOfCharCodeDifferences + lengthDifference
}