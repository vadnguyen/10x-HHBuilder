// your code goes here ...

let ERROR_MSG = ''
let MOCK_SAVE_MSG = ''
let FAMILY_COUNTER = 0
const FAMILY_OBJ_ARR = []
let AGE = null
let REL = null
let SMOKER = null
let FAMILY_OBJ = { id: FAMILY_COUNTER, age: AGE, rel: REL, smoker: SMOKER }
// format of family object
// familyObj = { 
//   age: 1, 
//   rel: 'Mom', 
//   index: 0
// }
const checkSmoker = ($event) => {
  console.log('** SMOKER START **')

  const isChecked = $event.target.checked
  SMOKER = isChecked ? 'yes' : 'no'
  FAMILY_OBJ.smoker = SMOKER
  console.log(FAMILY_OBJ)
  printOut()
  console.log('** SMOKER END **')
}
const isAgeValid = ($event) => {
  console.log('** AGE VALIDATION START **')
  // simple check for value > 0 
  // ENHANCEMENT: 
  // 1. need regex to mask input value 
  // 2. provide immediate feedback via inline validation to check input value is an integer or not 
  //    and input value must be greater than '0'
  ERROR_MSG = ''
  const val = $event.target.value
  if (isNaN(val)) {
    AGE = null
    ERROR_MSG = 'Please enter a valid number for age.'
  } else if (val < 1) {
    AGE = null
    ERROR_MSG = 'Please enter a value greater than zero for age.'
  } else {
    ERROR_MSG = ''
    AGE = val
  }
  FAMILY_OBJ.age = AGE
  printOut()
  console.log('** AGE VALIDATION END **')
}

const selectRel = ($event) => {
  console.log('** RELATIONSHIP START **')
  const val = $event.target.value
  REL = val
  FAMILY_OBJ.rel = REL
  console.log('** RELATIONSHIP END **')
  printOut()
}

const addFamily = ($event) => {
  console.log('** ADD FAMILY START **')
  FAMILY_OBJ_ARR.push(FAMILY_OBJ)
  // reset the global values
  AGE = null
  REL = null
  SMOKER = null
  FAMILY_COUNTER += 1
  console.log('** ADD FAMILY END **')
}

const saveForm = ($event) => {
  console.log('** SAVE FORM START **')
  if (FAMILY_OBJ_ARR?.length > 0) {
    MOCK_SAVE_MSG = `'SAVED FAMILY DATA!!' <br /> ${FAMILY_OBJ_ARR
      .length} + 'family records.'`
  } else {
    MOCK_SAVE_MSG = 'SAVED FAMILY DATA!!'
  }
  if (MOCK_SAVE_MSG.length > 0) {
    document.getElementById("output").innerHTML = MOCK_SAVE_MSG
  }
  console.log('** SAVE FORM END **')
}

const printOut = () => {
  console.log('pint family obj', FAMILY_OBJ_ARR)
  if (ERROR_MSG?.length > 0) {
    document.getElementById("output").innerHTML = ERROR_MSG
  } else {
    document.getElementById("output").innerHTML = `<li>
   ${'Age: ' + AGE + ' | ' + 'Relationship: ' + REL + ' | Is a Smoker: ' + SMOKER}
    </li>`
  }
}