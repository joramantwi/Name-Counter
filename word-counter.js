const fs = require('fs');
const names = './textfile/first-names.txt';
const booklet = './textfile/oliver-twist.txt';
const nameCounts = './textfile/name-counts.txt';
let nameVar = fs.readFileSync(names, 'utf8').split(/\s+/);
let bookvar = fs.readFileSync(booklet, 'utf8').split(/\s+/);

let filterWords = filterArray(nameVar, bookvar)
let namesMap = createWordMap(filterWords);
let finalWordsArray = sortByCount(namesMap);


function filterArray(nameVar, bookvar) {
    let filterWords = bookvar.filter(function(e) {
        return nameVar.indexOf(e) > -1;
    });
    return filterWords;
}

function createWordMap(filterWords) {
    let namesMap = {};

    filterWords.forEach(function(key) {
        if (namesMap.hasOwnProperty(key)) {
            namesMap[key]++;
        } else {
            namesMap[key] = 1;
        }
    });

    return namesMap;
}

function sortByCount(namesMap) {
    let finalWordsArray = [namesMap];

    finalWordsArray = Object.keys(namesMap).map(function(key) {
        return {
            name: key,
            counts: namesMap[key]
        };
    });

    finalWordsArray.sort(function(a, b) {
        return b.total - a.total;
    });

    fs.writeFileSync(nameCounts,  JSON.stringify(finalWordsArray, null, 2));
    return finalWordsArray;
}

exports.finalArray = finalWordsArray

