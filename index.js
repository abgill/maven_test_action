const core = require('@actions/core');
const fs = require('fs');


const location = core.getInput('location');

console.log(`Copying file at "${location}" to ~/.m2/settings.xml`);

fs.copyFileSync(location, "~/.m2/settings.xml");