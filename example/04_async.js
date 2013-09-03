var fs = require('fs');

fs.readFile(
    __dirname + '/ong6.txt'
  , {encoding: 'utf-8'}
  , function (error, result) {
      console.log(result);
      process.exit();
    }
);
