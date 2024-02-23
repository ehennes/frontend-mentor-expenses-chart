const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;


app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/src', express.static(path.join(__dirname, 'src')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});


app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});