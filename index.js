const cors = require('cors');
const express = require('express')
const bodyParser = require('body-parser');
const https = require('https');
const fs = require('fs');

require('dotenv').config()

const app = express()
const routes = require('./routes/api.js')

const listener = app.listen(3001 || process.env.PORT, () => {
    console.log('server is listening on port ' + listener.address().port)
})

app.use(bodyParser.json({limit: '50mb'}));
app.use(express.json())
app.use(cors())
app.options("*", cors())
app.use('/', routes);

// const httpsServer = https.createServer({
//     key: fs.readFileSync('../../ssl/privkey.pem'),
//     cert: fs.readFileSync('../../ssl/fullchain.pem'),
// }, app);
// //
// httpServer.listen(80, () => {
//     console.log('HTTP Server running on port 80');
// });

// httpsServer.listen(process.env.PORT1, '0.0.0.0', () => {
//     console.log('HTTPS Server running on port');
// });
