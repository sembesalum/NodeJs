var fs = require('fs');

fs.rename('mynewfile1.text', 'This is my text.', function (err){
    if (err) throw err;
    console.log('File Renamed!');
});