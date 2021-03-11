// dependencies
const express = require('express');
const path = require('path');
const fs = require('fs');

// setting up express
const app = express();
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});