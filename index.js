import http from 'http';

const port = 8000;
const host = '127.0.0.1'

const server = http.createServer((req, res) => {
    switch (req.method){
        case 'GET':
            switch (req.url) {
                case '/hello':
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'text/plain');
                    res.end('Hello!')
                    break;
            }
            break;
        case 'POST':
            if(req.url === '/user'){
                res.statusCode = 201;
                res.end('User!')
            }
    }
});

server.listen(port, host, () => {
    console.log(`Server started at ${host}:${port}`)
})