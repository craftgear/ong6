function* hoge(){
  var x = null;
  console.log('inside generator: x is ', x);
  x = yield 1;
  console.log('inside generator: after yielded, x is ', x);
}

var iterator = hoge();

console.info('return value of next', iterator.next());
console.info('return value of next', iterator.next('hoge'));
