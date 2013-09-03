var co = require('co')
  , fs = require('fs');

var read = co.wrap(fs.readFile);

co(function* (){
  try{
    var content = yield read(
                    __dirname + '/ong6.txt'
                    , {encoding: 'utf-8'}
                  );
    console.log('generator: ', content);
  }
  catch(e){
    console.log(e);
  }
});
