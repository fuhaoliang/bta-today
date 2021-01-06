async function f(){
  return 'hello world';
}
f().then(v=>console.log(v))

console.info('fn', f())