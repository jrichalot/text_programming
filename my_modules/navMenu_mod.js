// module used to generate menu on top of all the pages on the site
// the script must read al files in the hmtl dir
// and generate corresponding menu items

//requiring path and fs modules
const path = require('path');
const fs = require('fs');


function createNav(somePath){
    // https://stackoverflow.com/questions/31274329/get-list-of-filenames-in-folder-with-javascript

    // get the file names of the files in the directory passed as a param to the function
    // this returns the fileNames array
    const fileNames = fs.readdirSync(somePath);

    // create the <div> for the menu and the Home (constant) item)
    let menu = "<div class=\"topnav\"> <a class=\"active\" href=\"\\\">Home</a>";

    // create absolute URL realy file path i.e. ./public/html = ../html
    let filePath = "../html/";

    // loop through the fileNames array and create each meun item
    for (var i = 0; i < fileNames.length; i++){

        // extract the name (i.e. filename without extension) to use as menu item using regex
        const name =  fileNames[i].match(/[^\.]*/);
        menu = menu + `<a href=\"${filePath}${fileNames[i]}\">${name}</a>`;
        }

        // <a href="../html/listening_comp.html">test</a>

    // close the <div></div>
    menu = menu + "</div>";

    // return the finished html for the menu
    // this will have to be outputed to each page
    return menu;
}

function sendText(){
    var sometext = "this is some text!";
    return sometext;
}

exports.createNav = createNav;
exports.sendText = sendText;