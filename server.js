const express = require('express');
const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(PORT, () => {
    console.log(`Express server running on port ${PORT}`);
});
