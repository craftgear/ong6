var run = require('gen-run')
  , fs = require('fs');

run(function* (resume){
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
},function (err) {
  console.log(err);
});
