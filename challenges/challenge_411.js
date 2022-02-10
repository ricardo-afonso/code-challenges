/*
https://github.com/beginnerpy-com/challenges/blob/main/weekday/challenge_411.md
411 - Poker Full House

Create a function that determines whether a player is holding a Full House in their hand. A hand is represented as a list of 5 cards. A full house is defined as a pair of cards and a three-of-a-kind.

To illustrate: ["A", "A", "A", "K", "K"] would be a Full House, since the player holds 3 aces and a pair of kings.

*/


//Solution

const full_house = a => new Set(a).size === 2 && a.every((e,_,r)=> r.indexOf(e)!=r.lastIndexOf(e))


//Testing
describe('Challenge 411 - Full house', () => {
  test('A+K-> true', () => {
    expect(full_house(["A", "A", "A", "K", "K"])).toBe(true)
  })
  test('3+J-> true', () => {
    expect(full_house(["3", "J", "J", "3", "3"])).toBe(true)
  })
  test('10+J-> true', () => {
    expect(full_house(["10", "J", "10", "J", "10"])).toBe(true)
  })
  test('7+j+3+4+2-> false', () => {
    expect(full_house(["7", "J", "3", "4", "2"])).toBe(false)
  })
  test('10+J+2-> false', () => {
    expect(full_house(["10", "J", "J", "2", "2"])).toBe(false)
  })

})



//Long version - Explanation


// define a fn that takes an array
const fullHouse = array => {
  // Defining a new set from the array, which will remove all duplicates
  let arrSet = new Set(array)
  // check the set size, it should be 2 because on a full house there are only 2 different cards
  let setSize = arrSet.size 

  // Even with a set size of two, we could still have 4 of one card, and 1 of the other - not a full house
  // check for this condition:
  // every checks if the passed condition/fn returns true for every element of the array
  let hasDuplicateElems = array.every((element,index, arr) => {
    // Checking if the first and last index of where each element is found is different. If that's
    // true then every element has at least 1 duplicate
    return arr.indexOf(element) != arr.lastIndexOf(element)
  })
  // If the set size is 2 ( 2 different elemtns in the array), and there is at least one duplicate of each element
  // then the only possibility for a 5 element array is 2 of one element and 3 of the other -> full house

  if(setSize === 2 && hasDuplicateElems) {
    return true
  } else {
    return false
  }
}