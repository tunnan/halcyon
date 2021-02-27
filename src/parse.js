// Parse the tokens into and AST
function parse(tokens, list = []) {
    const token = tokens.shift();
    
    if (token === undefined) {
        return list.pop();
    }

    if (token.type === 'LParens') {
        list.push(parse(tokens, []));
        return parse(tokens, list);
    }
    else if (token.type === 'RParens') {
        return list;
    }
    else {
        return parse(tokens, list.concat(token));
    }
}

module.exports = {
    parse,
}
