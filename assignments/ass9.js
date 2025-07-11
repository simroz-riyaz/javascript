// Step 1: Declare variable based on prompt input
let numNeighbours = ('How many neighbour countries does your country have?');

// Step 2-4: Use if/else-if/else to log messages (using ==)
if (numNeighbours == 1) {
    console.log('Only 1 border!');
} else if (numNeighbours > 1) {
    console.log('More than 1 border');
} else {
    console.log('No borders');
}

// Step 5: Test with different values (manually via prompt)

// Step 6: Change == to === and test again
if (numNeighbours === 1) {
    console.log('Only 1 border!');
} else if (numNeighbours > 1) {
    console.log('More than 1 border');
} else {
    console.log('No borders');
}
// When using ===, prompt returns a string, so '1' === 1 is false

// Step 7: Convert numNeighbours to a number
numNeighbours = Number(numNeighbours);

if (numNeighbours === 1) {
    console.log('Only 1 border!');
} else if (numNeighbours > 1) {
    console.log('More than 1 border');
} else {
    console.log('No borders');
}

// Step 8: Reflection (as a comment)
// Using === ensures strict comparison (type + value). Prompt returns a string, so type conversion is needed for correct comparison.