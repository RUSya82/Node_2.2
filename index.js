import express from 'express';

const port = 8000;
const host = '127.0.0.1'

const app = express();
const user = { name: 'jura', age: 22 };
app.get('/hello', (req, res)=> {
    res.end('Hello!')
});

// app.post('/user', (req, res) => {
//     res.send('User!')
// })

app.route('/user')
    .get( (req, res) => {
    res.end(user.name);
}).post((req, res) => {
    res.end('User Post')
})

app.listen(port, () => {
    console.log(`Server started at ${host}:${port}`)
})

