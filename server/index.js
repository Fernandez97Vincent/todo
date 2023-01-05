const cors = require("cors");
const connection = require("./db")
const express = require("express");
const app = express();

app.use(express.json())
app.use(cors())

const port = proncess.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}`))