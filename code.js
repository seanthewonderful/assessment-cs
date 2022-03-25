let arr = [1,2,3,4]

function toZero(arr){
    for(let i=0; i<arr.length; i++){
        for(let j=1; j<arr.length; j++){
            if(arr[i]+arr[j] === 0){
                return true
            }else{
                return false
            }
        }
    }
}

console.log(toZero(arr))


function hasUniqueChars(word){
    let array = Array.from(word)
    let mySet = new Set(word)
    return array.length === mySet.size
    }   
// console.log(hasUniqueChars("Monday"))


const str1 = "The quick brown fox jumped over the lazy dog"
const str2 = "Nothing special about this sentence"
const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

// function pangram(str, array){
//     let arr = str.toLowerCase().split('')
//     // console.log(arr)
//     array.every(elem => arr.includes(elem))
// }
// // console.log(pangram(str1, letters))

// function isPangram(string) {
//     var regex = /([a-z])(?!.*\1)/g;
//     return (string.match(regex) || []).length === 26;
// }
// console.log(isPangram(str1))

let wordsArr = ["word", "wordle", "the", "house", "building"]

const longest = (arr) => arr.sort((a, b) => {
        return b.length - a.length;
    }
)[0]
console.log(longest(wordsArr))