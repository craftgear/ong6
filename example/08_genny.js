var genny = require('genny')
  , fs = require('fs');

//genny.longStackSupport = true;

genny.run(function* (resume){
  try{
    var content = yield fs.readFile(
                    __dirname + '/ong6.txt'
                    , {encoding: 'utf-8'}
                    , resume()
                  );
    console.log('generator: ', content);
  }
  catch(e){
    console.log(e);
  }
});
