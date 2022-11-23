/*
Given an array, remove all falsy values from the array
and return an array of only truthy values.

E.g  falsyBouncer([1, 0, null, '', 5]) // should return [1,5]
*/


function falsyBouncer1(arr) {
    return arr.filter(val => val)
}

function falsyBouncer2(arr) {
    const falsy = [NaN, 0, '', undefined, null]
    return arr.filter(val => !falsy.includes(val))
}

function falsyBouncer3(arr) {
    const falsy = [NaN, 0, '', undefined, null]
    
    const result = []

    for(let i = 0; i < arr.length; i ++) {
        if(arr[i]) result.push(arr[i])
    }

    return result
}


module.exports = falsyBouncer