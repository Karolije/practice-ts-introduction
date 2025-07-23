// Nie są określone typy więc domyślnie wszystkie są any a wartości undefined

let firstName;
// mógłby być string
let age;
// mógłby być number
let isStudent;
// mógłby być boolean
let empty;

let notDefined


function getBasicTypes(): object {
  return {
    firstName,
    age,
    isStudent,
    empty,
    notDefined,
  };
}

console.log(getBasicTypes());