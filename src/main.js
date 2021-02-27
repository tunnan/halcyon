const fs = require('fs');

const { lib } = require('./lib');
const { paths } = require('./paths');
const { preprocess } = require('./preprocess');
const { parse } = require('./parse');
const { interpret } = require('./interpret');
const { template } = require('./template');
const { parseArgs } = require('./arguments');

// Save the interpreted contents into a file in the output directory.
function processFile(filename) {
    fs.readFile(paths.inputDir + filename, { encoding: 'utf8' }, (err, data) => {
        if (err) {
            console.log('\x1b[1m\x1b[31m%s\x1b[0m', 'Error' + err);
            return;
        }

        const output = interpret(parse(preprocess(data)), lib);
        const newFilename = filename.replace(/\.txt$/, '.html');

        if (output !== undefined) {
            fs.writeFile(paths.outputDir + newFilename, template(paths.templateDir + args['--template'] + '.html', output), { encoding: 'utf8' }, (err) => {
                if (err) {
                    console.log('\x1b[1m\x1b[31m%s\x1b[0m', 'Error' + err);
                    return;
                }
                
                console.log('\x1b[1m\x1b[32m%s\x1b[0m', filename +' was successfully generated');
                return;
            });
        }
    });
}

const args = { ...{
    '--template': 'default'
}, ...parseArgs(process.argv.slice(2))}

// Read and parse all .txt files contained withing the input directory
fs.readdir(paths.inputDir, (err, files) => {
    if (err) {
        console.log('\x1b[1m\x1b[31m%s\x1b[0m', 'Error' + err);
        return;
    }

    files.filter(x => x.split('.').pop() === 'txt')
        .map(processFile);
});
