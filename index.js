// import express (https://expressjs.com/)
const express = require('express');
// create app
const app = express();
// create server and make to listen on port 3000
const server = app.listen(3000);
// log message to server console
console.log("server listening on port 3000");

// import external module for nlp
const nlp_mod = require('./my_modules/nlp_mod');

// Define /pubilc directory as serving static files (including libraries in /public/libraries)
app.use(express.static('public'));

// enable receiving json data on express server
app.use(express.json({limit: '1mb' }));

// import external module for menus
const getMenu = require('./my_modules/navMenu_mod');

app.get('/menu', (request,response) => {

    // gets the html code for a top navigation menu whose menu items/href
    // are the html files in the director passed as a parameter to createNav()
    const menu = getMenu.createNav('./public/html/');
    // console.log("sending menu");
    
    response.json({
        menu: menu,
        });
    }
);
app.post('/nlp', (request,response) => {

    // get the body of the request
    //  YOU MUST enable receiving json data. See above app.use(express.json())
    const data = request.body; 

    // sourceText processing happens here
    const taggedText = nlp_mod.nlpText(data.sourceText);

    // send response (as a json object) to client
    response.json({
        status: "success",
        content_received: data,
        content_processed: taggedText 
        });
    }
);