const core = require('@actions/core');
const fs = require('fs');
const path = require("path");
const os = require("os");


const location = core.getInput('location');


core.info('Current directory: ' + process.cwd());

core.info("Listing files in current directory")
fs.readdirSync('./').forEach(file => {
    core.info(file);
});

const m2Dir = path.join(os.homedir(), '.m2', 'settings.xml');

if (!fs.existsSync(path.dirname(m2Dir))) {
    core.info("creating directory for settings.xml: " + m2Dir);
    fs.mkdirSync(path.dirname(m2Dir));
}

fs.copyFileSync(location, m2Dir);

core.info(`Copying file at "${location}" to ${m2Dir}`);
