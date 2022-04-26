const core = require('@actions/core');
const fs = require('fs');
const path = require("path");


const location = core.getInput('location');


console.log('Current directory: ' + process.cwd());

console.log("Listing files in current directory")
fs.readdirSync('./').forEach(file => {
    console.log(file);
});

const m2Dir = path.join(os.homedir(), '.m2', 'settings.xml');

fs.copyFileSync(location, m2Dir);

console.log(`Copying file at "${location}" to ${m2Dir}`);
