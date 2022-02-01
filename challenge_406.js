/*
https://github.com/beginner-codes/challenges/blob/main/weekday/challenge_406.md

Challenge:
    moving_partition([-1, -1, -1, -1])
    ➞ [[[-1], [-1, -1, -1]], [[-1, -1], [-1, -1]], [[-1, -1, -1], [-1]]]

    moving_partition([1, 2, 3, 4, 5])
    ➞ [[[1], [2, 3, 4, 5]], [[1, 2], [3, 4, 5]], [[1, 2, 3], [4, 5]], [[1, 2, 3, 4], [5]]]

    moving_partition([]) ➞ []

With an n input, your output should be a list containing n-1 sublists. Each sublist should have two elements: the left and the right side of the partition (both should be non-empty, unless the input list is empty).
An empty list should return an empty list: []
*/

//Solution
const moving_partition = a => a.map((e,i,a)=> ([a.slice(0,i),a.slice(i)])).slice(1)


//Testing
const testArray1 = [1,2,3,4,5]
const testArray2 = ['banana', 'apple', 'kiwi', 'pear', 'orange']

console.log(moving_partition(testArray1))
console.log(moving_partition(testArray2))
