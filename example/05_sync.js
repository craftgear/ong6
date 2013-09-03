var fs = require('fs');

var fileReader = function* (callback){
  var content = yield fs.readFile(
                  __dirname + '/ong6.tx'
                  , {encoding: 'utf-8'}
                  , callback
                );
  console.log('generator: ', content);
  process.exit();
}

function run(generator){
  var iterator = null;

  var callback = function(err, data) {
    if(err) iterator.throw(err);
    iterator.next(data);
  };

  iterator = generator(callback);
  iterator.next();
}

run(fileReader);
