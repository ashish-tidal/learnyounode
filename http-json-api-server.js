const http = require('http');

const port = Number(process.argv[2]);

function parse (time) {
    return {
        hour : time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    }
}

function unix (time) {
    return { unixtime: time.getTime() }
  }


const server = http.createServer(function (req, res) {
    const parsedUrl = new URL(req.url, 'http://example.com')
    const time = new Date(parsedUrl.searchParams.get('iso'))
    let result
  
    if (/^\/api\/unix/.test(req.url)) {
      result = unix(time)
    } else if (/^\/api\/parse/.test(req.url)) {
      result = parse(time)
    }
  
    if (result) {
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify(result))
    } else {
      res.writeHead(404)
      res.end()
    }
})

server.listen(port);
