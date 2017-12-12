import express from "express";
import open from "open";

const app = express();
const port = 3000;

app.get('/', function (req, res) {
    res.send(`Hello World`)
});

app.listen(port, function (err) {
    console.log(`Example app listening on port ${port}`);
    if (err) {
        console.log(err);
    } else {
        open("http://localhost:" + port);
    }
});
