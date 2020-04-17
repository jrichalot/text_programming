let speech;

function setup(){
    // noCanvas();


    // draw a Black rectangle
    createCanvas(400, 20);
    background(0);

    // create a new speech synthesis object
    speech = new p5.Speech(voiceReady);
    speech.onLoad = voiceReady;

    // capture when the speech starts and when it finishes
    //  and call corresponding fuction
    speech.started(startSpeaking);
    speech.ended(endSpeaking);

    function startSpeaking(){
        // change background to green when app speaks
        background(0,255,0)
    }

    function endSpeaking(){
        // reverts background to black when app speaks
        background(0,0,0)
    }


    // voiceReady() callback function is only necessary if you want to list the voices available
    function voiceReady(){
        console.log(speech.voices);
    }
}

// JavaScript speechSynthesis.speak() without user activation is no longer allowed since M71
// speech.speak() has to be triggered on user interaction
// https://stackoverflow.com/questions/54265423/javascript-speechsynthesis-speak-without-user-activation-is-no-longer-allowed

// Function is triggered by the Button in frm1
function sayIt(){
    // Retrieve the imput value of textfield
    let input = document.getElementById("textFR").value;
    // retrive value of slider
    let rate = document.getElementById("myRange").value/100;
    
    // display rate of speech
    document.getElementById("sliderValue").textContent = rate;
    
    // Just checking I'm getting into that function
    console.log("click");
    
    // to set voice, select from the voices listed by voiceReady()
    // Setting voice to Google UK English Male
    // speech.setVoice("Google UK English Male");

    // Setting voice to Google français
    speech.setVoice("Google français");
    speech.setRate(rate);
    
    // speech.setPitch(1);
    // 


    // say this
    speech.speak(input);
}