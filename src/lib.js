// A list of keywords that can be used within the program
const lib = {
    'div':                   x => `<div>${x}</div>`,
    'div-with-id':           (x, y) => `<div id="${x}">${y}</div>`,
    'div-with-class':        (x, y) => `<div class="${x}">${y}</div>`,
    'div-with-id-and-class': (x, y, z) => `<div id="${x}" class="${y}">${z}</div>`,
    'h1':                    x => `<h1>${x}</h1>`,
    'h2':                    x => `<h2>${x}</h2>`,
    'h3':                    x => `<h3>${x}</h3>`,
    'h4':                    x => `<h4>${x}</h4>`,
    'h5':                    x => `<h5>${x}</h5>`,
    'h6':                    x => `<h6>${x}</h6>`,
    'p':                     x => `<p>${x}</p>`,
    'ul':                    x => `<ul>${x}</ul>`,
    'li':                    x => `<li>${x}</li>`,
    'link':                  (x, y) => `<a href="${x}">${y}</a>`,
}

module.exports = {
    lib,
}
