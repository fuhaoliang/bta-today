var express = require('express')

var app = express()

app.get('/event-source', function(res, req){
  console.info('进入接口')
  req.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive"
  })
  var json = {
    data: { message: new Date() },
    code: 0
  }

  req.write("data: " + JSON.stringify(json) + "\n\n");
  
  interval = setInterval(function() {
    req.write("data: " + (new Date()) + "\n\n");
  }, 10000);

  req.connection.addListener("close", function () {
    console.info('关闭链接')
    clearInterval(interval);
  }, false);
})

app.listen(9999)