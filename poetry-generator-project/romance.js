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
console.log(parseText(text))

// function generateWordPairs(text) {
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

function generateWordPairs(text) {
    let wordPairs = {}
    let storedKey = ''
    for (i = 0; i < text.length - 1; i++) { // iterate through all words
        storedKey = text[i]
        if(wordPairs[storedKey] === undefined){
           wordPairs[storedKey] = [];
        
            for (b = i + 1; b < text.length - (i + 1); b++) { // iterate through following words
                if (storedKey === text[b]) { // check for value equality
                    wordPairs[storedKey].push(text[b])
                }
            } 
        }
        if(text[i + 1] !== storedKey){
            wordPairs[storedKey].push(text[i + 1]) 
        }
        }
    return wordPairs
}








let wordPairs = generateWordPairs(parseText(text))
console.log(wordPairs)