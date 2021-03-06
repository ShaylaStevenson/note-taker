// dependencies
const express = require('express');

// setting up express
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// link to files in public, such as index.js and stylesheet
app.use(express.static("public"));

// paths to route files
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// listener
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});