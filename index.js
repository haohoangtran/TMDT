const express = require("express");
const bodyParser = require('body-parser');
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));
app.listen(process.env.PORT || 6969, () => {
    console.log("hihi")
});
app.get("/", (req, res) => {
    res.sendFile(path.dirname(require.main.filename) + "/index.html");
})
app.get("/:page", (req, res) => {
    let {page} = req.params;
    console.log(path.dirname(require.main.filename));
    res.sendFile(path.dirname(require.main.filename) +"/"+ page);
});