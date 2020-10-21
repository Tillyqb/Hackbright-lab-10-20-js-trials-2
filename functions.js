"use strict";


// 1. isHometown

function isHometown(town) {

    return(town === 'Saginaw');
}


// 2. getFullName

function getFullName(firstName, lastName) {
    
    const fullName = `${firstName} ${lastName}`;
    return(fullName);
}


// 3. calculateTotal

function calculateTotal(basePrice, state, tax = 0.05) {
    const subtotal = basePrice * (tax + 1);
    let fee = 0

    if (state === 'CA') {
        fee = subtotal * .03;
    } else if (state === 'PA') {
        fee = 2;
    }
    else if (state === 'MA') {
        if (basePrice <= 100) {
            fee = 1;
        } else {
            fee = 3;
        } 
    }
    return (subtotal + fee)
}