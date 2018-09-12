const app = require('express')();
const path = require('path');

app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, '../client/index.html')));

app.post('/submit', (req, res) => console.log(req) && res.send(JSON.stringify(req.params)));

app.listen(3000, () => console.log('Example app listening on port 3000!'));