const fs = require('fs-extra')
const http = require('http')
const opn = require('opn')

const csv = require('./csv')

let index = fs.readFileSync('lib/index.html').toString()
const name = process.argv[2]
const port = 9615

const attachData = (html, data) => {
  return html.replace('DATAHERE', JSON.stringify(data))
}

const server = name => (req, res) => {
  if (req.method === 'GET') {
    csv.read(name).then(data => {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
      res.end(attachData(index, data))
    })
  } else {
    console.log('TODO handle saving the CSV')
  }
}

const listening = () => {
  opn(`http://localhost:${port}`)
}

http.createServer(server(name)).listen(port, listening)
