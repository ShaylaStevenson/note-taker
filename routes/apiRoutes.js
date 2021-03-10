// link to the data source
const notesData = require('../db/db.json');

// routing
module.exports = (app) => {
    app.get('/api/notes', (req, res) => res.join(notesData));
    
}


