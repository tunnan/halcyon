// Parse all the given arguments into a list of matching 
// commands and commands values
function parseArgs(args) {
    return args.reduce((acc, x, i) => {
        return x.match(/^--/)
            ? acc.concat({
                [x]: args[i+1]
            })
            : acc;
    }, [])[0];
}

module.exports = {
    parseArgs,
}
