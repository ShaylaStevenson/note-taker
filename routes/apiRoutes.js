// dependencies
const fs = require('fs');
const uniqid = require('uniqid');

// routing
module.exports = (app) => {

    // user wants to see saved notes - GET
    app.get('/api/notes', (req, res) => {

        // read the db.json file and save as rawData
        const rawData = fs.readFileSync('./db/db.json');
        // parse rawData to create usable content
        const notesData = JSON.parse(rawData);

        // display data
        res.json(notesData);
    });
    
    // user wants to add a new note - POST
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

        // display data
        res.json(notesData);
        
        console.log("NOTES TO DISPLAY");
        console.log(notesData);
    });

    // user wants to remove a note - DELETE
    // example from Codota, author davidtran
    app.delete('/api/notes/:id', (req, res) => {

        // read the db.json file and save as rawData
        const rawData = fs.readFileSync('./db/db.json');
        // parse rawData to create usable content
        const notesData = JSON.parse(rawData);

        // id of the note being deleted
        let noteId = req.params.id;

        // find the index of the note with the matching id
        let index = notesData.findIndex(note => note.id === noteId);

        // remove the note from the array
        notesData.splice(index, 1);

        // rewrite the db.json file with the note removed
        fs.writeFileSync('./db/db.json', JSON.stringify(notesData));

        // display data
        res.json(notesData)
    });
}


