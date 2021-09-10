const express = require("express")
const cookieparser = require('cookie-parser');
const cors = require('cors');
const Http = require('http')
const router = require('./routers/index')
const app = express();
const port = 4004


app.use(express.urlencoded({extended: false}));
app.use(express.json())
app.use(cookieparser())
app.use(cors())
app.use(router)

const http = Http.createServer(app)
    .listen(port, () => {
        console.log(`localhost: http://localhost:${port}`);
    })