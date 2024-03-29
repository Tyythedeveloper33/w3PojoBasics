/***********************************************************************
Write a function `getFullName(person)` that takes in an person object
and returns a string containing their full name.


Examples:
let p1 = {firstName: 'John', lastName: 'Doe'};
getFullName(p1); // => 'John Doe'
let p2 = {firstName: 'Charlie', lastName: 'Brown', age: 9};
getFullName(p2); // => 'Charlie Brown'
***********************************************************************/
let p1 = {firstName: 'John', lastName: 'Doe'};

function getFullName(person) {
  // Your code here
  let string = ''
for(let i = 1; i <= 2 ; i++){
  if(i = 1){
    string += person.firstName + " "
  }
  if(i = 2){
    string += person.lastName
  }

}
return string
}
console.log(getFullName(p1))
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = getFullName;
