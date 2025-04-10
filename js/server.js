const http = require('http')

const fs = require("fs")

const port = 4056

const server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'})

  fs.readFile('index.html', function (error, data) {
    
  })
})

server.listen(port, function(error) {

})
