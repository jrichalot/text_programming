
var output;

// Functions in setup() are p5.js specific (e.g. createFileInput())
function setup(){
    
    output = select("#outputP");

    noCanvas();
    // joining elements of the array with a <br/> tag (text is preloaded as array by loadStrings())
    // createP(join(txt,"<br/>"));

    
    function highlight(){
        console.log(this.html());

        // example of replacing a word by "XXXX"
        // this.html("XXXX");

        // could evaluate this.html by regex and replace()

        // could use this.html() for an api call eg1 speech web api eg2 bilingual dictionary 
    }

    // function receives a file
    function fileSelected(file){
        // the file is a p5.File object
        console.log(file.name, file.size, file.type);

        // if the file is a text file
        if (file.type == "text"){
            // split the files into words as per the regex, into the words array
            // the regex uses group to keep punctuation and spaces.
            // see regex groups https://www.youtube.com/watch?v=c9HbsUSWilw&list=PLRqwX-V7Uu6YrbSJBg32eTzUU50E2B8Ch&index=11
            var words = file.data.split(/(\W+)/);
            console.log("fileSelected -> words", words);

            // create a span element per word
            for (var i = 0; i < words.length; i++){
                var span = createSpan(words[i]);
                span.parent(output);

                // if the span is not a non word (i.e. is a word), manipulate it
                if (!/\W+/.test(words[i])){
                    // MANIPUTE WORD HERE
                    // span.style('background-color:blue');

                    // other useful events could be mouseOver() and mouseClicked() 
                    // events takes a callback function as an argument
                    span.doubleClicked(highlight);
                }
            }
        } else {createP("Please chose a text file.")}
    }

    // create the Choose file button and once file is selected calls back fileSelected()
    createFileInput(fileSelected);
}


