var tagButton;
var sourceText;

function setup(){
    noCanvas();

    // create the Choose file button and once file is selected calls back fileSelected()
    let chooseFileButton = createFileInput(fileSelected);
    chooseFileButton.position(950,53);

    // Select the TAG button
    tagButton = select("#nlp");
    tagButton.mousePressed(tagText);

    // Select the ouptput <p> where the result ing texts will be printed out
    output = select("#outputP");
    taggedOutput = select("#taggedOutputP");

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
            // console.log(file.data);
            sourceText = file.data;
            output.html(sourceText);
        }
    }

    async function tagText(){

        // console.log(sourceText);
        const data = {sourceText};
        
        // options for fetch()
        const options = {
            method : 'POST',
            headers: {
                // use the headers to explicit to the server the format of the post   
                'Content-Type': 'application/json'
            },
                // prepare the data to be sent as a JSON encoded string
            body: JSON.stringify(data)
        }; 

        const response = await fetch('/nlp', options);
        const json = await response.json();

        // DO SOMETHING WITH THE RESPONSE (json) HERE.
        for (var i=0; i < json.content_processed.posTaggedWords.length; i++){
            // rebuild the text here
            console.log(json.content_processed.posTaggedWords[i]);
            // Create a span here
            var synUnit = createSpan((json.content_processed.posTaggedWords[i].word)+" ");

            // get the pos (an array) of the word
            var synUnitPos = json.content_processed.posTaggedWords[i].pos;
            console.log("tagText -> synUnitPos ", synUnitPos )

            // loop through the pos array and case as per switch
            for (var j = 0 ; j < synUnitPos.length; j++){

                var unitPOS = synUnitPos[j];

                // modify the color of the text in the span based on its pos;
                // when synUnitPOS has several values the last case/value is applied
                // e.g word: "naturel", pos: ["NOM", "ADJ"] ends up being an ADJ.
                // the order of tags in synUniPOS has to be fine tuned (i.e. rules have to be made)
                // and set in nlp_mod.js
                // At the moment if a word is both a NOM and an ADJ it should be an ADJ

                switch (unitPOS){
                    case "VER":
                        synUnit.style('color', 'red')
                        break;
                    case "NOM":
                        synUnit.style('color', 'green')
                        break;    
                    case "ADJ":
                        synUnit.style('color', 'blue')
                        break;
                    default:
                        synUnit.style('color', 'grey')
                }
                // output the span to the correct <p>
                synUnit.parent(taggedOutput);
            }

            // var span = createSpan(words[i]);
            // span.parent(output);


            //if the word is a verb print it out in blue
            // if (json.content_processed.posTaggedWords[i].pos.includes("VER")){

            //     var verb = createSpan((json.content_processed.posTaggedWords[i].word)+" ");
            //     verb.style('color', 'red')
            //     verb.parent(taggedOutput);
                
            //     // taggedOutput.style('color', 'blue');
            //     // para.style('margin-left', '1em');

            //     // var pos = createSpan(json.content_processed.posTaggedWords[i].pos);
            //     // pos.parent(taggedOutput);
            //     console.log("tagText -> json", json.content_processed.posTaggedWords[i]);
            // } else { 
            //     console.log("tagText -> json", json.content_processed.posTaggedWords[i]);
            //     var synUnit = createSpan((json.content_processed.posTaggedWords[i].word)+" ");
            //     // verb.style('color', 'red')
            //     synUnit.parent(taggedOutput);

            // }
        }
    }
}