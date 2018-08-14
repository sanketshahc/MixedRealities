const fs = require('fs');
// const path = require('path');
module.exports = {
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.crt')
}