// // O(n^2) - Nested for loop - 12 min
// const getMaxSubSumV2 = (arr) => {
//     if (!arr || arr.length === 0) {
//         return 0;
//     }

//     let maxSubSum = 0;
//     let currMaxSubSum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i; j < arr.length; j++) {
//             let currNum = arr[j]; // 2
//             currMaxSubSum += currNum;

//             if (currMaxSubSum > maxSubSum) {
//                 maxSubSum = currMaxSubSum;
//             }
//         }

//         currMaxSubSum = 0;
//     }

//     return maxSubSum;
// };

// // arr = [600, -400, 700, 3, -9]

// // O(n) - WIP
// /*

//     arr = [300, -400, 700, 3, -9]
//     Real Max Sum = 703

//     maxSum = 300
//     currArr = [700]

//     if (currSum < 0) {
//         if (currNum >= 0) {
//             currSum = currNum
//             currArr = [currNum]
//         }
//      } else {
//          if (currNum >= 0) {
//             currSum += currNum
//             currArr.push(currNum)
//         }
//      }

//      if (maxSum < currSum) {
//          maxSum = currSum
//      }

//     currSum = -100

//     [600, ]

//     - Two-pointers
//     - Hash Map (Object)
//     - Starting from the middle
//     - 

// */


// /*
//     arr = [-1, 2, 3, -9]

//     maxLeft = 0
//     maxRight = arr.length - 1
//     maxSubArr = [-1, 2, 3, -9]
//     maxSum = -5

//     left = 0
//     right = arr.length - 1      // 5
//     currSum = -5
//     currSubArr = [-1, 2, 3, -9]

//     while (left < right) {

//         if (arr[left] <= arr[right]) {
//             currSum -= arr[left]

//             if (currSum > maxSum) {
//                 left += 1
//             }
//         } else {
//             currSum -= arr[right]
//         }
//     }
// */

// /*

//     [10, -700, 30, 10]

//     10, 30, 40

//     10, 0, 30, 40


//     [-1, 2, 3, -9, 11]

//     0, 2, 5, 11

//     -1, 0, 2, 5, -4, 0, 11


// */
// const getMaxSubSum = (arr) => {
//     if (!arr || arr.length === 0) {
//         return [];
//     }

//     let maxSubSum = 0;
//     let currMaxSubSum = 0;

//     let i = 0;

//     while (i < arr.length) {
//         const currNum = arr[i];

//     }

//     return arr;
// };


// [-1, 2, 3, -9]
const getMaxSubSum = (arr) => {
    if (!arr || arr.length === 0) {
        return 0;
    }

    let maxSum = 0;
    let partialSum = 0;

    for (let num of arr) {
        partialSum += num;

        if (partialSum > maxSum) {
            maxSum = partialSum;
        }

        if (partialSum < 0) {
            partialSum = 0;
        }
    }

    return maxSum;
};




console.log(getMaxSubSum([-1, 2, 3, -9]));
console.log(getMaxSubSum([2, -1, 2, 3, -9]));
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
console.log(getMaxSubSum([-2, -1, 1, 2]));
console.log(getMaxSubSum([100, -9, 2, -3, 5]));
console.log(getMaxSubSum([1, 2, 3]));