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

function doubleArrayValues( array ) {
  return array.map( elem => elem * 2 )
}

function doubleArrayValues2( array ) {
  for( let i = 0; i < array.length; i++ ){
    array[i] *= 2;
  }
  return array;
}

// console.log( 'doubleArrayValues', doubleArrayValues( [10, 18, 17, 4, 14] ));
// console.log( 'doubleArrayValues', doubleArrayValues2( [10, 18, 17, 4, 14] ));

// 4. Naive Search
/*
* return index of an item in an array
*/
function naiveSearch(array, item) {
  return array.indexOf( item );
}

function naiveSearch2( array, item ) {
  for (let i = 0; i <= array.length; i++) {
    let cv = array[i];
    if ( cv === item ) {
      return i;
    }
  }
}

// console.log( 'naiveSearch', naiveSearch( [10, 18, 17, 4, 14], 4 ) );
// console.log( 'naiveSearch', naiveSearch2( [10, 18, 17, 4, 14], 4 ) );

// 5. Creating Pairs
/*
* maak een paar van elke mogelijke combinatie
*/
function createPairs(arr1, arr2) {
  for( let i = 0; i < arr1.length; i++ ) {
    const itemFromArray1 = arr1[i]
    for( let j = 0; j < arr2.length; j++ ){
      const itemFromArray2 = arr2[j]
      console.log(`${itemFromArray1}-${itemFromArray2}`)
    }
  }
}

// console.log( 'createPairs', createPairs( [10, 18, 17, 4, 14], [2, 16, 10, 14, 18] ));

// 6. Computing Fibonacci Numbers

function generateFib(num) {}

// 7. Efficient Search

function efficientSearch(array, item) {}

// 8. Random element
/*
* Zoek een random element
*/
function findRandomElement(arr) {
  return arr[Math.floor( Math.random() * arr.length )];
}
console.log( 'findRandomElement', findRandomElement( [10, 18, 17, 4, 14] ) )

// 9. Is It Prime?

function isPrime(n) {}

// 10. Factorial of a number w/ recursion

function factorialOf(n) {}
