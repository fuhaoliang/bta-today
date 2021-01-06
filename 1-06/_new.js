function _new(){
  const [Constructor, ...args] = [...arguments]
  // 1: 以构造函数的prototype属性为原型，创建新对象
  let obj = Object.create(Constructor.prototype)
  // 2: 将this(新obj)和调用参数传递给构造函数执行
  let res = Constructor.apply(obj, args)
  // 3: 如果构造函数没有返回，就返回第一步所创建的对象
  return typeof res === 'object' ? res : obj
}

function A(name){
  this.age = 12
  this.name = name
  // return [123,4]
}

A.prototype.say = function() {
  console.info('1234')
}

var b = _new(A, 'fhl')

console.info('b-->', b)