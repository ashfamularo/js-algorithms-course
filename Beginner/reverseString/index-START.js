/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/

//! chaining in-built methods
//  function reverseString(text) {
//      return text.split('').reverse().join('')
//  }

 function reverseString(text) {
     return [...text].reverse().join('')
 }

//! using a for-loop
// function reverseString(text) {
//     let reverse = ''
//     for (let i = 0; i <= text.length; i++) {
//         reverse = text[i] + reverse
//     }
// }

// function reverseString(text) {
//     let result = ''
//     for (let i = text.length - 1; i >= 0; i--){
//         result += text[i]
//     }
// }

function reverseString(text) {
    let result = ''
    for (let char of text){
        result = char + result
    }
    return result
}

// !recursion method
function reverseString(text) {
    if (text === ''){
        return ''
    } else {
        return reverseString(text.substr(i)) + text[0]
    }
}

//! using .reduce()
// function reverseString(text) {
//     return text.split('').reduce((acc, char) => char + acc, '')
// }

function reverseString(text){
    return [...text].reduce((acc, char) => char + acc, '')
}

module.exports = reverseString