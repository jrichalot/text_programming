
var inputTextBox;
var outputP;
var inputTextArea;
var submitButton;
var txt;

// preloading a file so that it's ready when I want to use it in setup()
// function preload(){
//     txt = loadStrings("sourdough.txt");
// }

// Functions in setup() are p5.js specific (e.g. createFileInput())
function setup(){
    // log the contents of the file loaded in preload()
    // content is logged as array
    // console.log(txt)
    
    noCanvas();
    // create the inputTextBox inputbox with the default text "Enter text here"
    inputTextBox = createInput("Enter text here");
    // whenever he value of inputTextBox changes, on Enter run newText
    inputTextBox.changed(grabTextBox);

    // select the inputTextArea DOM element
    inputTextArea = select('#inputTextArea');
    // select the submit DOM element
    submitButton = select('#submit');

    // assign the DOM element with an id of 'inputTextArea' to the inputTextArea variable
    inputTextArea = select('#inputTextArea');
    // assign the DOM element with an id of 'outputP' to the outputP variable
    outputP = select('#outputP')
    // Trigger grabTextArea() on mouse presssed on submitButton
    // on mousePressed means on MOUSE pressed...
    // ... Being on the button and pressing the ENter Key is a different event
    submitButton.mousePressed(grabTextArea);

    // insert theh contens of the text file preloaded before setup,
    // joining elements of the array with a <br/> tag (text is preloaded as array by loadStrings())
    // createP(join(txt,"<br/>"));



    var buttonLoadFile = select("#loadfile");
    buttonLoadFile.mousePressed(loadFile);
    async function loadFile(){
        // async function loads the text as an array and when it's ready
        // displays it joining elements of the array with a <br/> tag
        // join() is a p5.js function
        txt = await loadStrings("sourdough.txt", async displayTxt => {
            createP(join(txt, "<br/>"))});
    }

    // function receives a file
    function fileSelected(file){
        // the file is a p5.File object
        console.log(file.name, file.size, file.type);
        if (file.type == "text"){
            createP(file.data);
        } else {createP("Please chose a text file.")}
    }

    // create the Choose file button and once file is selected calls back fileSelected()
    createFileInput(fileSelected);
}

function grabTextArea(){
    // assign the value of inputTextArea to outputP (i.e. the DOM element with an id of 'outputP' )
    console.log(inputTextArea.value());
    outputP.html(inputTextArea.value());
};


// grab the text from the text box on Enter
function grabTextBox(){
    // log the text in the inputTextBox input box
    console.log(inputTextBox.value());
    createP(inputTextBox.value());
}



