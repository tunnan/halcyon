const { getEmoji } = require('./emoji');
const { tokenize } = require('./tokenize');

// Split the input into parts that are easier to parse
// and turn them into tokens.
function preprocess(data) {
    return data
        .replace(/\r\n?|\t/g, '')        // remove CRLF and tabs
        .replace(/\s{2,}/, ' ')          // reduce multiple whitespaces
        .replace(/\(/g, ' ( ')
        .replace(/\)/g, ' ) ')
        .replace(/:[a-z]+:/g, getEmoji)  // replace emojis
        .trim()
        .match(/\(|[\w\-]+|"[^"]+"|\)/g) // split by words, except when in double quotes
        .map(tokenize);
}

module.exports = {
    preprocess,
}
