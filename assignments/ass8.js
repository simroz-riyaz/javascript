// equality operators 
// a)
let numNeighbours = ('How many neighbour countries does your country have?');
console.log(numNeighbours);

// b)
if (numNeighbours === '1') {
    console.log('Only 1 border!(loose equality)');
} 
else if (numNeighbours> '1')
{
    console.log('More than 1 border!(loose equality)');
} 

//c)
else if (numNeighbours === '0') {
    console.log('No borders! (strict equality)');
}
else  (numNeighbours === '0' && 'any other value') 
{
    console.log('No borders! (loose equality)');
}


