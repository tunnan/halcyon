const { preprocess } = require('../src/preprocess');

const program = `(
    (h1 "Hello, world")
    (p "This is a paragraph"))`;

it('preprocesses a simple page', () => {
    expect(preprocess(program))
        .toEqual([
            { type: 'LParens', value: '(' },
            { type: 'LParens', value: '(' },
            { type: 'Symbol', value: 'h1' },
            { type: 'String', value: 'Hello, world' },
            { type: 'RParens', value: ')' },
            { type: 'LParens', value: '(' },
            { type: 'Symbol', value: 'p' },
            { type: 'String', value: 'This is a paragraph' },
            { type: 'RParens', value: ')' },
            { type: 'RParens', value: ')' }
        ]);
});
