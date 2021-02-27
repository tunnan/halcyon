const fs = require('fs');

// Return the contents of a template, with the body replaced
function template(templateFile, body) {
    return fs.readFileSync(templateFile, { encoding: 'utf-8' })
        .replace('{{body}}', body);
}

module.exports = {
    template,
}
