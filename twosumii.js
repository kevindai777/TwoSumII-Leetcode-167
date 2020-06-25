//Objective is the same as 'Two Sum' except the array is now sorted.
//If nothing is found, return [-1, -1]

let arr = [2,6,11,15]
let target = 9


//O(n) solution that uses a 2-pointer approach from front and back.

let left = 0
let right = arr.length - 1

while (left < right) {
    let sum = arr[left] + arr[right]
    if (sum == target) {
        return [left + 1, right + 1]
    } else if (sum < target) {
        left++
    } else {
        right--
    }
}

return [-1,-1]