console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

function addItem(add) {
    basket.push(add);
    return true;

}

console.log('Adding Donuts ', addItem('Donuts'));
console.log('Adding fruit ', addItem('fruit'));
console.log('Adding veggies ', addItem('veggies'));
console.log('My basket includes: ', basket);


//basket is including 'Kale' and 'Spinach' from the test.js file




function listItems(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    
}


//........................................................
























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
