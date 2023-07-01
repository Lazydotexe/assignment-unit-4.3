console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
const maxItems = 5;


function addItem(item) {
    if (isFull()) {
      return false; // Basket is full, item cannot be added
    } else {
      basket.push(item);
      return true; // Item added successfully
    }
  }


addItem('Donuts');
addItem('fruit');
addItem('veggies');
addItem('Kale');
// console.log(`Basket is ${basket}`);
// console.log('Adding apples (expect true)', addItem('apples'));
// console.log(addItem("paper"))



// ======= Why didnt the browser accept the code below  ========

// function addItem(item, arr) { 
//     arr.push(item);
//     return true;

// }
// addItem('Donuts', basket);
// //console.log('My basket includes: ', basket);
// addItem('fruit', basket);
// //console.log('My basket includes: ', basket);
// addItem('veggies', basket);
// // console.log('My basket includes: ', basket);
// addItem('ham', basket);
console.log(basket);


//.......................................................................



function listItems(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    
}

listItems(basket);

//.......................................................................


function empty(arr) {// accepts an array  as a perameter
    arr.length = 0;// This line set the array to empty [] (This took me more time then i would like to admit.)
    
}

//empty(basket);
//console.log(basket);


//................................................................

function isFull() {
    return basket.length >= maxItems;
 } 

//  console.log(isFull(basket));

   // ** Why wont the browser accept this code ?!?!?!?

/*function isFull(arr) {
    return arr.length >= maxItems;
   }  */

   // console.log(isFull(basket));


//.........................................................


function removeItem(item) {

}








// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
