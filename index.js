const core = require('@actions/core');
const fs = require('fs');


const location = core.getInput('location');


console.log('Current directory: ' + process.cwd());

console.log("Listing files in current directory")
fs.readdirSync('./').forEach(file => {
    console.log(file);
});
fs.copyFileSync(location, "~/.m2/settings.xml");

console.log(`Copying file at "${location}" to ~/.m2/settings.xml`);
