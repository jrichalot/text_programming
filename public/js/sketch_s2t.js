// createa new speech recogniser passing as args the language and a callback function
// You could pass navigator.language
let lang = 'fr-FR';
let speechRec = new p5.SpeechRec(lang, gotSpeech);

function gotSpeech(){
    console.log("gotSpeech -> speechRec", speechRec);
    if (speechRec.resultValue){

        // build DOM
        const root = document.createElement('div');
        const utterance = document.createElement('span');

        // get recognised utterance
        utterance.textContent = speechRec.resultString;

        // append to div
        root.append(utterance);

        // append div to doc
        document.body.append(root);

        }
    }

// start listening for speech
// The AudioContext must be resumed (or created) after a user gesture
// the function mus be outside setup() to be visible by html triggering file
function startSpeechRec(){
    console.log("starting speech recognition");
    speechRec.start();
    }