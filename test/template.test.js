const { template } = require('../src/template');
const { paths } = require('../src/paths');

it('puts a body of text into a template', () => {
    expect(template(paths.templateDir + 'default.html', '<h1>Foo</h1>')).toBe(`<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title></title>
        <link rel="stylesheet" href="css/style.css" media="all">
    </head>
    <body>
        <div id="app"><h1>Foo</h1></div>
    </body>
</html>
`);
});
