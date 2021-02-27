// Interpret the given AST to HTML.
function interpret(tree, lib) {
    if (Array.isArray(tree)) {
        const list = tree.map(x => interpret(x, lib));
        return list[0].type === 'Func'
            ? list[0].value(list.slice(1))
            : list.join('');
    }
    else if (tree.type === 'Symbol') {
        const fn = lib[tree.value];
        if (typeof fn === 'function') {
            return {
                type: 'Func',
                value: args => fn(...args)
            }
        }
    } else {
        return tree.value;
    }
}

module.exports = {
    interpret,
}
