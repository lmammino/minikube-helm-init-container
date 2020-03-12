const { createServer } = require('http')

const address = process.env.ADDRESS || '0.0.0.0'
const port = Number.parseInt(process.env.PORT) || 3000

const url = `http://${address}:${port}`

createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    })
    res.write(`${JSON.stringify(process.env)}\n`)
    res.end()
})
.listen(port, address, () => console.log(`Running on ${url}`))
