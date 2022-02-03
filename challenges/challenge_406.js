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


//Notes
/*
Array.slice(start,end) 
.slice() always returns the second half of the array after slicing it, as a new array
By using map, I iterate over the array and for each element I return an array with the result of calling slice twice 
Each iteration returns an array containing two arrays
 - .slice(0,i) - Slices the array from the start up to that iterations index
 - .slice(i) - Slices the array from the current index until the last elemtent

 Calling .slice(1) on the resulting array from map ensures that the list is n-1 elements and the first iteration
 where .slice(0,0) would be called ( producing an empty array), is removed.
 */