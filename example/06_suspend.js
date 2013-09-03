var suspend = require('suspend')
  , fs = require('fs');

suspend(function* (resume){
  try{
    var content = yield fs.readFile(
                    __dirname + '/ong6.txt'
                    , {encoding: 'utf-8'}
                    , resume
                  );
    console.log('generator: ', content);
  }
  catch(e){
    console.log(e);
  }
})();
