// DESCRIPTION:
// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns “(123) 456-7890”
// The returned format must be correct in order to complete this challenge.

// const phoneNumberIt = (arr) => {
//     res = []

//     // for(let i = 0; i < arr.length; i++){
//     //     res += '(' + arr.slice(arr[0], arr[3]) + ')' 
//     // }
//     res.push('(' + arr.slice(0,3)  + ') ' + arr.slice(3,6) + '-' + arr.slice(-4))
//     console.log(res[0])
//     return res[0].join('')
// }
// console.log(phoneNumberIt([1,2,3,4,5,6,7,8,9,0]))

function createPhoneNumber(numbers){
    var format = "(xxx) xxx-xxxx";
    
    for(var i = 0; i < numbers.length; i++)
    {
      format = format.replace('x', numbers[i]);
    }
    
    return format;
  }