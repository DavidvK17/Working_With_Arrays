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

function calcAverageHumanAge(ages) {
  ages.forEach(age => {
    let humanAge;
    age <= 2 ? (humanAge = 2 * age) : (humanAge = 16 + age * 4);
  });
}

calcAverageHumanAge(dogAges);
