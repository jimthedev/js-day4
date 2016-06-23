// // Mutability

// function change(obj) {
  
//   obj.count = obj.count + 1;

//   obj.count = obj.count + 2;

//   obj.count = obj.count + 3;

//   return obj;
// }

// var truck = { count: 5, name: 'Pizza' };

// var i = change(truck); // Truck passed by reference

// // Reference = instead of making a copy, we pass a pointer


// console.log(i);
// console.log(truck);

// // Immutability


// // Unfunctional function / non-pure functions
// var a = 0;

// function increment() {
//   a++; // side effect
// }

// function say0() { // doesn't know about side effects
//   console.log(a);
// }

// increment();  // side effect 
// say0();  // error it says 1 instead!


// // Functional function / pure function 

// function increment(b) {
//   return b++; // No side effect because b only exists inside this function
// }

// function say0(b) {
//   console.log(b);
// }

// var a = 0;
// var c = increment(a);  // c = 1, a = 0
// var d = increment(c);  // d = 2, a = 0
// var e = increment(d);  // e = 3, a = 0
// var f = increment(e);  // f = 4, a = 0
// var g = increment(f);  // g = 5, a = 0
// say0(a); // 0 
// console.log(c); // 1


// Iterating


// Mutation / Unfunctional function / loop
// var names = ['Tim', 'Joan', 'Joe', 'Alec', 'Hunter'];

// for (var i = 0; i < names.length; i++) {
//   console.log(names[i] = "Jim"); // effect
//   //console.log(names.push("Jim")); // !!! infinite loop, crashes your browser
// }

// // print names
// console.log(names);


// // A bit better unfunctional / non-pure approach

// // Mutating still, but a bit better because
// // we use two arrays.

// // We wish forEach would not force us to mutate

// var names = ['Tim', 'Joan', 'Joe', 'Alec', 'Hunter'];
// var jim = [];

// names.forEach(function(v, i) {
//   jim.push('Jim'); // mutating, side effect
// });

// // output an array where Jim every value in an array
// // of names.length
// console.log(jim);
// console.log(names);


// Functional approach

// var names = ['Tim', 'Joan', 'Joe', 'Alec', 'Hunter'];

// var jim = names.map(function(v, i){
//   console.log(v);
//   return v.toUpperCase() + i;
// });

// console.log(jim);
// console.log(names);

// var numbers = [0, 1, 2, 3, 4];

// var squares = numbers.map(function(v, i){
//   return v*v;
// });

// console.log(squares);
// console.log(numbers);



              // string    // array    // map
// var squares = "0 1 2 3 4 5".split(' ').map(function(v, i){
//   return v*v;
// });

// console.log(squares);


// var names = ['Tim', 'Joan', 'Joe', 'Alec', 'Hunter'];
// var codenames = ['T-bone', 'Astronaut', 'Tiger', 'Big Al', 'Tiki'];

// names = names.map(function(v, i){
//   if(i % 2 === 0) { // even
//     return codenames[i];
//   } else { // odd
//     return names[i];
//   }
// });

// console.log(names);

// Unfunctional

// var numbers = [0, 1, 2, 3, 4, 5];
// var sum = 0;

// for (var i = 0; i < numbers.length; i++) {
//   sum = numbers[i]+sum; // side effect
// }
// console.log(sum);

// Functional

// var numbers = [0, 1, 2, 3, 4, 5];

// var sum = numbers.reduce(function(a, b) {
//   console.log('a is: ' + a);
//   console.log('b is: ' + b);
//   return a+b; // the accumulator for the next run of
//   // the loop, should be a+b.
// });

// console.log(sum);



// var letters = [5, 5, 'c', 5, 5, 'f'];

// var sum = letters.reduce(function(a, b) {
//   console.log('a is: ' + a);
//   console.log('b is: ' + b);
//   return a+''+b; // the accumulator for the next run of
//   // the loop, should be a+b.
// });

// console.log(sum);

// // Loop through all of the names in the array
// // use a new array that contains the counts of 
// // characters from the original array

// function numChars(names) {
//   // // Method 1 -- chaining
//   // return names.map(function(name){
//   //   return name.length; 
//   // }).reduce(function(a,b){
//   //   return a + b;  
//   // });

//   // Method 2 -- not chaining
//   var charsArray = names.map(function(name) {
//     return name.length
//   });

//   var charsSum = charsArray.reduce(function(a,b){
//     return a+b;
//   });
//   return charsSum;
// }

// console.assert(numChars(['Tim', 'Joan', 'Joe', 'Alec', 'Hunter'])===20);


// var names = ['Tim', 'Joan', 'Joe', 'Alec', 'Hunter'];

// var namesWithoutO = names.filter(function(name) {
//   if(name.toLowerCase().indexOf('o') > -1) { // If o is found 
//     return false; // Remove it from the array
//   } else { // o was not found
//     return true; // Keep it in the array
//   }
// });

// console.log(namesWithoutO);






// var codenames = ['T-bone', 'Astronaut', 'Tiger', 'Big Al', 'Tiki', 'Prancy'];

// var charsOfWordsWithoutO = codenames.filter(function(name) {
//   return name.indexOf('o') <= -1;
// }).map(function(name) {
//   return name.length;
// }).reduce(function(a,b){
//   return a+b;
// });
//console.assert(charsOfWordsWithoutO === 21);

// // Removes items from an array
// // returns an array that may be the same size or smaller
// // than the original
// // 
// // Useful for making sure that there are no undefined
// // values in an array
// // > [1,3,5]
// var wordsWithoutO = codenames.filter(
  
//   function(v, i) {
//     if(v.indexOf('o') <= -1) {
//       return true;
//     } else {
//       return false;
//     }
//   }


// );

// // > ['Tiger', 'Big Al', 'Tiki', 'Prancy']
 
// // Transforms single items in an array
// // returns an array that is the same size as the original
// //
// // Is useful for making sure that the array is of the same
// // size, but, there may be undefined values
// // > [1, , 3, , 5]
// var wordLengths = wordsWithoutO.map(function(name){
//   return name.length;
// });

// // Transforms the entire array as a unit
// // returns some aggregate value based on every item in
// // the array (aggregator)
// // > 9
// var sum = wordLengths.reduce(function(a,b){
//   return a+b;
// });

// console.assert(sum === 21);






