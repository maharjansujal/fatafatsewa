const fs = require('fs');

// Read the JSON file
const jsonData = require('../data.json');

// Update the data
jsonData.key = 'new value';

// Write the updated data back to the JSON file
fs.writeFileSync('../data.json', JSON.stringify(jsonData, null, 2));

console.log('Data updated successfully.');