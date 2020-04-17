// import  "nlp-js-tools-french"
// https://www.npmjs.com/package/nlp-js-tools-french
const NlpjsTFr = require('nlp-js-tools-french');

// process the text received
function nlpText(corpus){

    const config = {
        // the order of the tags will be the same if a word matches several tags e.g. "induit" pos: (3) ["ADJ", "NOM", "VER"]
        // At the moment if a word is both a NOM and an ADJ it should be an ADJ so ADJ should appear after NOM in the array


        tagTypes: ["adv", "art", "con", "nom", "adj", "ono", "pre", "ver", "pro"],
        strictness: true,
        minimumLength: 1,
        debug: true
    };

    const nlpToolsFr = new NlpjsTFr(corpus, config);

    var tokenizedWords = nlpToolsFr.tokenized;
    var posTaggedWords = nlpToolsFr.posTagger();
    var lemmatizedWords = nlpToolsFr.lemmatizer();
    var stemmedWords = nlpToolsFr.stemmer();

    return{tokenizedWords, posTaggedWords, lemmatizedWords, stemmedWords}
    }

exports.nlpText = nlpText;