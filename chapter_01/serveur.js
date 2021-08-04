const express = require('express');
const app = express();

const port = 8000;


app.get('/', (req, res) => {
    console.log("Salut");

    res.send("Beautifull hommepage");
});

app.listen(port, () => {
    console.log(`The server is listening in port ${port}`);
});

