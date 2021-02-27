const { parse } = require("../src/parse");
const { preprocess } = require("../src/preprocess");

const program = `(
    (h1 "Hello, world")
    (p "This is a paragraph"))`;

it('parses a simple page', () => {
    expect(parse(preprocess(program)))
        .toEqual([
            [
                { type: 'Symbol', value: 'h1' },
                { type: 'String', value: 'Hello, world' }
            ],
            [
                { type: 'Symbol', value: 'p' },
                { type: 'String', value: 'This is a paragraph' }
            ]
        ]);
});
