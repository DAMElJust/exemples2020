const express = require('express')
const app = express()

// Amb això servim el directori app com 
// si fos el DocumentRoot.
app.use('/', express.static('app'));

app.listen(8080)
