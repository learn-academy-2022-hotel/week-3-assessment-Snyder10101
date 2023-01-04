// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// // a) Create a test with expect statements for each of the variables provided.
const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
// TEST 
describe ("fibSeq", () => {
  it ("takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence ", () =>{
    expect(fibSeq(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
    expect(fibSeq(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  }) 
})
// Ran yarn jest
// ReferenceError: fibSeq is not defined (good error)

// b) Create the function that makes the test pass.

const fibSeq = (array) => {
  let fib = []
  // Initialize array!
  // number sequences
  let zero = 0
  let one = 1
  // Next fibonacci number = previous + one before previous
 for ( let i = 0;  i <array+1; i++){
  // create a loop 
   let bothNum = zero + one;
  fib.push(zero);
  zero = one;
  one = bothNum;
 }
 fib.shift()
  return fib
}

// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.
describe("inOrder", () => {
  it("takes in an object and returns an array of the values sorted from least to greatest", () => {
    const studyMinutesWeek1 = {
      sunday: 90,
      monday: 30,
      tuesday: 20,
      wednesday: 15,
      thursday: 30,
      friday: 15,
      saturday: 60
    }
    const studyMinutesWeek2 = {
      sunday: 100,
      monday: 10,
      tuesday: 45,
      wednesday: 60,
      thursday: 20,
      friday: 15,
      saturday: 65
    }
    expect (inOrder(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
    expect (inOrder(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
  })
  // Expected output: [15, 15, 20, 30, 30, 60, 90]
  // Expected output: [10, 15, 20, 45, 60, 65, 100]
})
// console.log(Object.values(studyMinutes))
// ReferenceError: inOrder is not defined
// good error



// b) Create the function that makes the test pass.
let inOrder = (obj) => {
  // create a variable with object.value to return an array with the objects values
  let arrayValue = Object.values(obj)
  // I make a method by basically says hey obj make arrayValue the manipulation of values 
  arrayValue.push(obj[arrayValue])
  //return the values in order of least to greatest
  return arrayValue.sort((a, b) => a - b)
  }


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.
const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]
const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]
const accountTransactions3 = []
// Expected output: []
describe("accSum", () => {
 it("takes in an array and returns an array of the accumulating sum", () => {
expect (accSum(accountTransactions1)).toEqual([100, 83, 60, 51])
expect (accSum(accountTransactions2)).toEqual([250, 161, 261, 165])
expect (accSum(accountTransactions3)).toEqual([])
 })
 // ReferenceError: accSum is not defined good error
})


// b) Create the function that makes the test pass.
// accSum is the fuction
const accSum = (array) => {

let val = array[0] 

let sumArray = []
// makeshift array

for (let i=0; i < array.length; i++) {
   if (array === []) {
  return array
//returning empty array
 } else if (i === 0) {
  sumArray.push(val)
// console.log(sumArray.push(val))
 } else {
  sumArray.push(array[i] + sumArray[i-1])
 }
 //pushing the sum into the array
}
return sumArray
}
