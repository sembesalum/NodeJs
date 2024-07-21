var fs = require('fs');

fs.writeFile('mynewfile3.text', 'This is my text.', function (err){
    if (err) throw err;
    console.log('Replaced!');
});