var fs = require('fs');

fs.appendFile('mynewfile1.text', 'This is my text.', function (err){
    if (err) throw err;
    console.log('Updated!');
});