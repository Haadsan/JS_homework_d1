// https://gist.github.com/johnmcc/7130f2046f27f6659b2020110ecf6ce5

// Episode 1
// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Library',
//   weapon: 'Rope'
// };
//
// const declareMurderer = function() {
//   return `The murderer is ${scenario.murderer}.`;
// }
//
// const verdict = declareMurderer();
// console.log(verdict);

 // Miss Scarlet will be printed


// Episode 2
// const murderer = 'Professor Plum';
//
// const changeMurderer = function() {
//  murderer = 'Mrs. Peacock';
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

//  you can't change const and will type error. If you comment const murderer = 'Professor Plum';, then it will print
// The murderer is Mrs. Peacock.
// //
// // Episode 3
//
// let murderer = 'Professor Plum';
// // declaremuder is a variable and the value is defined in the return of the function
// const declareMurderer = function() {
// // let is local to the function and if removed (let) it will be global wich overrides everything
// let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }
//
// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);
//
// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

// first verdict will print Mrs. Peacock
// second verdict will print Professor Plum.

// // Episode 4
//
// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';
//
// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }
//
// const declareWhatever = function() {
//   let suspectThree = 'Hadsan';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }
// const suspecto = declareWhatever();
// console.log(suspecto)
//
// const suspects = declareAllSuspects();
//
// console.log(suspects);
//
// console.log(`Suspect three is ${suspectThree}.`);
//
// // Episode 5
//
//
// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Kitchen',
//   weapon: 'Candle Stick'
// };
//
// const changeWeapon = function(newWeapon) {
//   scenario.weapon = newWeapon;
// }
//
// const declareWeapon = function() {
//   return `The weapon is the ${scenario.weapon}.`;
// }
//
// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);

// even though it's const you can change elements of scenario and will print Revolver

 // Episode 6

// let murderer = 'Colonel Mustard';
//
// const changeMurderer = function() {
//   murderer = 'Mr. Green';
//
//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }
//
//   plotTwist();
// }
//
// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }
//
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);
//
// // Episode 7
let murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    let murderer = 'Colonel Mustard';

    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';
    }

    unexpectedOutcome();
  }

  plotTwist();
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

//
// // Episode 8

// const scenario = {
//   murderer: 'Mrs. Peacock',
//   room: 'Conservatory',
//   weapon: 'Lead Pipe'
// };
//
// const changeScenario = function() {
//   scenario.murderer = 'Mrs. Peacock';
//   scenario.room = 'Dining Room';
//
//   const plotTwist = function(room) {
//     if (scenario.room === room) {
//       scenario.murderer = 'Colonel Mustard';
//     }
//
//     const unexpectedOutcome = function(murderer) {
//       if (scenario.murderer === murderer) {
//         scenario.weapon = 'Candle Stick';
//       }
//     }
//
//     unexpectedOutcome('Colonel Mustard');
//   }
//
//   plotTwist('Dining Room');
// }
//
// const declareWeapon = function() {
//   return `The weapon is ${scenario.weapon}.`
// }
// // const declareMurderer = function() {
// //   return `The murderer is ${scenario.murderer}.`
// // }
// //
// // const declareRoom = function() {
// //   return `The room is ${scenario.room}.`
// // }
// changeScenario();
// const verdictWeapon = declareWeapon();
// console.log(verdictWeapon);

// const verdict = declareMurderer();
// console.log(verdict);
//
// const verdictRoom = declareRoom();
// console.log(verdictRoom);



// Episode 9

// let murderer = 'Professor Plum';
//
// if (murderer === 'Professor Plum') {
//   let murderer = 'Mrs. Peacock';
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// const verdict = declareMurderer();
// console.log(verdict);
