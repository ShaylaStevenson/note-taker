// dependencies
const fs = require('fs');

// routing
module.exports = (app) => {
    // read the db.json file and save as rawData
    let rawData = fs.readFileSync('./db/db.json');

    // parse rawData to create usable content
    let notesData = JSON.parse(rawData);
    
    //function to be called on to assign new key/value pair (id/index(+1))
    function generateId(note, index) {
        note.id = 1 + index;
    };
      
    // apply the callback function to notesData using map, returning newly modified array
    notesData.map(generateId);  
    console.log(notesData);  
    
    
    
    app.get('/api/notes', (req, res) => res.join(notesData));



    //post
    // Create New Characters - takes in JSON input
// app.post('/api/characters', (req, res) => {
//     // req.body hosts is equal to the JSON post sent from the user
//     // This works because of our body parsing middleware
//     const newcharacter = req.body;
  
//     console.log(newcharacter);
  
//     // We then add the json the user sent to the character array
//     characters.push(newcharacter);
  
//     // We then display the JSON to the users
//     res.json(newcharacter);
//   });
}


