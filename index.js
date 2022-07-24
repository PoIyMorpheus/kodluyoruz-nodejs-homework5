const http = require('http');
const fs = require("fs")

const server = http.createServer(function (req, res) {
    const url = req.url

    if (url === "/") {
        fs.readFile("./pages/index.html", (err, data) => {
            if (err) {
                console.log(err);
            } else {
                res.writeHead(200, {
                    "Content-Type": "text/html"
                })
                res.write(data)
                res.end()
            }
        })

    } else if (url === "/about") {
        fs.readFile("./pages/about.html", (err, data) => {
            if (err) {
                console.log(err);
            } else {
                res.writeHead(200, {
                    "Content-Type": "text/html"
                })
                res.write(data)
                res.end()
            }
        })

    } else if (url === "/contact") {
        fs.readFile("./pages/contact.html", (err, data) => {
            if (err) {
                console.log(err);
            } else {
                res.writeHead(200, {
                    "Content-Type": "text/html"
                })
                res.write(data)
                res.end()
            }
        })

    } else {
        res.writeHead(404, {
            "Content-Type": "text/plain"
        })
        res.write("Not found")
        res.end()
    }

    
})

const port = 3000

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})