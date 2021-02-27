const { preprocess } = require('../src/preprocess');
const { parse } = require('../src/parse');
const { interpret } = require('../src/interpret');
const { lib } = require('../src/lib');

const program = `(
    (h1 "Hello, world")
    (p "This is a paragraph"))`;

it('interprets a simple page', () => {
    expect(interpret(parse(preprocess(program)), lib))
        .toBe('<h1>Hello, world</h1><p>This is a paragraph</p>');
});
