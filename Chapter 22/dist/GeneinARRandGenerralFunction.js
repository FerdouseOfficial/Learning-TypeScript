"use strict";
function getSearchProducts(products) {
    // here  is more precise way of doing things okay..............
    // do some database operations
    const myIndex = 1;
    // return products[myIndex]
    return products[myIndex]; // here I have face some issue with some incorrect syntax like this return products[] this; product[3] this because the index 3 there in no value in the argument of getSerchProducts its just have 3 value 1, 2, 3, so there is no value in index 3 that's why its showing us error okay .
}
// getSearchProducts([1, 2, 3])
const getMoreSearchData = (products) => {
    // do some database operations..... 
    const myIndex = 4;
    return products[myIndex];
};
