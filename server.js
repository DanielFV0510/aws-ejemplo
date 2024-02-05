const express = require('express');

const app = express();
app.get('/', (req, res) => res.send('Hello world con express'))
app.listen(3000);
console.log('SERVER ON PORT 3000')