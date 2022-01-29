'use strict';

// So each of them asked 5 dog owners
// about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy.
// A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

// Test Data:
// Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]

// Challenge 1: Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'),

const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

function checkDogs() {
  // challenge 2: Julia found out that the owners of the first and the last two dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
  const copyDogsJulia = dogsJulia.slice(1, -2);
  console.log(copyDogsJulia);

  //  Create an array with both Julia's (corrected) and Kate's data
  const allDogs = [...copyDogsJulia, ...dogsKate];
  console.log(allDogs);

  // Challenge 3:  For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy �"
  allDogs.forEach((age, dog) => {
    if (age >= 3) {
      console.log(
        `Dog number ${dog + 1} is an adult, and is ${age} years old.`
      );
    } else if (age > 0 && age < 3) {
      console.log(`Dog number ${dog + 1} is still a puppy 🐶.`);
    }
  });
}

checkDogs();

// Now Julia and Kate want to convert dog ages to human ages and calculate the average age of the dogs in their study.

// Challenge 4: Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages') Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4

// Test Data
const dogAges = [5, 2, 4, 1, 15, 8, 3];

const dogHumanAges = [];
function calcAverageHumanAge(ages) {
  ages.forEach(age => {
    let humanAge;
    age <= 2 ? (humanAge = 2 * age) : (humanAge = 16 + age * 4);
    return dogHumanAges.push(humanAge);
  });
}

calcAverageHumanAge(dogAges);

//Challenge 5: Exclude all dogs that are less than 18 human years old
const adultHumanDogs = dogHumanAges.filter(age => age > 18);
console.log(adultHumanDogs);

// Challenge 6: Calculate the average human age of all adult dogs
function avgHumanAgeDogs() {
  let avgAge = 0;
  adultHumanDogs.forEach(dog => (avgAge += dog));
  return (avgAge /= adultHumanDogs.length);
}

console.log(avgHumanAgeDogs());

// Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little. Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite. Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion

// Test Data

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

// Challenge 7: Loop over the 'dogs' array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do not create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)

const ownersEatTooMuch = [];
const ownersEatTooLittle = [];

dogs.forEach((dog, i) => {
  dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);

  // Challenge 8: Find Sarah's dog and log to the console whether it's eating too much or too little
  const dogSarah = dog.owners.includes('Sarah');

  if (dogSarah && dog.curFood < 0.9 * dog.recommendedFood) {
    console.log(`Sarahs dog is eating too little`);
  } else if (dogSarah && dog.curFood > 1.1 * dog.recommendedFood) {
    console.log(`Sarahs dog is eating too much`);
  }

  // Challenge 9;   Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').

  if (dog.curFood < 0.9 * dog.recommendedFood) {
    ownersEatTooLittle.push(dog.owners);
  } else if (dog.curFood > 1.1 * dog.recommendedFood) {
    ownersEatTooMuch.push(dog.owners);
  }

  // Challenge 11: Log to the console whether there is any dog eating exactly the amount of food that is recommended (just true or false)
  dog.curFood === dog.recommendedFood
    ? console.log('True')
    : console.log('False');

  // Challenge 13: Create an array containing the dogs that are eating an okay amount of food
  const dogsOkay = [];

  // Challenge 12:  Log to the console whether there is any dog eating an okay amount of food (just true or false)
  if (
    dog.curFood >= 0.9 * dog.recommendedFood &&
    dog.curFood <= 1.1 * dog.recommendedFood
  ) {
    console.log('True');
    dogsOkay.push(dog);
  } else console.log('False');
  console.log(dogsOkay);
});
console.log(dogs);
console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);

// Challenge 10: Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"

const allOwnersEatTooMuch = ownersEatTooMuch.flat().join(' and ');
console.log(`${allOwnersEatTooMuch}'s dogs eat too much!`);

console.log(ownersEatTooLittle.flat().join(' and '));
console.log(`${allOwnersEatTooMuch}'s dogs eat too little!`);

// Challenge 14: Create a shallow copy of the 'dogs' array and sort it by recommended food portion in an ascending order
console.log(dogs);
const sortedDogs = dogs
  .slice(dog => dog)
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(sortedDogs);
