var wordOne         = '';
var wordTwo         = '';
var wordOneNew      = '';
var wordTwoNew      = '';
var wordTwoCategory = '';

function genBothWords() { // regenerate both words
	do {
		wordOneNew = wordlist[0][randomUpTo(wordlist[0].length-1)]; // don't pick the same word again
	} while (wordOne == wordOneNew);

	wordOne = wordOneNew;
	document.getElementById('word1').innerHTML = wordOne; // push it to dom

	genWordTwo();
}

function genWordTwo() { // regenerate the second word
	if (typeof(wordlist[1][wordOne]) == 'string') {
		wordTwoCategory = wordlist[1][wordOne]
	} else {
		wordTwoCategory = wordOne;
	}

	do {
		wordTwoNew = wordlist[1][wordTwoCategory][randomUpTo(wordlist[1][wordTwoCategory].length-1)]; // don't pick the same word again
	} while (wordTwo == wordTwoNew);

	wordTwo = wordTwoNew;
	document.getElementById('word2').innerHTML = wordTwo; // push it to dom
}

function randomUpTo(max) // pick an int up to and including max
{
    return Math.floor(Math.random()*(max+1));
}

setTimeout(function() { // fade out instructions
    document.getElementById('instructions').className = 'instructions white hide';
}, 10000)
