// dependencies
const fs = require('fs');
const path = require('path');
const uniqid = require('uniqid');

// routing
module.exports = (app) => {

    // return as JSON and send to front end
    app.get('/api/notes', (req, res) => {

        // read the db.json file and save as rawData
        const rawData = fs.readFileSync('./db/db.json');
        // parse rawData to create usable content
        const notesData = JSON.parse(rawData);
        
        res.json(notesData);

        console.log(notesData);
        console.log(typeof notesData);
    });
    
    //console.log(notesData);

    // new note has been entered...
    app.post('/api/notes', (req, res) => {

        // read the db.json file and save as rawData
        const rawData = fs.readFileSync('./db/db.json');
        // parse rawData to create usable content
        const notesData = JSON.parse(rawData);

        //create a newNote object to store input in
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
        res.json(true);
        
        console.log(notesData);
    });
    
}


