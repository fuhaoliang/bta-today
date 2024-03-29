var Promise = function(fn) {
  var state = 'pending'
  var doneList = []
  var failList = []
  this.then = function(done, fail) {
    switch(state) {
      case 'pending':
        doneList.push(done)
        failList.push(fail || null)
        return this
      case 'fulfilled':
        done();
        return this
      case 'rejected':
        fail();
        return this
    }
  }


  function resolve(value) {
    state = 'fulfilled'
    setTimeout(() => {
      for(var i = 0; i < doneList.length; i++) {
        var temp = doneList[i](value)
        if(temp instanceof Promise) {
          for(i++; i < doneList.length; i++) {
            temp.then(doneList[i], failList[i])
          }
        }
      }
    }, 0)
  }

  function reject(value) {
    state = 'rejected'
    setTimeout(() => {
      var tempRe = failList[0](value)
      if (tempRe instanceof Promise) {
        for(i = 1; i < failList.length; i++) {
          tempRe.then(doneList[i], failList[i])
        }
      } else {
        doneList.unshift()
        failList.unshift()
        resolve(tempRe)
      }
    }, 0)
  }

  fn(resolve, reject)
}