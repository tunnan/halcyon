const { parseArgs } = require('../src/arguments');

it('parses arguments correctly', () => {
    expect(parseArgs(['--template', 'default']))
        .toEqual({
            '--template': 'default'
        });
});
