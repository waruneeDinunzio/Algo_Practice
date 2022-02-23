// var twoSum = function(nums, target) {
//     const prevNum = {}
//     for (let i=0; i<nums.length; i++) {
//         const currentNum = nums[i]
//         const neededValue = target - currentNum
//         const index2 = prevNum[neededValue]
//         //console.log(index2)
//         if (prevNum[neededValue] != null){
//             //return[index2, i]
//             console.log([index2, i])
//             // console.log(neededValue)
//             console.log(prevNum)
            
//         } else {
//             prevNum[currentNum] = i
//         }
//     }
// };
// twoSum([6,2,3,7], 9)

// var twoSum2 = function(nums, target) {
//     for( let i=0; i<nums.length; i++){
//         for( let j=i+1; j< nums.length; j++){
//             if(nums[i]+nums[j]===target){
//                 //return[i,j];
//                 console.log([i,j])
//             }
//         }
//     }
// }
// twoSum2([6,2,3,7], 9)

// 
// function largestOfFour(arr) {
//     for (let i=0; i < arr.length; i++){
//         let largestNum = arr[i][0]
//       for (let j=0; j < arr[i].length; j++ ) {
        
//         if (arr[i][j] > largestNum) {
//             largestNum = arr[i][j]
//         }
          
//       }
//       //console.log(largestNum)
//       arr[i] = largestNum
//       //console.log(arr)
//     }
//     //arr[] = 
//     console.log(arr)
//     //return arr[0]
//   }
  
// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

function compressedString(message) {
    // Write your code here
    let result;
    for (let i=0; i<message.length; i++) {
        let counter = 0;
        if (message.charAt(i) === message.charAt(i+1) && i !== message.length-1){
            counter += 1
            
            result = message.charAt(i)+counter
            console.log(result)

        } 
    }
}
compressedString("abaabbbc")