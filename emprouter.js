const express = require('express')
const app = express()
const empcont = require("../controller/empcontroller")


app.get("/emp",empcont.getdata)
app.post("/emp",empcont.postdata)
app.put("/emp/:id",empcont.updatedata)
app.delete("/emp/:id",empcont.deletedata)

module.exports = app