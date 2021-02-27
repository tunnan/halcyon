const { getEmoji } = require('../src/emoji');

it('converts text into an emoji', () => {
    expect(getEmoji(':cassette:'))
        .toBe('&#128252;');
});
