'use strict'

// function foo() {
//   console.log('hello world')
// }

let foo = () => console.log('hello world')
// no params, empty parens required
// return is implicit on one liner
// no curly brackets required on one liner

// old school way of function definition
// creates function scope
let sumTwoNums = function(one, two) { return one + two }
let subTwoNums =         (one, two) =>       one - two

someArray.map(x => x * 2);

someArray.map(function (x) { return x * 2; })

// two or more params need parens
// return is implicit on one liner
// no curly brackets required on one liner

let multByTwo = num => num * 2
// only one param, no parens required
// return is implicit on one liner
// no curly brackets required on one liner

const doMath = num => ({
  double: num * 2,
  negative: -num,
});

let doMath2 = function (num) {
  return {
    double: num * 2,
    negative: -num,
  };
}

let multByThree = (num) => {
  let newVal = num * 3
  return newVal
}

// context of 'this' keyword effected by arrow functions
let obj = {
  name: 'Scott',
  pets: ['Pluto', 'Dog'],
  whatIsThis: () => console.log(this), // => Window!
  speak: () => console.log(this.name), // => undefined
  action: 'Pet'
  speakThatWorks: function() {
    console.log(this.name)
    console.log(this.pets.map(pet => `I am now going to ${this.action} my pet ${pet}`));
  }
}

function Person(name, pets) {
  this.name = name;
  this.pets = pets;
}

Person.prototype.nameMyPets = function() {
  this.pets.forEach(pet => console.log(`${this.name}'s pet is ${pet}'`));
}

// Does not work because arrow function methods don't get correct this
Person.prototype.nameMyPets2 = () => {
  this.pets.forEach(pet => console.log(`${this.name}'s pet is ${pet}'`));
}

// Does not work because forEach function has wrong this
Person.prototype.nameMyPets2 = function() {
  this.pets.forEach(function (pet) { console.log(`${this.name}'s pet is ${pet}'`); });
}

// Works because we're capturing name
Person.prototype.nameMyPets3 = function() => {
  var name = this.name;
  this.pets.forEach(function(pet) { console.log(`${name}'s pet is ${pet}'`) });
}

// Works because we're capturing this as that in correct scope
Person.prototype.nameMyPets3 = function() => {
  var that = this;
  this.pets.forEach(function(pet) { console.log(`${that.name}'s pet is ${pet}'`) });
}
