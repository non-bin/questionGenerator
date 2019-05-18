var wordOne     = '';
var wordTwo     = '';
var wordOneNew = '';
var wordTwoNew = '';

// var outWordOne = document.getElementById('word1');
// var outWordTwo = document.getElementById('word2');

function start() {
	console.log(wordlist);

	genBothWords();
}

function genBothWords() {
	do {
		wordOneNew = wordlist[0][randomUpTo(wordlist[0].length-1)];
	} while (wordOne == wordOneNew);

	wordOne = wordOneNew;
	document.getElementById('word1').innerHTML = wordOne;

	genWordTwo();
}

function genWordTwo() {
	do {
		wordTwoNew = wordlist[1][wordOne][randomUpTo(wordlist[1][wordOne].length-1)];
	} while (wordTwo == wordTwoNew);

	wordTwo = wordTwoNew;
	document.getElementById('word2').innerHTML = wordTwo;
}

function randomUpTo(max) // min and max included
{
    return Math.floor(Math.random()*(max+1));
}

setTimeout(function() {
    document.getElementById('instructions').className = 'instructions white hide';
}, 5000)
