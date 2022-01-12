const arrayOfTen = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
const customArray = arrayOfTen;
/**
 * Write a function that prints every even number of a list of numbers
 */

function print_even_numbers( array ) {

  for (let item of array) {
    if ( item % 2 == 0 ){
      console.log( item );
    }
  }
  
}

/**
 * Look at the functions below, what is the time complexity?
 */
// 1. Even or odd

function isEven(value) {
  if( value % 2 === 0 ){
    return true;
  } else {
    return false;
  }
}

// 2. Are You Here?

/*
* Zit eerste item van array 1 in array 2
* Zitten alle items van array1 in array2?
*/

function areYouHere(arr1, arr2) {
  return arr1.filter( 
    arrElem => arr2.includes( arrElem )
  )
}

//console.log ( 'areyouhere', areYouHere( [10, 18, 17, 4, 14], [2, 16, 10, 14, 18] ) );

// 3. Doubler

/*
* Loop over een array en verdubbel de waarde
*/

function doubleArrayValues(array) {
  return array.map( elem => elem * 2)
}


console.log( 'doubleArrayValues', doubleArrayValues( [10, 18, 17, 4, 14] ));

// 4. Naive Search

function naiveSearch(array, item) {}

// 5. Creating Pairs

function createPairs(arr) {}

// 6. Computing Fibonacci Numbers

function generateFib(num) {}

// 7. Efficient Search

function efficientSearch(array, item) {}

// 8. Random element

function findRandomElement(arr) {}

// 9. Is It Prime?

function isPrime(n) {}

// 10. Factorial of a number w/ recursion

function factorialOf(n) {}
