const express = require('express')
const app = express()
const {PORT} = require("./config.json")
const storeRouter = require("./router/store.js")

app.get('/', (req, res) => {
    res.send('hello world');
})
app.use("/stores",storeRouter);

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})