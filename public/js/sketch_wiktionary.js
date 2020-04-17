// let searchUrl = "https://fr.wikipedia.org/w/api.php?action=parse&prop=text&formatversion=2&format=json&page="
// let searchUrl = "https://fr.wikipedia.org/w/api.php?action=opensearch&format=json&search="
let searchUrl = "https://fr.wiktionary.org/w/api.php?action=parse&prop=text&formatversion=2&format=json&page="


let userInput;
let submit;

function setup(){
    noCanvas();

    userInput = select("#userinput");
    submitButton = select("#submit")

    submitButton.mousePressed(goWiki);

    function goWiki(){
        let term = userInput.value();
        let url = searchUrl+term;
        loadJSON(url, gotData, 'jsonp');     
    }

    function gotData(data){
        console.log(data.parse.text);
    }
}