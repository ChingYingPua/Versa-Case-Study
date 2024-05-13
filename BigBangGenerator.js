const fs = require('fs');

// Function to generate the array based on the given conditions
function generateBigBangArray() {
  // Initialize an empty array to store the result
  const result = [];
  
  // Initialize counters for 'BIG', 'BANG', and 'BIGBANG'
  let bigCount = 0;
  let bangCount = 0;
  let bigBangCount = 0;

  // Iterate through numbers from 1 to 100
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      // If the number is divisible by both 3 and 5, push 'BIGBANG' into the result array
      result.push('BIGBANG');
      bigBangCount++;
    } else if (i % 3 === 0) {
      // If the number is divisible by 3 only, push 'BIG' into the result array
      result.push('BIG');
      bigCount++;
    } else if (i % 5 === 0) {
      // If the number is divisible by 5 only, push 'BANG' into the result array
      result.push('BANG');
      bangCount++;
    } else {
      // If the number is not divisible by either 3 or 5, push the number itself as a string into the result array
      result.push(i.toString());
    }
  }

  // Return the generated array and the counts of 'BIG', 'BANG', and 'BIGBANG'
  return {
    array: result,
    counts: { BIG: bigCount, BANG: bangCount, BIGBANG: bigBangCount }
  };
}

// Generate the array and get the counts
const { array: outputArray, counts } = generateBigBangArray();

// Create the output object with formatted array and counts
const outputObject = {
  generated_array: outputArray,
  counts: counts
};


const outputJson = JSON.stringify(outputObject, null, 2);

// Write the generated JSON into a file named 'output.json'
fs.writeFile('output.json', outputJson, (err) => {
  // Handle any errors that may occur during file writing
  if (err) {
    console.error('Error writing to output.json:', err);
  } else {
    // If no error occurred, log a success message to the console
    console.log('Output saved to output.json');
  }
});