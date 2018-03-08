// LOOPING FOR A SET AMOUNT OF TIMES
console.log('******************************');
for ( var i = 0; i < 10; i++ ){
    console.log(i);
}

// COUNTDOWN LOOP
console.log('******************************');
for ( var i = 10; i > 0; i-- ){
    console.log(i);
}

// LOOPING OVER ARRAYS
console.log('******************************');
var namesArray = ['Amul', 'Amanda', 'Harriet', 'Anisa', 'Mauro', 'Matty', 'Jonnie'];
for( var i = 0; i < namesArray.length; i++ ){
    console.log( namesArray[i] + ' has index ' + i + ' in the namesArray' );
}

// LOOPING OVER OBJECTS
console.log('******************************');
var namesObject = {
    one: 'Amul',
    two: 'Amanda',
    three: 'Harriet',
    four: 'Anisa',
    five: 'Mauro',
    six: 'Matty',
    seven: 'Jonnie'
};

for( var key in namesObject ){
    console.log( namesObject[key] + ' has key ' + key + ' in the namesObject' );
}

// LOOP IN A LOOP :O
console.log('******************************');
var twoDimensionArray = [
    ['Amul', 'Amanda', 'Harriet'],
    ['Anisa', 'Mauro', 'Matty'],
    ['Jonnie', 'Emily', 'Nick']
];
for( var i = 0; i < twoDimensionArray.length; i++ ){
    var namesArr = twoDimensionArray[i];
    for( var x = 0; x < namesArr.length; x++ ){
        console.log( twoDimensionArray[i][x] + ' is in array ' + i +
            ' in the twoDimensional array and has index ' + x + ' in its own array');
    }
}
