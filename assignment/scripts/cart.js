console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
const maxItems = 5;


// function addItem(item) {
//     basket.push(item);
//     return true;

// }


function addItem(item) { //accepts a 'item' as a perameter
    if (isFull()) { //calls the isFull function and checks if true or false
      return false; // if false it moves to the else if true it  returns false
    } else {
      basket.push(item);//pushes an item to the basket array
      return true; // Item added successfully
    }
  }


addItem('Donuts');
addItem('fruit');
addItem('Spinach');
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



function listItems(arr) { //accepts an array as a perameter
    for (let i = 0; i < arr.length; i++) { //runs a loop while i is less then the length of the array and adds 1
        console.log(arr[i]);//every time the loop runs it will log the index of i on a seperate line until the whole array was logged
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

function isFull() {//accepts an array as a perameter, in this case basket is forced in the code block
    return basket.length >= maxItems; //returns a boolean true/false depending on the two variables inside
 } 

//  console.log(isFull(basket));

   // ** Why wont the browser accept this code ?!?!?!?

/*function isFull(arr) {
    return arr.length >= maxItems;
   }  */

   // console.log(isFull(basket));


//.........................................................


function removeItem(item) {// accepts and 'item' 
    for (let i = 0; i <= basket.length; i++) { //runs a for loop and check i value against basket.length and while true add 1 to i
      if (i == basket.indexOf(item)) {//for every loop the if will check if i equils basket.indexOf(item) and will loop until it does or it has check all basket.length
        return basket.splice(i, 1);// if the if statments matches i to the indexOf it will then remove that item and return it
      } 
    } return null;//if it does not find the matching item from the indexOf it will return null

}
removeItem('Donuts');
console.log(basket);







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
