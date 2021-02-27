// Return the emoji matching the given string key
function getEmoji(string) {
    return '&#' + {
        ':cassette:': '128252',
    }[string] + ';';
}

module.exports = {
    getEmoji,
}
