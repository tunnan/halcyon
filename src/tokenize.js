// Tokenize a word
function tokenize(token) {
    return token === '('         ? { type: 'LParens', value: '(' }
         : token === ')'         ? { type: 'RParens', value: ')' }
         : token.match(/^".*"$/) ? { type: 'String',  value: token.replace(/"/g, '') }
         : token.match(/^\d+$^/) ? { type: 'Number',  value: Number(token) }
         :                         { type: 'Symbol',  value: token };
}

module.exports = {
    tokenize,
}
