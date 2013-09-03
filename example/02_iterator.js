function* hoge(){
  yield 1;
  yield 2;
  return 3;
}

var iterator = hoge();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
