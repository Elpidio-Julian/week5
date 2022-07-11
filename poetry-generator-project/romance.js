let text = "Ever since I left the city, you, you, you You and me we just don't get along";

function parseText(text) {
    text = text.split('. ')
    // splits text by periods/ removes periods
    text = text.join(' ') 
    // returns to string and adds spaces
    text = text.split(', ')
    // splits text by commas
    text = text.join(' ')
    //returns array back to string
    text = text.split(' ')
    // splits by spaces /removes spaces and becomes an array

    
    for(let i = 0; i < text.length; i++) {
        text[i] = text[i].toLowerCase()
    }
    return text
}
let parsedText = parseText(text);
console.log(parseText(text))

// function generateWordPairs(text) { // some code for this function that had some logic bugs
//     let wordPairs = {}
//     for (i = 0; i < text.length - 1; i++) {
//         if (text[i] === text[i+1]) {
//             let storedKey = text[i]
//             wordPairs[storedKey] = []
//             let lastPos = 0;
//             for (b = i; b < text.length - (i + 1); b++) {
//                 if (storedKey === text[b + 1]) {
//                     console.log('pushing')
//                     wordPairs[storedKey].push(text[b + 1])
//                     lastPos = b + 1;
//                 }
//                 continue
//             }
//             i = b
//             wordPairs[storedKey].push(text[lastPos + 1])
//         }
//         wordPairs[text[i]] = [text[i+1]];

//     }
//     return wordPairs
// }

// function generateWordPairs(text) {
//     let wordPairs = {}
//     let storedKey = ''
//     for (i = 0; i < text.length - 1; i++) { // iterate through all words
//         storedKey = text[i]
//         if(wordPairs[storedKey] === undefined){ // check if array has been made yet for the current key
//            wordPairs[storedKey] = [];
        
//             for (b = i + 1; b < text.length - (i + 1); b++) { // iterate through following words
//                 if (storedKey === text[b]) { // check for value equality
//                     wordPairs[storedKey].push(text[b])
//                 }
//             } 
//         }
//         if(text[i + 1] !== storedKey){ // create unique word pairs
//             wordPairs[storedKey].push(text[i + 1]) 
//         }
//         }
//     return wordPairs // return object
// } // for the instructors see my pain

function generateWordPairs(text) {
    let wordPairs = {}
    let storedKey = ''
    for (i = 0; i < text.length - 1; i++) { // iterate through all words
        storedKey = text[i]
        if(wordPairs[storedKey] === undefined){ // check if array has been made yet for the current key
           wordPairs[storedKey] = [];
        }
        wordPairs[storedKey].push(text[i + 1])
        }
    return wordPairs // return object
}








let wordPairs = generateWordPairs(parseText(text))
console.log(wordPairs)

function writeLine(markovChain, words) {
    let writtenLine = '';
    let keys = Object.keys(markovChain)
    for (let i = 0; i <= words; i++) {
        let keyNum = numGen(keys.length - 1)
        if(markovChain[keys[keyNum]].length === 0){
            writtenLine += keys[keyNum] + ' ';
            continue
        }
        let markovWord = numGen(markovChain[keys[keyNum]].length);
        writtenLine += keys[keyNum] + ' ' + markovChain[keys[keyNum]][markovWord] + ' ';

    }
    return writtenLine
    function numGen(max){
        return Math.floor(Math.random() * max);
    }
}




function generatePoem(wordCorpus, lines, words) {
    let wordPairs = generateWordPairs(parseText(wordCorpus))
    for(i = 0; i < lines; i++) {
        console.log(writeLine(wordPairs, words / 2))
    }
}

generatePoem(text, 7, 8)