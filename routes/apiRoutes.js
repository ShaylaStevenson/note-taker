// dependencies
const fs = require('fs');
const uniqid = require('uniqid');

// routing
module.exports = (app) => {
    // read the db.json file and save as rawData
    let rawData = fs.readFileSync('./db/db.json');
    
    // parse rawData to create usable content
    let notesData = JSON.parse(rawData);
    
    // return as JSON and send to front end
    app.get('/api/notes', (req, res) => res.json(notesData));
    //console.log(notesData);

    // new note has been entered...
    app.post('/api/notes', (req, res) => {
        
        // create a newNote object to store input in
        const newNote = {
            // use npm's Uniqid package to generate an id for the new note
            id: uniqid(),
            title: req.body.title,
            text: req.body.text
        };

        
        // push the new note to the array containing all notes
        notesData.push(newNote);

        // rewrite the db.json file with the new note now added
        fs.writeFileSync('./db/db.json', JSON.stringify(notesData));

        // display the new note
        res.json(newNote);
        
        console.log(notesData);
    });
    
}


