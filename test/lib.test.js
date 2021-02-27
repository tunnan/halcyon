const { lib } = require('../src/lib');

it('returns a div', () => {
    expect(lib['div']('Foo'))
        .toBe('<div>Foo</div>');
});

it('returns a div with an id', () => {
    expect(lib['div-with-id']('foo', 'Foo'))
        .toBe('<div id="foo">Foo</div>');
});

it('returns a div with a class', () => {
    expect(lib['div-with-class']('foo', 'Foo'))
        .toBe('<div class="foo">Foo</div>');
});

it('returns a div with an class and a class', () => {
    expect(lib['div-with-id-and-class']('foo', 'bar', 'Foo'))
        .toBe('<div id="foo" class="bar">Foo</div>');
});

it('returns a h1', () => {
    expect(lib['h1']('Foo'))
        .toBe('<h1>Foo</h1>');
});

it('returns a h2', () => {
    expect(lib['h2']('Foo'))
        .toBe('<h2>Foo</h2>');
});

it('returns a h3', () => {
    expect(lib['h3']('Foo'))
        .toBe('<h3>Foo</h3>');
});

it('returns a h4', () => {
    expect(lib['h4']('Foo'))
        .toBe('<h4>Foo</h4>');
});

it('returns a h5', () => {
    expect(lib['h5']('Foo'))
        .toBe('<h5>Foo</h5>');
});

it('returns a h6', () => {
    expect(lib['h6']('Foo'))
        .toBe('<h6>Foo</h6>');
});

it('returns a p', () => {
    expect(lib['p']('Foo'))
        .toBe('<p>Foo</p>');
});

it('returns a ul', () => {
    expect(lib['ul']('Foo'))
        .toBe('<ul>Foo</ul>');
});

it('returns a li', () => {
    expect(lib['li']('Foo'))
        .toBe('<li>Foo</li>');
});

it('returns a link', () => {
    expect(lib['link']('Foo', 'Bar'))
        .toBe('<a href="Foo">Bar</a>');
});
