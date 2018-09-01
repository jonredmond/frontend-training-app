const app = require('express')();
const path = require('path');

app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, '../client/index.html')));

app.listen(3000, () => console.log('Example app listening on port 3000!'));