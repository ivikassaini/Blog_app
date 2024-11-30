const express = require('express');
const app = express();
const dotenv= require('dotenv');

dotenv.config();
app.get('/',
    (req, res) => {
        res.send("Get Request Called")
    })

const PORT = process.env.PORT || 3001;
app.listen( PORT,
    function (err) {
        if (err) console.log(err);
        console.log("Server listening on PORT", PORT);
    });