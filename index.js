/* WRITE THE CODE FOR THE FOLLOWING FUNCTIONS */

// Input: a (number), b (number)
// Action: Add both numbers together
// Output: The result (number)
    let number1 = Number(prompt('Add a number'))
    let number2 = Number(prompt('Add another number'))
function add() {
    // let bothNumbers = [Number(prompt('Add a number')), Number(prompt('Add another number'))]
    let result = number1 + number2
    console.log(result)
    return result
  }
  add()
  
  // Input: number
  // Action: Check if the number given is even or not
  // Output: The result (boolean)
  function isEven() {
    if (add() % 2 === 0) {
         console.log(Boolean(true))
    } else {
        console.log(`The calculated number is not even`)
    }
  }
  isEven()

  let personName = String(prompt('Enter your name!'))

  // Input: name (string)
  // Action: Greet the user by name
  // Output: The greeting (string)
  function greet(name = undefined) {
    console.log(`Hello ${personName}`)
    // write your code here
  }
  greet()
  
  let personAge = Number(prompt('How old are you'))

  // Input: age (number)
  // Action: Check if the age is 18 or over
  // Output: The result (boolean)
  function isAnAdult(age = 0) {
    if (personAge < 18) {
        console.log(Boolean(false))
    }
  }
  isAnAdult()
   

  let adultAge = Number(18)
  let resultOfAge = adultAge - personAge
  // Input: age (number)
  // Action: Check how many years are left until adulthood (18)
  // Output: The result (number)
  function yearsToAdulthood() {
    let adultAge = Number(18)
    let resultOfAge = adultAge - personAge
    if (resultOfAge > 0 ) {
        console.log(`${resultOfAge} years`)
    }
  }
  yearsToAdulthood()
  
  // Input: person ({ age: number, name: string })
  // Action:
  //   - check if a person is an adult
  //   - if they are, greet them
  //   - if they are not, tell them to come back in X years (when they are)
  // Output: The result (string)
  function admit() {
    let agaOfperson = personAge
    if (agaOfperson > 18) {
        console.log(`Hello ${personName}`)
    } else {
        console.log(`Come back in ${resultOfAge} years!`)
    }
  }
  admit()
  