let speech;
let output;

function setup(){
    // noCanvas();

    // create the Choose file button and once file is selected calls back fileSelected()
    let chooseFileButton = createFileInput(fileSelected);
    chooseFileButton.position(950,53);
    // chooseFileButton.attribute('align','center');


    // draw a Black rectangle
    let canvas = createCanvas(400, 20);
    canvas.background(0);
    // only specifyin the position of the left border of the canvas as I want it 
    // to float under th text (which can be of varying length)
    canvas.position(16)

    // Select the oupt put <p> where the text will be printed out
    output = select("#outputP");

    // function highlight(){
    //     console.log(this.html());

    //     // example of replacing a word by "XXXX"
    //     // this.html("XXXX");

    //     // could evaluate this.html by regex and replace()

    //     // could use this.html() for an api call eg1 speech web api eg2 bilingual dictionary 
    // }

    // function receives a file
    function fileSelected(file){
        // the file is a p5.File object
        console.log(file.name, file.size, file.type);

        // if the file is a text file
        if (file.type == "text"){
            // split the files into words as per the regex, into the words array
            // the regex uses group to keep punctuation and spaces.
            // see regex groups https://www.youtube.com/watch?v=c9HbsUSWilw&list=PLRqwX-V7Uu6YrbSJBg32eTzUU50E2B8Ch&index=11
            let words = file.data.split(/(?<!\w\.\w.)(?<![A-Z][a-z]\.)(?<=\.|\?|\!\:)\s+|\p{Cc}+|\p{Cf}+/gm);
            console.log("fileSelected -> words", words);

            // create a span element per word
            for (var i = 0; i < words.length; i++){
                var span = createSpan(words[i]);
                span.parent(output);

                // if the span is not a non word (i.e. is a word), manipulate it
                // if (!/\W+/.test(words[i])){
                //     // MANIPUTE WORD HERE
                //     // span.style('background-color:blue');

                //     // other useful events could be mouseOver() and mouseClicked() 
                //     // events takes a callback function as an argument
                //     span.doubleClicked(highlight);
                // }
            // }
        // } else {createP("Please chose a text file.")}
            }
        }
    }

    // create a new speech synthesis object
    // speech = new p5.Speech(voiceReady);
    // speech.onLoad = voiceReady;

    // // capture when the speech starts and when it finishes
    // //  and call corresponding fuction
    // speech.started(startSpeaking);
    // speech.ended(endSpeaking);

    // function startSpeaking(){
    //     // change background to green when app speaks
    //     background(0,255,0)
    // }

    // function endSpeaking(){
    //     // reverts background to black when app speaks
    //     background(0,0,0)
    // }


    // // voiceReady() callback function is only necessary if you want to list the voices available
    // function voiceReady(){
    //     console.log(speech.voices);
    // }
// }

// JavaScript speechSynthesis.speak() without user activation is no longer allowed since M71
// speech.speak() has to be triggered on user interaction
// https://stackoverflow.com/questions/54265423/javascript-speechsynthesis-speak-without-user-activation-is-no-longer-allowed

// Function is triggered by the Button in frm1
// function sayIt(){
//     // Retrieve the imput value of textfield
//     let input = document.getElementById("textFR").value;
//     // retrive value of slider
//     let rate = document.getElementById("myRange").value/100;
    
//     // display rate of speech
//     document.getElementById("sliderValue").textContent = rate;
    
//     // Just checking I'm getting into that function
//     console.log("click");
    
//     // to set voice, select from the voices listed by voiceReady()
//     // Setting voice to Google UK English Male
//     // speech.setVoice("Google UK English Male");

//     // Setting voice to Google français
//     speech.setVoice("Google français");
//     speech.setRate(rate);
    
//     // speech.setPitch(1);


//     // say this
//     speech.speak(input);
}