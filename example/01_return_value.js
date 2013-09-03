function hoge() {
  return 'hoge';
}

var result = hoge();
console.log(result);

function* fuga() {
  yield 'fuga';
}
var result = fuga();
console.log(typeof result);
