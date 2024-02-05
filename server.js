const express = require('express');

const app = express();
app.get('/', (req, res) => res.send('<h1>Hello world con express y HTML !!</h1>'))
app.listen(8080);
console.log('SERVER ON PORT 80')