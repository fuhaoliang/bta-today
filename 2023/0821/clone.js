function clone(value){
  // （Number、String、Object、Array、Boolean）
  var type = Object.prototype.toString.call(value).match(/\[object (\S*)\]/)[1]
  switch(type){
    case 'Number':
      return value
    case 'String':
      return  value
    case 'Boolean':
      return value  
    case 'Object':
      return  JSON.parse(JSON.stringify(value))
    case 'Array':
      return  JSON.parse(JSON.stringify(value))
    default:
      throw new Error('type in Number、String、Object、Array、Boolean')
      break
  }
}